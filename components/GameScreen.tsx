import React, { useEffect, useState } from 'react';
import { LevelData, TextToken } from '../types';
import { Hourglass, AlertOctagon, BookOpen, Feather, LogOut, AlertTriangle, Info } from 'lucide-react';

interface GameScreenProps {
  levelData: LevelData;
  onComplete: (score: number) => void;
  onGameOver: () => void;
  onMainMenu: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ levelData, onComplete, onGameOver, onMainMenu }) => {
  const [tokens, setTokens] = useState<TextToken[]>(levelData.tokens);
  const [timeLeft, setTimeLeft] = useState(levelData.timeLimit);
  const [foundErrors, setFoundErrors] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<{ id: string, type: 'good' | 'bad' } | null>(null);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);

  // Tutorial States
  const [tutorialMessage, setTutorialMessage] = useState<string | null>(null);
  const [seenCorrectMsg, setSeenCorrectMsg] = useState(false);
  const [seenWrongMsg, setSeenWrongMsg] = useState(false);

  // Initialize tutorial
  useEffect(() => {
    if (levelData.isTutorial) {
      setTutorialMessage("Lee el texto de la izquierda con atención. Luego, lee el de la derecha y encuentra los errores.");
    }
  }, [levelData.isTutorial]);

  // Timer Logic
  useEffect(() => {
    // Pause timer if game is over, quit modal is open, or tutorial message is showing
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

  // Check win condition
  useEffect(() => {
    if (foundErrors === levelData.totalErrors) {
      
      // If tutorial, show final message before completing
      if (levelData.isTutorial) {
        let msg = "¡Muy bien! Parece que ya puedes empezar a jugar.";
        if (!seenWrongMsg) {
          msg += "\n\n(Recuerda: Si te equivocas y pinchas algo correcto, perderás unos valiosos segundos).";
        }
        setTutorialMessage(msg);
        return; // Wait for user to close modal to trigger onComplete
      }

      // Calculate score based on time left and accuracy
      const timeBonus = timeLeft * 10;
      const penalty = mistakes * 50;
      const baseScore = 500;
      const finalScore = Math.max(0, baseScore + timeBonus - penalty);
      
      // Small delay to show the last correction
      setTimeout(() => {
        onComplete(finalScore);
      }, 1500);
    }
  }, [foundErrors, levelData.totalErrors, timeLeft, mistakes, onComplete, levelData.isTutorial, seenWrongMsg]);

  const handleTutorialClose = () => {
    setTutorialMessage(null);
    // If we just closed the final success message of the tutorial, finish the level
    if (levelData.isTutorial && foundErrors === levelData.totalErrors) {
       onComplete(0); // Score 0 for tutorial
    }
  };

  const handleTokenClick = (id: string) => {
    // Prevent clicking while modals are open
    if (showQuitConfirm || tutorialMessage) return;

    // Find token
    const tokenIndex = tokens.findIndex(t => t.id === id);
    if (tokenIndex === -1) return;

    const token = tokens[tokenIndex];

    // Ignore if already fixed or just a space
    if (token.userFixed || token.revealed || token.text.trim() === '') return;

    if (token.isError) {
      // Correct click!
      const newTokens = [...tokens];
      newTokens[tokenIndex] = { ...token, userFixed: true };
      setTokens(newTokens);
      setFoundErrors(prev => prev + 1);
      setLastFeedback({ id, type: 'good' });

      // Tutorial: First correct click
      if (levelData.isTutorial && !seenCorrectMsg) {
        setSeenCorrectMsg(true);
        setTutorialMessage("Los errores corregidos aparecerán en rojo. Mira el contador de errores para saber cuántos te faltan por descubrir.");
      }
      
    } else {
      // Incorrect click (The text was actually correct)
      setMistakes(prev => prev + 1);
      
      // Only deduct time if NOT tutorial (or if tutorial and we want to simulate it, but usually tutorial shouldn't fail on time)
      // We'll deduct time in tutorial too to show the effect, but the modal explains it.
      setTimeLeft(prev => Math.max(0, prev - 5)); 
      
      setLastFeedback({ id, type: 'bad' });
      
      // Trigger shake animation on the element
      setTimeout(() => setLastFeedback(null), 500);

      // Tutorial: First wrong click
      if (levelData.isTutorial && !seenWrongMsg) {
        setSeenWrongMsg(true);
        setTutorialMessage("Si te equivocas y pinchas algo correcto, perderás unos valiosos segundos.");
      }
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
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gold">
             <AlertOctagon size={18} />
             <span>{levelData.totalErrors - foundErrors} Restantes</span>
          </div>
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
             {/* Book Styling */}
             <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
             
             {/* Main Text Content */}
             <div className="relative text-xl md:text-2xl leading-relaxed text-justify text-ink font-serif mb-8">
               {/* Simple Drop Cap simulation */}
               <span className="float-left text-6xl leading-[0.8] font-display font-bold text-parchment-900 mr-2 mt-[-4px]">
                 {levelData.originalText.charAt(0)}
               </span>
               {levelData.originalText.slice(1)}
             </div>

             {/* Citation Footer */}
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

        {/* Right Column: The "Copy" (Interactive) */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-2 text-parchment-200 opacity-80 px-2">
            <Feather size={20} />
            <h3 className="font-display font-bold uppercase tracking-widest text-sm">Tu Manuscrito (Corrígelo)</h3>
          </div>
          <div className="bg-parchment-100 shadow-2xl relative flex-grow rounded-r-md p-6 md:p-10 overflow-hidden min-h-[40vh]">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
            
            {/* Interactive Text Area */}
            {/* Using inline-block caused gaps. Switched to pure inline with specific styling */}
            <div className="relative text-xl md:text-2xl leading-relaxed text-justify text-ink font-serif italic tracking-normal">
               {tokens.map((token, index) => {
                 const isSpace = token.text === ' ';
                 
                 // Syllables are now inline spans. They will flow naturally.
                 let baseClasses = "inline transition-colors duration-200 select-none rounded-sm";
                 
                 if (!isSpace) {
                    baseClasses += " cursor-pointer hover:bg-parchment-300 hover:text-black hover:shadow-sm";
                 }

                 if (token.userFixed) {
                   // Corrected State: Red Ink. No scale to avoid layout shift in inline text.
                   baseClasses += " text-blood";
                 } else if (lastFeedback?.id === token.id && lastFeedback.type === 'bad') {
                    // Error state
                    baseClasses += " animate-shake bg-red-200/50";
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
          </div>
        </div>

      </div>

      {/* Instructions Footer with Quit Button */}
      <div className="mt-6 mb-8 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-parchment-300 text-center md:text-left text-sm md:text-base opacity-70 flex-grow">
          <p>Compara tu manuscrito (derecha) con el original (izquierda).</p>
          <p>Pincha sobre las <span className="text-gold">sílabas</span> o signos erróneos para aplicar la corrección en <span className="text-red-400 font-bold">tinta roja</span>.</p>
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