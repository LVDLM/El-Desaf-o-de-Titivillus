import React, { useEffect, useState } from 'react';
import { LevelData, TextToken } from '../types';
import { Hourglass, AlertOctagon, BookOpen, Feather } from 'lucide-react';

interface GameScreenProps {
  levelData: LevelData;
  onComplete: (score: number) => void;
  onGameOver: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ levelData, onComplete, onGameOver }) => {
  const [tokens, setTokens] = useState<TextToken[]>(levelData.tokens);
  const [timeLeft, setTimeLeft] = useState(levelData.timeLimit);
  const [foundErrors, setFoundErrors] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<{ id: string, type: 'good' | 'bad' } | null>(null);

  // Timer Logic
  useEffect(() => {
    if (timeLeft <= 0) {
      onGameOver();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onGameOver]);

  // Check win condition
  useEffect(() => {
    if (foundErrors === levelData.totalErrors) {
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
  }, [foundErrors, levelData.totalErrors, timeLeft, mistakes, onComplete]);

  const handleTokenClick = (id: string) => {
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
      
    } else {
      // Incorrect click (The text was actually correct)
      setMistakes(prev => prev + 1);
      setTimeLeft(prev => Math.max(0, prev - 5)); // 5 second penalty
      setLastFeedback({ id, type: 'bad' });
      
      // Trigger shake animation on the element
      setTimeout(() => setLastFeedback(null), 500);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-2 md:p-4 pt-4 md:pt-8 text-parchment-900 font-serif">
      
      {/* Header / HUD */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4 md:mb-6 px-4 py-3 bg-parchment-800 text-parchment-100 rounded shadow-lg border-2 border-gold sticky top-2 z-50">
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

      {/* Instructions Footer */}
      <div className="mt-6 mb-8 text-parchment-300 text-center max-w-lg opacity-70 text-sm md:text-base">
        <p>Compara tu manuscrito (derecha) con el original (izquierda).</p>
        <p>Pincha sobre las <span className="text-gold">sílabas</span> o signos erróneos para aplicar la corrección en <span className="text-red-400 font-bold">tinta roja</span>.</p>
      </div>
    </div>
  );
};

export default GameScreen;