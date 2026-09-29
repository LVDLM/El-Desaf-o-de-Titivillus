import React, { useEffect, useState } from 'react';
import { Scroll, Feather, Trophy, PenTool, Edit3, Zap, HelpCircle, Clock, BookMarked } from 'lucide-react';
import { isSupabaseConfigured } from '../services/supabaseClient';
import TitivillusNotebookModal from './TitivillusNotebookModal';

interface StartScreenProps {
  onStart: () => void;
  onTutorial: () => void;
  onOpenLeaderboard: () => void;
  rewardUnlocked: boolean;
  gameMode: 'corrector' | 'scribe';
  onToggleGameMode: (mode: 'corrector' | 'scribe') => void;
  onEnableGodMode: () => void;
  isGodMode: boolean;
  onSelectLevel: (level: number) => void;
  isUntimedMode: boolean;
  onToggleUntimedMode: (untimed: boolean) => void;
}

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

const StartScreen: React.FC<StartScreenProps> = ({ 
  onStart, 
  onTutorial,
  onOpenLeaderboard, 
  rewardUnlocked, 
  gameMode, 
  onToggleGameMode,
  onEnableGodMode,
  isGodMode,
  onSelectLevel,
  isUntimedMode,
  onToggleUntimedMode
}) => {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showNotebook, setShowNotebook] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGodMode) return;

      if (e.key === KONAMI_CODE[konamiIndex]) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === KONAMI_CODE.length) {
          onEnableGodMode();
          setKonamiIndex(0);
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex, isGodMode, onEnableGodMode]);
  
  const handleStartClick = () => {
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_744997de40.mp3?filename=fast-and-slow-marker-strokes-82047.mp3");
    audio.volume = 0.6;
    audio.play().catch(e => console.warn("Audio play blocked", e));
    
    onStart();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-parchment-900 relative">
      
      {/* Titivillus Notebook Modal */}
      <TitivillusNotebookModal 
        isOpen={showNotebook} 
        onClose={() => setShowNotebook(false)} 
      />

      <div className="max-w-2xl w-full bg-parchment-200 border-8 border-parchment-800 rounded-lg shadow-2xl p-8 relative overflow-hidden transition-all duration-500">
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold m-2"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold m-2"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold m-2"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold m-2"></div>

        {isGodMode && (
          <div className="absolute top-2 right-2 bg-purple-900 text-white text-xs px-2 py-1 rounded font-mono animate-pulse shadow-lg z-20 flex items-center gap-1">
            <Zap size={12} /> GOD MODE
          </div>
        )}

        <div className="text-center relative z-10">
          <div className="flex justify-center mb-6">
            {gameMode === 'scribe' ? (
              <PenTool size={64} className="text-parchment-800 animate-pulse" />
            ) : (
              <img 
                src="https://i.ibb.co/1GfX995m/Titivillus.png" 
                alt="Titivillus" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain animate-bounce drop-shadow-md select-none pointer-events-none" 
              />
            )}
          </div>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold text-parchment-900 mb-2 tracking-tighter">
            El Desafío de
          </h1>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-blood mb-6 tracking-widest uppercase">
            Titivillus
          </h2>

          <div className="prose prose-lg text-parchment-900 mx-auto font-serif mb-6 leading-relaxed">
            {gameMode === 'scribe' ? (
              <p className="bg-parchment-300/50 p-4 rounded border border-parchment-800/20">
                <strong className="text-parchment-900 block mb-2 font-display text-xl">Modo Escriba</strong>
                Demuestra tu memoria y precisión. Reescribe los textos sagrados sin cometer ni un solo error de copia. Titivillus estará vigilando cada tecla.
              </p>
            ) : (
              <>
                <p className="mb-3">
                  <span className="text-6xl float-left font-display font-bold mr-2 text-blood">E</span>n la quietud del scriptorium, el demonio Titivillus acecha. Su misión es corromper los textos sagrados introduciendo erratas y deslices.
                </p>
                <p>
                  Como copista mayor, tu deber es cotejar la copia con el original. <strong>Pincha sobre las palabras, signos o huecos incorrectos</strong> para purgarlos.
                </p>
              </>
            )}
          </div>

          {/* Mode Toggle (Corrector vs Escriba) */}
          {rewardUnlocked && (
            <div className="flex justify-center mb-6">
              <div className="bg-parchment-800 p-1 rounded-full flex gap-1 shadow-inner">
                <button
                  onClick={() => onToggleGameMode('corrector')}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${gameMode === 'corrector' ? 'bg-parchment-100 text-parchment-900 shadow-md' : 'text-parchment-300 hover:text-white'}`}
                >
                  <Feather size={16} className="inline mr-1" /> Corrector
                </button>
                <button
                  onClick={() => onToggleGameMode('scribe')}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${gameMode === 'scribe' ? 'bg-gold text-parchment-900 shadow-md' : 'text-parchment-300 hover:text-white'}`}
                >
                  <Edit3 size={16} className="inline mr-1" /> Escriba
                </button>
              </div>
            </div>
          )}

          {/* Practice / Untimed Mode Option */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => onToggleUntimedMode(!isUntimedMode)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-display font-bold transition-all shadow-xs ${
                isUntimedMode
                  ? 'bg-amber-100 text-amber-900 border-amber-400 ring-2 ring-amber-300/50'
                  : 'bg-parchment-300/60 text-parchment-800/80 border-parchment-800/20 hover:bg-parchment-300'
              }`}
            >
              <Clock size={15} className={isUntimedMode ? 'text-amber-700' : 'text-parchment-700'} />
              <span>{isUntimedMode ? 'Modo sin tiempo (Práctica activada)' : 'Modo con cronómetro (Estándar)'}</span>
            </button>
          </div>

          <div className="flex flex-col gap-4 items-center">
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <button
                onClick={handleStartClick}
                className={`group relative inline-flex items-center justify-center px-8 py-4 font-display font-bold text-white transition-all duration-200 font-lg rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-parchment-900 shadow-lg hover:-translate-y-1 ${gameMode === 'scribe' ? 'bg-parchment-900 hover:bg-black' : 'bg-parchment-800 hover:bg-parchment-900'}`}
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-2 text-xl">
                  {gameMode === 'scribe' ? <PenTool className="w-6 h-6" /> : <Scroll className="w-6 h-6" />} 
                  {gameMode === 'scribe' ? 'Comenzar Transcripción' : 'Tomar la Pluma'}
                </span>
              </button>

              <button
                onClick={onOpenLeaderboard}
                className="group relative inline-flex items-center justify-center px-6 py-4 font-display font-bold text-parchment-900 transition-all duration-200 bg-gold/20 border-2 border-parchment-800 font-lg rounded-sm hover:bg-gold/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-parchment-900"
              >
                <span className="relative flex items-center gap-2 text-lg">
                  <Trophy className="w-5 h-5 text-blood" /> Ver Anales
                </span>
              </button>
            </div>

            <div className="flex items-center gap-6 mt-2">
              <button
                onClick={() => setShowNotebook(true)}
                className="inline-flex items-center gap-1.5 text-sm font-serif font-bold text-parchment-800 hover:text-parchment-950 hover:underline"
              >
                <BookMarked size={16} className="text-blood" /> Cuaderno de Titivillus
              </button>

              <button
                onClick={onTutorial}
                className="inline-flex items-center gap-1.5 text-sm font-serif font-bold text-parchment-800/80 hover:text-parchment-950 hover:underline"
              >
                <HelpCircle size={16} /> ¿Cómo jugar?
              </button>
            </div>

          </div>

          {/* GOD MODE LEVEL SELECTOR */}
          {isGodMode && (
            <div className="mt-8 pt-6 border-t-2 border-parchment-800/30">
               <h3 className="font-mono text-purple-900 font-bold mb-3 flex items-center justify-center gap-2 text-sm">
                 <Zap size={14} /> HERRAMIENTAS DIVINAS
               </h3>
               <div className="flex flex-wrap justify-center gap-2">
                 <button onClick={() => onSelectLevel(0)} className="px-3 py-1 bg-purple-100 border border-purple-300 rounded text-xs hover:bg-purple-200">Tutorial</button>
                 <button onClick={() => onSelectLevel(1)} className="px-3 py-1 bg-purple-100 border border-purple-300 rounded text-xs hover:bg-purple-200">Nivel 1</button>
                 <button onClick={() => onSelectLevel(2)} className="px-3 py-1 bg-purple-100 border border-purple-300 rounded text-xs hover:bg-purple-200">Nivel 2</button>
                 <button onClick={() => onSelectLevel(3)} className="px-3 py-1 bg-purple-100 border border-purple-300 rounded text-xs hover:bg-purple-200">Nivel 3</button>
                 <button onClick={() => onSelectLevel(4)} className="px-3 py-1 bg-purple-100 border border-purple-300 rounded text-xs hover:bg-purple-200">Nivel 4</button>
                 <button onClick={() => onSelectLevel(5)} className="px-3 py-1 bg-purple-100 border border-purple-300 rounded text-xs hover:bg-purple-200">Nivel 5</button>
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Connection Status Indicator */}
      <div className="absolute bottom-2 right-2 flex items-center gap-2 text-xs font-sans opacity-50 bg-black/20 p-1 rounded backdrop-blur-sm">
        <div className={`w-2 h-2 rounded-full ${isSupabaseConfigured ? 'bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]' : 'bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]'}`}></div>
        <span className="text-parchment-200">
          {isSupabaseConfigured ? 'Conexión con los Archivos: Establecida' : 'Conexión con los Archivos: Modo de Pruebas'}
        </span>
      </div>
    </div>
  );
};

export default StartScreen;
