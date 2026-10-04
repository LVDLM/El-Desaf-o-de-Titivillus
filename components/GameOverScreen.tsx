import React, { useState, useEffect } from 'react';
import { RotateCcw, Award, Save, Check, Home, Zap, ChevronDown, ChevronUp, BookMarked, AlertTriangle } from 'lucide-react';
import { PlayerStats, ScribeDiscrepancy } from '../types';
import { submitScore } from '../services/supabaseClient';

interface GameOverScreenProps {
  success: boolean;
  isGrandVictory?: boolean;
  stats: PlayerStats;
  onNextLevel: () => void;
  onRetry: () => void;
  onMainMenu: () => void;
  isUntimedMode?: boolean;
  gameMode?: 'corrector' | 'scribe';
  scribeDiscrepancies?: ScribeDiscrepancy[];
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ 
  success, 
  isGrandVictory = false, 
  stats, 
  onNextLevel, 
  onRetry, 
  onMainMenu,
  isUntimedMode = false,
  gameMode = 'corrector',
  scribeDiscrepancies = []
}) => {
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDiscrepancies, setShowDiscrepancies] = useState(false);

  useEffect(() => {
    if (!success) {
      // Play evil laugh sound on game over failure
      const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_6b3f80310f.mp3?filename=evil-laugh-89423.mp3");
      audio.volume = 0.5;
      audio.play().catch(e => console.warn("Audio play blocked", e));
    } else if (isGrandVictory) {
      // Divine sound for grand victory
      const audio = new Audio("https://cdn.pixabay.com/download/audio/2020/09/23/audio_7e52467d1d.mp3?filename=angelical-chorus-10651.mp3");
      audio.volume = 0.7;
      audio.play().catch(e => console.warn("Audio play blocked", e));
    } else {
      // Play turn page sound on normal success
      const audio = new Audio("https://cdn.pixabay.com/download/audio/2025/05/05/audio_ca4220361e.mp3?filename=turn-a-page-336933.mp3");
      audio.volume = 0.6;
      audio.play().catch(e => console.warn("Audio play blocked", e));
    }
  }, [success, isGrandVictory]);

  const handleSubmitScore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || isUntimedMode) return;

    setIsSubmitting(true);
    const result = await submitScore(username, stats.score);
    if (result) {
      setIsSubmitted(true);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-parchment-900 font-serif">
      <div className="max-w-xl w-full bg-parchment-200 border-4 border-parchment-800 rounded shadow-2xl p-8 text-center animate-ink-blot relative overflow-hidden">
        
        {isGrandVictory && (
           <div className="absolute top-0 left-0 w-full bg-gold/30 h-2"></div>
        )}

        {isGrandVictory ? (
          <>
            <div className="flex justify-center mb-4">
               <Zap className="w-16 h-16 text-purple-800 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-purple-900 mb-2">¡Victoria Absoluta!</h2>
            <p className="text-xl mb-6 font-bold">Has corregido todos los textos existentes.</p>
            <p className="text-md mb-6 bg-purple-100 p-3 rounded border border-purple-300 text-purple-900">
              Titivillus ha sido derrotado por completo. <br/>
              <strong>Recompensa:</strong> Tu próxima partida iniciará en <span className="font-bold uppercase">God Mode</span>.
            </p>
          </>
        ) : success ? (
          <>
            <h2 className="text-5xl font-display font-bold text-green-800 mb-2">¡Laus Deo!</h2>
            <p className="text-xl mb-6">
              {gameMode === 'scribe'
                ? 'Has copiado el pergamino con fidelidad y pulcritud absoluta.'
                : 'Has purgado el texto de la influencia de Titivillus.'}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-5xl font-display font-bold text-blood mb-2">¡Maldición!</h2>
            <p className="text-xl mb-6">
              {gameMode === 'scribe'
                ? 'El tiempo ha expirado antes de completar la copia del pergamino.'
                : 'Titivillus ha ganado. El manuscrito está arruinado.'}
            </p>
          </>
        )}

        <div className="bg-parchment-100 p-6 rounded border border-parchment-300 mb-6 w-full shadow-inner">
          <div className="flex justify-between items-center mb-2 border-b border-parchment-300 pb-2">
            <span className="uppercase tracking-widest text-sm opacity-70">
              {gameMode === 'scribe' ? 'Manuscritos Transcritos' : 'Nivel Alcanzado'}
            </span>
            <span className="font-bold text-xl">{stats.level}</span>
          </div>
          {gameMode !== 'scribe' ? (
            <>
              <div className="flex justify-between items-center mb-2 border-b border-parchment-300 pb-2">
                <span className="uppercase tracking-widest text-sm opacity-70">Errores Cazados</span>
                <span className="font-bold text-xl">{stats.errorsCaught}</span>
              </div>
              <div className="flex justify-between items-center border-b border-parchment-300 pb-2 mb-2">
                <span className="uppercase tracking-widest text-sm opacity-70">Penitencias (Falsas Alarmas)</span>
                <span className="font-bold text-xl text-red-700">{stats.mistakesMade}</span>
              </div>
            </>
          ) : (
            <div className="border-b border-parchment-300 pb-2 mb-2 text-left">
              <div className="flex justify-between items-center">
                <span className="uppercase tracking-widest text-sm opacity-70">
                  Calidad de la copia
                </span>

                {scribeDiscrepancies && scribeDiscrepancies.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => setShowDiscrepancies(!showDiscrepancies)}
                    className="flex items-center gap-1.5 font-bold text-xl text-blood hover:text-red-900 transition-colors cursor-pointer group"
                    title="Pincha para ver las palabras detectadas"
                  >
                    <span className="underline decoration-dotted group-hover:decoration-solid">
                      {scribeDiscrepancies.length} {scribeDiscrepancies.length === 1 ? 'error' : 'errores'}
                    </span>
                    {showDiscrepancies ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                ) : (
                  <span className="font-bold text-xl text-green-800">
                    0 errores (100% sin mácula)
                  </span>
                )}
              </div>

              {showDiscrepancies && scribeDiscrepancies && scribeDiscrepancies.length > 0 && (
                <div className="mt-3 bg-parchment-200/90 border border-parchment-400/80 rounded p-3 text-left animate-ink-blot">
                  <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-parchment-300">
                    <span className="text-xs font-bold uppercase tracking-wider text-parchment-900 flex items-center gap-1">
                      <BookMarked size={14} className="text-blood" /> Discrepancias Detectadas
                    </span>
                    <span className="text-[10px] font-sans font-semibold text-blood bg-red-100/90 px-2 py-0.5 rounded border border-red-300">
                      Añadidas al Cuaderno
                    </span>
                  </div>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                    {scribeDiscrepancies.map((d, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm bg-parchment-100/90 px-2.5 py-1.5 rounded border border-parchment-300 font-serif">
                        <span className="line-through text-blood font-semibold">
                          {d.incorrect || '(omisión)'}
                        </span>
                        <span className="text-parchment-600 text-xs px-2">→</span>
                        <span className="text-green-800 font-bold bg-green-100/70 px-2 py-0.5 rounded border border-green-300">
                          {d.correct}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="flex justify-between items-center mt-4">
            <span className="uppercase tracking-widest text-sm font-bold text-gold-600">Puntuación Total</span>
            <span className="font-display font-bold text-3xl text-gold">{stats.score}</span>
          </div>
        </div>

        {/* Score Submission Notice or Form */}
        {isUntimedMode ? (
          <div className="mb-8 p-3 bg-amber-100/70 border border-amber-300 text-amber-900 rounded text-sm italic">
            Modo Práctica sin tiempo: la puntuación no se registra en los anales.
          </div>
        ) : (!success || isGrandVictory) && stats.score > 0 && !isSubmitted ? (
          <form onSubmit={handleSubmitScore} className="mb-8 bg-parchment-300/50 p-4 rounded border border-parchment-800/30">
            <h3 className="font-display font-bold text-lg mb-3 uppercase tracking-widest">Inmortaliza tu Nombre</h3>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu nombre, copista..."
                maxLength={15}
                className="flex-grow bg-parchment-100 border border-parchment-800 rounded px-3 py-2 font-serif text-ink placeholder:text-parchment-900/40 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <button 
                type="submit" 
                disabled={isSubmitting || !username.trim()}
                className="bg-parchment-800 text-parchment-100 px-4 py-2 rounded font-bold hover:bg-parchment-900 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                {isSubmitting ? <span className="animate-spin">⏳</span> : <Save size={18} />}
                Firmar
              </button>
            </div>
          </form>
        ) : null}

        {isSubmitted && !isUntimedMode && (
          <div className="mb-8 p-3 bg-green-100/50 text-green-900 border border-green-800/20 rounded flex items-center justify-center gap-2">
            <Check size={20} /> Tu nombre ha sido registrado en los anales.
          </div>
        )}

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4 justify-center w-full">
            {isGrandVictory ? (
              <button
                onClick={onMainMenu}
                className="bg-purple-800 text-white px-6 py-3 rounded font-display font-bold text-lg hover:bg-purple-900 transition-colors flex items-center gap-2 shadow-lg transform hover:-translate-y-1"
              >
                 <Home size={20} /> Finalizar Viaje
              </button>
            ) : success ? (
              <button
                onClick={onNextLevel}
                className="bg-parchment-800 text-parchment-100 px-6 py-3 rounded font-display font-bold text-lg hover:bg-parchment-900 transition-colors flex items-center gap-2 shadow-lg transform hover:-translate-y-1"
              >
                <Award /> Siguiente Manuscrito
              </button>
            ) : (
              <button
                onClick={onRetry}
                className="bg-blood text-white px-6 py-3 rounded font-display font-bold text-lg hover:bg-red-900 transition-colors flex items-center gap-2 shadow-lg transform hover:-translate-y-1"
              >
                <RotateCcw /> Reintentar
              </button>
            )}

            <button
              onClick={onMainMenu}
              className="border border-parchment-800 text-parchment-900 px-4 py-3 rounded hover:bg-parchment-300 font-display transition-colors"
            >
              Menú Principal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GameOverScreen;
