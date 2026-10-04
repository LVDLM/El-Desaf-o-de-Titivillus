import React, { useEffect, useState } from 'react';
import { LevelData, TextToken, ScribeDiscrepancy } from '../types';
import { Hourglass, AlertOctagon, BookOpen, Feather, LogOut, AlertTriangle, PenTool, CheckCircle, Zap, Type } from 'lucide-react';

export const computeScribeDiscrepancies = (original: string, user: string): ScribeDiscrepancy[] => {
  const originalWords = original.trim().replace(/\s+/g, ' ').split(' ').filter(Boolean);
  const userWords = user.trim().replace(/\s+/g, ' ').split(' ').filter(Boolean);
  
  const m = originalWords.length;
  const n = userWords.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (originalWords[i - 1] === userWords[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],
          dp[i][j - 1],
          dp[i - 1][j - 1]
        );
      }
    }
  }

  let i = m;
  let j = n;
  const diffs: ScribeDiscrepancy[] = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && originalWords[i - 1] === userWords[j - 1]) {
      i--;
      j--;
    } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
      diffs.push({ incorrect: userWords[j - 1], correct: originalWords[i - 1] });
      i--;
      j--;
    } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
      diffs.push({ incorrect: '(omisión)', correct: originalWords[i - 1] });
      i--;
    } else {
      diffs.push({ incorrect: userWords[j - 1], correct: '(palabra sobrante)' });
      j--;
    }
  }

  return diffs.reverse();
};

