import React, { useState } from 'react';
import { RotateCcw, Award, Save, Check, Home } from 'lucide-react';
import { PlayerStats } from '../types';
import { submitScore } from '../services/supabaseClient';

interface GameOverScreenProps {
  success: boolean;
  stats: PlayerStats;
  onNextLevel: () => void;
  onRetry: () => void;
  onMainMenu: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ success, stats, onNextLevel, onRetry, onMainMenu }) => {
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitScore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsSubmitting(true);
    const success = await submitScore(username, stats.score);
    if (success) {
      setIsSubmitted(true);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-parchment-900 font-serif">
      <div className="max-w-xl w-full bg-parchment-200 border-4 border-parchment-800 rounded shadow-2xl p-8 text-center animate-ink-blot">
        
        {success ? (
          <>
            <h2 className="text-5xl font-display font-bold text-green-800 mb-2">¡Laus Deo!</h2>
            <p className="text-xl mb-6">Has purgado el texto de la influencia de Titivillus.</p>
          </>
        ) : (
          <>
            <h2 className="text-5xl font-display font-bold text-blood mb-2">¡Maldición!</h2>
            <p className="text-xl mb-6">Titivillus ha ganado. El manuscrito está arruinado.</p>
          </>
        )}

        <div className="bg-parchment-100 p-6 rounded border border-parchment-300 mb-6 w-full shadow-inner">
          <div className="flex justify-between items-center mb-2 border-b border-parchment-300 pb-2">
            <span className="uppercase tracking-widest text-sm opacity-70">Nivel Alcanzado</span>
            <span className="font-bold text-xl">{stats.level}</span>
          </div>
          <div className="flex justify-between items-center mb-2 border-b border-parchment-300 pb-2">
            <span className="uppercase tracking-widest text-sm opacity-70">Errores Cazados</span>
            <span className="font-bold text-xl">{stats.errorsCaught}</span>
          </div>
           <div className="flex justify-between items-center border-b border-parchment-300 pb-2 mb-2">
            <span className="uppercase tracking-widest text-sm opacity-70">Penitencias</span>
            <span className="font-bold text-xl text-red-700">{stats.mistakesMade}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="uppercase tracking-widest text-sm font-bold text-gold-600">Puntuación Total</span>
            <span className="font-display font-bold text-3xl text-gold">{stats.score}</span>
          </div>
        </div>

        {/* Score Submission Form */}
        {!success && stats.score > 0 && !isSubmitted && (
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
        )}

        {isSubmitted && (
          <div className="mb-8 p-3 bg-green-100/50 text-green-900 border border-green-800/20 rounded flex items-center justify-center gap-2">
            <Check size={20} /> Tu nombre ha sido registrado en los anales.
          </div>
        )}

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4 justify-center w-full">
            {success ? (
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
                <RotateCcw /> Intentar de Nuevo
              </button>
            )}
          </div>

          <button
            onClick={onMainMenu}
            className="text-parchment-900/60 hover:text-parchment-900 font-serif text-sm flex items-center gap-2 transition-colors hover:underline"
          >
            <Home size={16} /> Volver al Menú Principal
          </button>
        </div>

      </div>
    </div>
  );
};

export default GameOverScreen;