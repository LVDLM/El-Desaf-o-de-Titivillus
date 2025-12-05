import React, { useEffect, useState, useRef } from 'react';
import { LevelData, TextToken } from '../types';
import { Hourglass, AlertOctagon, BookOpen, Feather, LogOut, AlertTriangle, Info, PenTool, CheckCircle, Zap } from 'lucide-react';

interface GameScreenProps {
  levelData: LevelData;
  onComplete: (score: number) => void;
  onGameOver: () => void;
  onMainMenu: () => void;
  gameMode?: 'corrector' | 'scribe';
  isGodMode?: boolean;
}

const GameScreen: React.FC<GameScreenProps> = ({ 
  levelData, 
  onComplete, 
  onGameOver, 
  onMainMenu, 
  gameMode = 'corrector',
  isGodMode = false
}) => {
  // Common State
  const [timeLeft, setTimeLeft] = useState(levelData.timeLimit);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [tutorialMessage, setTutorialMessage] = useState<string | null>(null);

  // Corrector Mode State
  const [tokens, setTokens] = useState<TextToken[]>(levelData.tokens);
  const [foundErrors, setFoundErrors] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<{ id: string, type: 'good' | 'bad' } | null>(null);
  const [seenCorrectMsg, setSeenCorrectMsg] = useState(false);
  const [seenWrongMsg, setSeenWrongMsg] = useState(false);

  // Scribe Mode State
  const [scribeText, setScribeText] = useState('');
  const [scribeErrorCount, setScribeErrorCount] = useState<number | null>(null);
  const [isScribeSubmitted, setIsScribeSubmitted] = useState(false);

  // Initialize tutorial
  useEffect(() => {
    if (levelData.isTutorial && gameMode === 'corrector') {
      setTutorialMessage("Lee el texto de la izquierda con atención. Luego, lee el de la derecha y encuentra los errores.");
    }
    // Scribe mode tutorial (simple)
    if (levelData.isTutorial && gameMode === 'scribe') {
        setTutorialMessage("Modo Escriba: Lee el original y cópialo EXACTAMENTE en el pergamino de la derecha. Cuida cada letra y signo.");
    }
  }, [levelData.isTutorial, gameMode]);

  // Timer Logic
  useEffect(() => {
    if (timeLeft <= 0) {
      onGameOver();
      return;
    }
    
    if (showQuitConfirm || tutorialMessage) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onGameOver, showQuitConfirm, tutorialMessage]);

  // --- CORRECTOR MODE LOGIC ---
  useEffect(() => {
    if (gameMode === 'corrector' && foundErrors === levelData.totalErrors) {
      if (levelData.isTutorial) {
        let msg = "¡Muy bien! Parece que ya puedes empezar a jugar.";
        if (!seenWrongMsg) {
          msg += "\n\n(Recuerda: Si te equivocas y pinchas algo correcto, perderás unos valiosos segundos).";
        }
        setTutorialMessage(msg);
        return; 
      }
      finishLevel();
    }
  }, [foundErrors, levelData.totalErrors, gameMode]);

  const finishLevel = () => {
      const timeBonus = timeLeft * 10;
      const penalty = mistakes * 50;
      const baseScore = 500;
      const finalScore = Math.max(0, baseScore + timeBonus - penalty);
      setTimeout(() => {
        onComplete(finalScore);
      }, 1500);
  };

  const handleTokenClick = (id: string) => {
    if (showQuitConfirm || tutorialMessage || gameMode !== 'corrector') return;

    const tokenIndex = tokens.findIndex(t => t.id === id);
    if (tokenIndex === -1) return;
    const token = tokens[tokenIndex];

    if (token.userFixed || token.revealed || token.text.trim() === '') return;

    if (token.isError) {
      const newTokens = [...tokens];
      newTokens[tokenIndex] = { ...token, userFixed: true };
      setTokens(newTokens);
      setFoundErrors(prev => prev + 1);
      setLastFeedback({ id, type: 'good' });

      if (levelData.isTutorial && !seenCorrectMsg) {
        setSeenCorrectMsg(true);
        setTutorialMessage("Los errores corregidos aparecerán en rojo. Mira el contador de errores para saber cuántos te faltan por descubrir.");
      }
    } else {
      setMistakes(prev => prev + 1);
      setTimeLeft(prev => Math.max(0, prev - 5)); 
      setLastFeedback({ id, type: 'bad' });
      setTimeout(() => setLastFeedback(null), 500);

      if (levelData.isTutorial && !seenWrongMsg) {
        setSeenWrongMsg(true);
        setTutorialMessage("Si te equivocas y pinchas algo correcto, perderás unos valiosos segundos.");
      }
    }
  };

  const handleTutorialClose = () => {
    setTutorialMessage(null);
    if (levelData.isTutorial) {
        if (gameMode === 'corrector' && foundErrors === levelData.totalErrors) {
             onComplete(0);
        }
        // Scribe mode tutorial completion logic is handled in submit
    }
  };

  // --- SCRIBE MODE LOGIC ---
  const handleScribeSubmit = () => {
    const original = levelData.originalText.trim();
    const user = scribeText.trim();
    
    if (original === user) {
        setIsScribeSubmitted(true);
        if (levelData.isTutorial) {
            setTutorialMessage("¡Perfecto! Has copiado el texto sin mácula. Estás listo para ser un Escriba Maestro.");
            // on close will trigger onComplete via the check above? No, need specific handling.
            // Actually, handleTutorialClose handles it if foundErrors match. But foundErrors is for corrector.
            // Let's modify handleTutorialClose or just call onComplete here after a delay.
             setTimeout(() => onComplete(0), 2000); 
             return;
        }
        finishLevel();
    } else {
        // Calculate diff
        const originalWords = original.split(/\s+/);
        const userWords = user.split(/\s+/);
        let errors = 0;
        
        // Simple length check diff + word compare
        errors += Math.abs(originalWords.length - userWords.length);
        const limit = Math.min(originalWords.length, userWords.length);
        
        for(let i=0; i<limit; i++) {
            if (originalWords[i] !== userWords[i]) errors++;
        }
        
        setScribeErrorCount(errors);
        
        // Scribe penalty? Maybe just time keeps running.
        // Let's deduct some time for a failed submission to prevent spamming
        setTimeLeft(prev => Math.max(0, prev - 10));
    }
  };

  // GOD MODE HELPER
  const handleGodModeAutoComplete = () => {
    if (gameMode === 'scribe') {
      setScribeText(levelData.originalText);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-2 md:p-4 pt-4 md:pt-8 text-parchment-900 font-serif relative">
      
      {/* Header / HUD */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4 md:mb-6 px-4 py-3 bg-parchment-800 text-parchment-100 rounded shadow-lg border-2 border-gold sticky top-2 z-40">
        <div className="flex items-center gap-2">
           <Hourglass className={`${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-parchment-200'}`} />
           <span className="text-xl font-display font-bold tabular-nums">{timeLeft}s</span>
        </div>
        <div className="text-center hidden lg:block">
           <span className="text-sm opacity-70 uppercase tracking-widest">{levelData.description}</span>
           {isGodMode && <span className="ml-2 text-xs bg-purple-600 px-1 rounded font-mono">DEBUG</span>}
        </div>
        <div className="flex items-center gap-4">
          {gameMode === 'corrector' ? (
              <div className="flex items-center gap-1 text-gold">
                <AlertOctagon size={18} />
                <span>{levelData.totalErrors - foundErrors} Restantes</span>
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
             
             <div className="relative text-xl md:text-2xl leading-relaxed text-justify text-ink font-serif mb-8 select-none">
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
                        className="w-full flex-grow bg-transparent border-none resize-none outline-none font-serif text-xl md:text-2xl leading-relaxed text-ink p-0 placeholder:text-parchment-900/20 italic"
                        placeholder="Copia el texto aquí con exactitud..."
                        value={scribeText}
                        onChange={(e) => setScribeText(e.target.value)}
                        spellCheck={false}
                        disabled={isScribeSubmitted || timeLeft <= 0}
                    />
                    
                    {scribeErrorCount !== null && !isScribeSubmitted && (
                         <div className="mt-4 p-3 bg-red-100/80 border border-red-300 rounded text-blood flex items-center gap-2 animate-shake">
                             <AlertTriangle size={20} />
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
                <div className="relative text-xl md:text-2xl leading-relaxed text-justify text-ink font-serif italic tracking-normal">
                {tokens.map((token) => {
                    const isSpace = token.text === ' ';
                    let baseClasses = "inline transition-colors duration-200 select-none rounded-sm";
                    
                    if (!isSpace) {
                        baseClasses += " cursor-pointer hover:bg-parchment-300 hover:text-black hover:shadow-sm";
                    }

                    if (token.userFixed) {
                        baseClasses += " text-blood";
                    } else if (lastFeedback?.id === token.id && lastFeedback.type === 'bad') {
                        baseClasses += " animate-shake bg-red-200/50";
                    }

                    // GOD MODE WALLHACK
                    if (isGodMode && token.isError && !token.userFixed) {
                        baseClasses += " border-2 border-blue-400/50 bg-blue-100/30";
                    }

                    return (
                    <span 
                        key={token.id}
                        className={baseClasses}
                        onClick={() => !isSpace && handleTokenClick(token.id)}
                    >
                        {token.userFixed ? token.correction : token.text}
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
                <p>Pincha sobre las <span className="text-gold">sílabas</span> o signos erróneos para aplicar la corrección.</p>
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
                Si abandonas ahora, <strong>todo tu progreso se perderá</strong> y Titivillus habrá ganado esta batalla.
              </p>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={onMainMenu}
                  className="bg-parchment-800 text-parchment-100 px-4 py-2 rounded font-bold hover:bg-blood transition-colors"
                >
                  Sí, renuncio a mi pluma
                </button>
                <button 
                  onClick={() => setShowQuitConfirm(false)}
                  className="bg-transparent border-2 border-parchment-800 text-parchment-900 px-4 py-2 rounded font-bold hover:bg-parchment-300 transition-colors"
                >
                  No, volveré al trabajo
                </button>
              </div>
           </div>
        </div>
      )}

      {/* Tutorial Message Modal */}
      {tutorialMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
           <div className="bg-parchment-200 border-4 border-gold rounded shadow-2xl p-8 max-w-md w-full text-center relative animate-ink-blot">
              <div className="flex justify-center mb-4">
                <Info className="text-parchment-800 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-display font-bold text-parchment-900 mb-4">Consejo del maestre</h3>
              <p className="font-serif text-lg text-parchment-900 mb-8 leading-relaxed whitespace-pre-line">
                {tutorialMessage}
              </p>
              
              <button 
                onClick={handleTutorialClose}
                className="bg-parchment-800 text-parchment-100 px-6 py-2 rounded font-bold hover:bg-gold hover:text-parchment-900 transition-colors border-2 border-transparent hover:border-parchment-800"
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