interface GameScreenProps {
  levelData: LevelData;
  onComplete: (score: number, scribeDiscrepancies?: ScribeDiscrepancy[]) => void;
  onGameOver: (scribeDiscrepancies?: ScribeDiscrepancy[]) => void;
  onMainMenu: () => void;
  gameMode?: 'corrector' | 'scribe';
  isGodMode?: boolean;
  isUntimedMode?: boolean;
  onLevelFinish?: (success: boolean, score: number, finalTokens: TextToken[]) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ 
  levelData, 
  onComplete, 
  onGameOver, 
  onMainMenu, 
  gameMode = 'corrector',
  isGodMode = false,
  isUntimedMode = false,
  onLevelFinish
}) => {
  // Common State
  const [timeLeft, setTimeLeft] = useState(levelData.timeLimit);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [tutorialMessage, setTutorialMessage] = useState<string | null>(null);

  // Typography size accessibility control ('sm' | 'md' | 'lg')
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>(() => {
    try {
      const saved = localStorage.getItem('titivillus_font_size');
      if (saved === 'sm' || saved === 'md' || saved === 'lg') return saved;
    } catch (e) {}
    return 'md';
  });

  // Corrector Mode State
  const [tokens, setTokens] = useState<TextToken[]>(levelData.tokens);
  const [foundErrors, setFoundErrors] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<{ id: string, type: 'good' | 'bad' | 'bad-space' } | null>(null);
  
  // Tutorial States
  const [seenCorrectMsg, setSeenCorrectMsg] = useState(false);
  const [seenWrongMsg, setSeenWrongMsg] = useState(false);

  // Scribe Mode State
  const [scribeText, setScribeText] = useState('');
  const [scribeErrorCount, setScribeErrorCount] = useState<number | null>(null);
  const [scribeDiscrepancies, setScribeDiscrepancies] = useState<ScribeDiscrepancy[]>([]);
  const [isScribeSubmitted, setIsScribeSubmitted] = useState(false);

  const handleFontSizeChange = (size: 'sm' | 'md' | 'lg') => {
    setFontSize(size);
    try {
      localStorage.setItem('titivillus_font_size', size);
    } catch (e) {}
  };

  // Reset tokens and state when levelData changes
  useEffect(() => {
    setTokens(levelData.tokens);
    setFoundErrors(0);
    setMistakes(0);
    setTimeLeft(levelData.timeLimit);
    setScribeText('');
    setScribeErrorCount(null);
    setScribeDiscrepancies([]);
    setIsScribeSubmitted(false);
  }, [levelData]);

  // Initialize tutorial
  useEffect(() => {
    if (levelData.isTutorial && gameMode === 'corrector') {
      setTutorialMessage("Lee el texto de la izquierda con atención. Luego, lee el de la derecha y encuentra los errores.");
    }
    if (levelData.isTutorial && gameMode === 'scribe') {
      setTutorialMessage("Modo Escriba: Lee el original y cópialo EXACTAMENTE en el pergamino de la derecha. Cuida cada letra y signo.");
    }
  }, [levelData.isTutorial, gameMode]);

  // Finish level calculation
  const finishLevel = (isSuccess: boolean = true) => {
    // Scoring formula: prioritize precision over speed
    const baseScore = isSuccess ? 300 : 0;
    const aciertoScore = gameMode === 'scribe'
      ? (isSuccess ? levelData.totalErrors * 150 : 0)
      : foundErrors * 150;
    const penalty = Math.round(mistakes * 75);
    const timeBonus = isUntimedMode ? 0 : Math.min(timeLeft * 2, levelData.totalErrors * 25);
    const finalScore = Math.max(0, baseScore + aciertoScore + timeBonus - penalty);

    if (gameMode === 'scribe') {
      // En modo escriba, la transcripción del original es completa y directa;
      // no debe pasar por LevelReviewScreen (pantalla exclusiva para cotejar tokens del modo corrector)
      setTimeout(() => {
        if (isSuccess) {
          onComplete(finalScore, scribeDiscrepancies);
        } else {
          onGameOver(scribeDiscrepancies);
        }
      }, 1000);
      return;
    }

    if (onLevelFinish) {
      setTimeout(() => {
        onLevelFinish(isSuccess, finalScore, tokens);
      }, 1000);
    } else {
      setTimeout(() => {
        if (isSuccess) {
          onComplete(finalScore);
        } else {
          onGameOver();
        }
      }, 1000);
    }
  };

  // Timer Logic
  useEffect(() => {
    if (isUntimedMode) return; // In untimed mode, no clock tick or timeout

    if (timeLeft <= 0) {
      if (gameMode === 'corrector' && onLevelFinish) {
        finishLevel(false);
      } else if (gameMode === 'scribe') {
        const diffs = computeScribeDiscrepancies(levelData.originalText, scribeText);
        onGameOver(diffs);
      } else {
        onGameOver();
      }
      return;
    }
    
    if (showQuitConfirm || tutorialMessage) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onGameOver, showQuitConfirm, tutorialMessage, isUntimedMode, gameMode, onLevelFinish]);

  // --- CORRECTOR MODE LOGIC ---
  useEffect(() => {
    if (gameMode === 'corrector' && !levelData.isTutorial) {
      if (foundErrors === levelData.totalErrors) {
        finishLevel(true);
      }
    }
  }, [foundErrors, levelData.totalErrors, gameMode, levelData.isTutorial]);

  const handleTokenClick = (id: string) => {
    if (showQuitConfirm || tutorialMessage || gameMode !== 'corrector') return;

    const tokenIndex = tokens.findIndex(t => t.id === id);
    if (tokenIndex === -1) return;
    const token = tokens[tokenIndex];

    if (token.userFixed || token.revealed) return;

    if (token.isError) {
      // HANDLE CORRECT CLICK (Found an error)
      const newTokens = [...tokens];
      newTokens[tokenIndex] = { ...token, userFixed: true };
      setTokens(newTokens);
      const newFoundCount = foundErrors + 1;
      setFoundErrors(newFoundCount);
      setLastFeedback({ id, type: 'good' });

      // Tutorial Logic for Correct Clicks
      if (levelData.isTutorial) {
        if (newFoundCount === 1) {
          setTutorialMessage("Los errores corregidos aparecerán marcados. Mira el contador de errores para saber cuántos te faltan por descubrir.");
        } else if (newFoundCount === 2) {
          setTutorialMessage("¡Excelente! Has encontrado otro error. Sigue comparando ambos textos.");
        } else if (newFoundCount === 3) {
          setTutorialMessage("¡Ya casi está! Pero observa que el contador de errores indica que faltan más de los que ves...");
        } else if (newFoundCount === 4) {
          if (seenWrongMsg) {
            setTutorialMessage("¡Muy bien! Parece que ya puedes empezar a jugar.");
          }
        }
      }

    } else {
      // HANDLE WRONG CLICK (Mistake / Distractor / Hueco sin error)
      const isSpaceMistake = token.kind === 'space';
      // Menor penalización en huecos de espaciado que en palabras completas
      const mistakeCost = isSpaceMistake ? 0.5 : 1;
      setMistakes(prev => prev + mistakeCost);
      
      if (!isUntimedMode) {
        const timePenalty = isSpaceMistake ? 2 : 5;
        setTimeLeft(prev => Math.max(0, prev - timePenalty)); 
      }
      
      setLastFeedback({ id, type: isSpaceMistake ? 'bad-space' : 'bad' });
      setTimeout(() => setLastFeedback(null), 500);

      // Tutorial Logic for Mistakes
      if (levelData.isTutorial && !seenWrongMsg) {
        setSeenWrongMsg(true);
        setTutorialMessage("Si pulsas sobre algo correcto o un hueco sin errata, Titivillus te castigará restando tiempo. ¡Cuidado!");
      }
    }
  };

  const handleTutorialClose = () => {
    setTutorialMessage(null);

    if (levelData.isTutorial && gameMode === 'corrector') {
      const realErrorsTotal = 4;
      const hasFoundAllRealErrors = foundErrors >= realErrorsTotal;
      const hasLearnedPenalty = seenWrongMsg;

      if (hasFoundAllRealErrors && hasLearnedPenalty) {
        finishLevel(true);
      }
    }
  };

  // --- SCRIBE MODE LOGIC ---
  const handleScribeSubmit = () => {
    // Normalizar espacios continuos para que dobles espacios accidentales no causen error
    const original = levelData.originalText.trim().replace(/\s+/g, ' ');
    const user = scribeText.trim().replace(/\s+/g, ' ');
    
    if (original === user) {
      setIsScribeSubmitted(true);
      setScribeDiscrepancies([]);
      setScribeErrorCount(0);
      if (levelData.isTutorial) {
        setTutorialMessage("¡Perfecto! Has copiado el texto sin mácula. Estás listo para ser un Escriba Maestro.");
        setTimeout(() => onComplete(0, []), 2000); 
        return;
      }
      finishLevel(true);
    } else {
      const diffs = computeScribeDiscrepancies(levelData.originalText, scribeText);
      const errors = Math.max(1, diffs.length);
      
      setScribeDiscrepancies(diffs);
      setScribeErrorCount(errors);
      if (!isUntimedMode) {
        setTimeLeft(prev => Math.max(0, prev - 10));
      }
    }
  };

  // GOD MODE HELPER
  const handleGodModeAutoComplete = () => {
    if (gameMode === 'scribe') {
      setScribeText(levelData.originalText);
    }
  };

  const remainingErrorsDisplay = levelData.isTutorial 
    ? Math.max(0, levelData.totalErrors - foundErrors - (seenWrongMsg ? 1 : 0))
    : levelData.totalErrors - foundErrors;

  // Typography size classes
  const fontClass = {
    sm: 'text-base md:text-xl leading-relaxed',
    md: 'text-xl md:text-2xl leading-relaxed',
    lg: 'text-2xl md:text-3xl leading-loose'
  }[fontSize];

  return (
    <div className="flex flex-col items-center min-h-screen p-2 md:p-4 pt-4 md:pt-8 text-parchment-900 font-serif relative">
      
      {/* Header / HUD */}
      <div className="w-full max-w-6xl flex flex-wrap justify-between items-center gap-2 mb-4 md:mb-6 px-4 py-3 bg-parchment-800 text-parchment-100 rounded shadow-lg border-2 border-gold sticky top-2 z-40">
        
        {/* Left: Timer / Practice Indicator */}
        <div className="flex items-center gap-2">
          <Hourglass className={`${!isUntimedMode && timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-parchment-200'}`} />
          <span className="text-xl font-display font-bold tabular-nums">
            {isUntimedMode ? '∞ (Práctica)' : `${timeLeft}s`}
          </span>
        </div>

        {/* Center: Title / Level Description */}
        <div className="text-center hidden lg:block">
          <span className="text-sm opacity-70 uppercase tracking-widest">{levelData.description}</span>
          {isGodMode && <span className="ml-2 text-xs bg-purple-600 px-1.5 py-0.5 rounded font-mono">DEBUG</span>}
        </div>

        {/* Right: Typography size controls & Status */}
        <div className="flex items-center gap-3">
          
          {/* Typography Scale Control */}
          <div className="flex items-center gap-1 bg-parchment-900/60 p-0.5 rounded border border-parchment-700/60" title="Tamaño de letra">
            <Type size={14} className="text-parchment-300 ml-1 mr-0.5 hidden sm:inline" />
            <button
              onClick={() => handleFontSizeChange('sm')}
              className={`px-2 py-0.5 text-xs font-bold font-sans rounded transition-colors ${fontSize === 'sm' ? 'bg-gold text-black shadow-xs' : 'text-parchment-300 hover:text-white'}`}
              aria-label="Letra pequeña"
              title="Letra pequeña"
            >
              A-
            </button>
            <button
              onClick={() => handleFontSizeChange('md')}
              className={`px-2 py-0.5 text-xs font-bold font-sans rounded transition-colors ${fontSize === 'md' ? 'bg-gold text-black shadow-xs' : 'text-parchment-300 hover:text-white'}`}
              aria-label="Letra normal"
              title="Letra normal"
            >
              A
            </button>
            <button
              onClick={() => handleFontSizeChange('lg')}
              className={`px-2 py-0.5 text-xs font-bold font-sans rounded transition-colors ${fontSize === 'lg' ? 'bg-gold text-black shadow-xs' : 'text-parchment-300 hover:text-white'}`}
              aria-label="Letra grande"
              title="Letra grande"
            >
              A+
            </button>
          </div>

          {gameMode === 'corrector' ? (
            <div className="flex items-center gap-1 text-gold font-bold">
              <AlertOctagon size={18} />
              <span>{remainingErrorsDisplay} Restantes</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-parchment-200 opacity-80">
              <PenTool size={18} />
              <span>Modo Escriba</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Game Area - Split View */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 flex-grow">
        
        {/* Left Column: The "Original" (Book Model) */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-2 text-parchment-200 opacity-80 px-2">
            <BookOpen size={20} />
            <h3 className="font-display font-bold uppercase tracking-widest text-sm">Texto Original (Modelo)</h3>
          </div>
          <div className="bg-parchment-300 shadow-2xl relative flex-grow rounded-l-md border-r-4 border-parchment-900 p-6 md:p-10 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            
            <div className={`relative ${fontClass} text-justify text-ink font-serif mb-8 select-none`}>
              <span className="float-left text-6xl leading-[0.8] font-display font-bold text-parchment-900 mr-2 mt-[-4px]">
                {levelData.originalText.charAt(0)}
              </span>
              {levelData.originalText.slice(1)}
            </div>

            {(levelData.bookTitle || levelData.bookAuthor) && (
              <div className="relative mt-4 pt-4 border-t border-parchment-900/20 text-right">
                {levelData.bookTitle && (
                  <div className="font-display font-bold text-parchment-900/90 text-sm md:text-base italic">
                    {levelData.bookTitle}
                  </div>
                )}
                {levelData.bookAuthor && (
                  <div className="font-serif text-parchment-900/60 text-xs md:text-sm mt-1">
                    {levelData.bookAuthor}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Area */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-2 text-parchment-200 opacity-80 px-2">
            {gameMode === 'scribe' ? <PenTool size={20} /> : <Feather size={20} />}
            <h3 className="font-display font-bold uppercase tracking-widest text-sm">
              {gameMode === 'scribe' ? 'Tu Pergamino (Transcribe)' : 'Tu Manuscrito (Corrígelo)'}
            </h3>
          </div>
          
          <div className="bg-parchment-100 shadow-2xl relative flex-grow rounded-r-md p-6 md:p-10 overflow-hidden min-h-[40vh] flex flex-col">
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
            
            {gameMode === 'scribe' ? (
              // --- SCRIBE INTERFACE ---
              <div className="relative flex-grow flex flex-col h-full">
                <textarea 
                  className={`w-full flex-grow bg-transparent border-none resize-none outline-none font-serif ${fontClass} text-ink p-0 placeholder:text-parchment-900/20 italic`}
                  placeholder="Copia el texto aquí con exactitud..."
                  value={scribeText}
                  onChange={(e) => setScribeText(e.target.value)}
                  spellCheck={false}
                  disabled={isScribeSubmitted || (!isUntimedMode && timeLeft <= 0)}
                />
                
                {scribeErrorCount !== null && !isScribeSubmitted && (
                  <div className="mt-4 p-3 bg-red-100/90 border border-red-300 rounded text-blood flex items-center gap-2 animate-shake">
                    <AlertTriangle size={20} className="shrink-0" />
                    <span className="font-bold text-sm">
                      Titivillus ha conseguido que cometas {scribeErrorCount} {scribeErrorCount === 1 ? 'error' : 'errores'}.
                    </span>
                  </div>
                )}
                
                {isScribeSubmitted && (
                  <div className="mt-4 p-3 bg-green-100/80 border border-green-300 rounded text-green-800 flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span className="font-bold text-sm">¡Copia perfecta! Laus Deo.</span>
                  </div>
                )}

                {!isScribeSubmitted && (
                  <div className="mt-4 flex justify-between items-center">
                    {isGodMode ? (
                      <button
                        onClick={handleGodModeAutoComplete}
                        className="text-xs bg-purple-200 text-purple-900 px-2 py-1 rounded hover:bg-purple-300 flex items-center gap-1"
                      >
                        <Zap size={12}/> Auto-Completar
                      </button>
                    ) : <div></div>}

                    <button 
                      onClick={handleScribeSubmit}
                      className="bg-parchment-800 text-parchment-100 px-6 py-2 rounded font-display font-bold hover:bg-parchment-900 transition-colors shadow-lg"
                    >
                      Entregar Trabajo
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // --- CORRECTOR INTERFACE ---
              <div className={`relative ${fontClass} text-justify text-ink font-serif italic tracking-normal`}>
                {tokens.map((token) => {
                  const isPunct = token.kind === 'punct';
                  const isSpaceToken = token.kind === 'space';
                  const isRegularInertSpace = (isSpaceToken || token.text === ' ') && !token.isError && !token.userFixed;

                  // Inert regular space between ordinary words
                  if (isRegularInertSpace && token.kind !== 'punct') {
                    return (
                      <span key={token.id} className="select-none inline">
                        {" "}
                      </span>
                    );
                  }

                  // Interactive space / hueco (omission of word or erroneous spacing)
                  // Garantiza un área táctil mínima de 40 px en móvil (-my-2 con min-h-[40px])
                  if (isSpaceToken) {
                    if (token.userFixed) {
                      return (
                        <span 
                          key={token.id}
                          className="inline-flex items-baseline text-blood font-bold underline decoration-blood decoration-2 underline-offset-4 bg-red-100/70 px-1.5 py-0.5 rounded-sm select-none"
                        >
                          <span>{token.correction}</span>
                          <span className="ml-1 text-[10px] leading-tight font-sans font-extrabold bg-blood text-white px-1 py-0 rounded-xs not-italic select-none" title="Corregido">
                            ✓
                          </span>
                        </span>
                      );
                    }

                    return (
                      <span
                        key={token.id}
                        onClick={() => handleTokenClick(token.id)}
                        className={`relative inline-flex items-center justify-center min-w-[18px] min-h-[40px] -my-2 mx-0.5 rounded cursor-pointer transition-all select-none touch-manipulation align-middle active:scale-90 ${
                          lastFeedback?.id === token.id && lastFeedback.type === 'bad-space'
                            ? 'animate-shake bg-amber-200/90 border-2 border-amber-600'
                            : isGodMode
                            ? 'border-2 border-blue-500 bg-blue-100/50'
                            : 'hover:bg-gold/30 hover:border-gold/70 border border-dashed border-amber-900/30 active:bg-gold/60'
                        }`}
                        title="Hueco de cotejo (área táctil accesible)"
                      >
                        <span className="w-1.5 h-3.5 bg-amber-900/20 rounded-xs pointer-events-none"></span>
                      </span>
                    );
                  }

                  // Word or Punctuation Token
                  let baseClasses = "inline transition-all duration-200 select-none rounded-sm cursor-pointer";
                  
                  if (isPunct) {
                    if (!token.text) {
                      // Signo omitido (ej. ¿ o ¡ ausente) - área táctil interactiva visible
                      baseClasses = "inline-flex items-center justify-center min-w-[18px] min-h-[36px] -my-1 mx-0.5 rounded-xs cursor-pointer transition-all select-none touch-manipulation align-middle border border-dashed border-amber-900/30 hover:bg-gold/30 hover:border-gold/70 active:bg-gold/60";
                    } else {
                      baseClasses += " px-0.5 hover:bg-parchment-300 hover:text-black";
                    }
                  } else {
                    baseClasses += " hover:bg-parchment-300 hover:text-black hover:shadow-sm";
                  }

                  // ACCESIBILIDAD: Marcado no solo por color sino con subrayado y distintivo
                  if (token.userFixed) {
                    return (
                      <span 
                        key={token.id}
                        className="inline-flex items-baseline text-blood font-bold underline decoration-blood decoration-2 underline-offset-4 select-none"
                      >
                        <span>{token.correction}</span>
                        <span className="ml-1 text-[10px] leading-tight font-sans font-extrabold bg-blood text-white px-1 py-0 rounded-xs not-italic select-none" title="Corregido">
                          ✓
                        </span>
                      </span>
                    );
                  }
                  
                  if (lastFeedback?.id === token.id && (lastFeedback.type === 'bad' || lastFeedback.type === 'bad-space')) {
                    baseClasses += " animate-shake bg-red-200/70 underline decoration-wavy decoration-red-700 decoration-2";
                  }

                  // GOD MODE WALLHACK
                  if (isGodMode && token.isError && !token.userFixed) {
                    baseClasses += " border-2 border-blue-400/50 bg-blue-100/30";
                  }

                  return (
                    <span 
                      key={token.id}
                      className={baseClasses}
                      onClick={() => handleTokenClick(token.id)}
                    >
                      {token.text}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 mb-8 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-parchment-300 text-center md:text-left text-sm md:text-base opacity-70 flex-grow">
          {gameMode === 'scribe' ? (
            <p>Escribe el texto exacto. El tiempo corre y los errores se pagan.</p>
          ) : (
            <>
              <p>Compara tu manuscrito (derecha) con el original (izquierda).</p>
              <p>Pincha sobre las <span className="text-gold">palabras, signos o huecos</span> erróneos para aplicar la corrección.</p>
            </>
          )}
        </div>
        
        <button 
          onClick={() => setShowQuitConfirm(true)}
          className="flex items-center gap-2 text-parchment-300 hover:text-red-400 opacity-60 hover:opacity-100 transition-all font-serif text-sm border border-transparent hover:border-red-400/30 rounded px-3 py-1"
        >
          <LogOut size={16} />
          Abandonar Scriptorium
        </button>
      </div>

      {/* Quit Confirmation Modal */}
      {showQuitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-parchment-200 border-4 border-parchment-800 rounded shadow-2xl p-6 max-w-sm w-full text-center relative animate-ink-blot">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="text-blood w-12 h-12" />
            </div>
            <h3 className="text-2xl font-display font-bold text-parchment-900 mb-2">¿Abandonar Tarea?</h3>
            <p className="font-serif text-parchment-900 mb-6 leading-relaxed">
              Si abandonas ahora, el demonio Titivillus se regocijará y tu progreso en este pergamino se perderá.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowQuitConfirm(false)}
                className="bg-parchment-800 text-parchment-100 px-4 py-2 rounded font-bold hover:bg-parchment-900"
              >
                Continuar
              </button>
              <button
                onClick={onMainMenu}
                className="border border-blood text-blood px-4 py-2 rounded font-bold hover:bg-blood hover:text-white"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tutorial Guidance Modal */}
      {tutorialMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-parchment-200 border-4 border-gold rounded-lg shadow-2xl p-6 max-w-md w-full text-center relative animate-ink-blot font-serif">
            <h3 className="text-xl font-display font-bold text-parchment-900 mb-3">
              Instrucción del Maestro
            </h3>
            <p className="text-parchment-900 mb-6 text-lg leading-relaxed">
              {tutorialMessage}
            </p>
            <button
              onClick={handleTutorialClose}
              className="bg-parchment-800 text-parchment-100 px-6 py-2 rounded font-display font-bold hover:bg-gold hover:text-parchment-900 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default GameScreen;
