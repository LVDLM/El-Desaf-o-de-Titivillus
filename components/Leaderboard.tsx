import React, { useEffect, useState } from 'react';
import { X, Crown, Scroll } from 'lucide-react';
import { LeaderboardEntry } from '../types';
import { getLeaderboard } from '../services/supabaseClient';

interface LeaderboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ isOpen, onClose }) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      getLeaderboard().then(data => {
        setEntries(data);
        setLoading(false);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-parchment-200 border-4 border-parchment-800 rounded shadow-2xl overflow-hidden animate-ink-blot">
        
        {/* Header */}
        <div className="bg-parchment-800 p-4 flex justify-between items-center border-b-4 border-gold">
          <div className="flex items-center gap-2 text-parchment-100">
            <Scroll className="text-gold" />
            <h2 className="font-display font-bold text-xl uppercase tracking-widest">Anales de Escribas</h2>
          </div>
          <button onClick={onClose} className="text-parchment-300 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {loading ? (
            <div className="text-center py-8 text-parchment-900 opacity-60 italic font-serif">
              Consultando los registros...
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-parchment-800/20 text-parchment-900 font-display text-sm uppercase">
                  <th className="py-2 pl-2">Rango</th>
                  <th className="py-2">Nombre</th>
                  <th className="py-2 pr-2 text-right">Puntos</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                {entries.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-4 text-center text-parchment-900/60 italic">
                      Aún no hay registros.
                    </td>
                  </tr>
                ) : (
                  entries.map((entry, index) => (
                    <tr key={index} className={`border-b border-parchment-800/10 ${index < 3 ? 'bg-gold/10' : ''}`}>
                      <td className="py-3 pl-2 font-bold text-parchment-900/70">
                        {index === 0 && <Crown size={16} className="inline mr-1 text-gold fill-gold" />}
                        #{index + 1}
                      </td>
                      <td className="py-3 font-bold text-parchment-900">
                        {entry.username}
                      </td>
                      <td className="py-3 pr-2 text-right font-display text-blood">
                        {entry.score}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="bg-parchment-300 p-3 text-center text-xs text-parchment-900/50 italic font-serif border-t border-parchment-800/20">
          Gloria in excelsis scriptor
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
