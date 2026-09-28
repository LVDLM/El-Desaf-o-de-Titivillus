import React, { useState, useEffect } from 'react';
import { TitivillusNotebookEntry } from '../types';
import { getNotebook, clearNotebook } from '../services/notebookService';
import { BookMarked, X, Trash2, ArrowRight } from 'lucide-react';

interface TitivillusNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TitivillusNotebookModal: React.FC<TitivillusNotebookModalProps> = ({ isOpen, onClose }) => {
  const [entries, setEntries] = useState<TitivillusNotebookEntry[]>([]);

  useEffect(() => {
    if (isOpen) {
      setEntries(getNotebook());
    }
  }, [isOpen]);

  const handleClear = () => {
    clearNotebook();
    setEntries([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in font-serif">
      <div className="bg-parchment-200 border-4 border-parchment-800 rounded-lg shadow-2xl p-6 md:p-8 max-w-xl w-full text-parchment-900 relative animate-ink-blot max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-parchment-800/20">
          <div className="flex items-center gap-3">
            <BookMarked className="w-8 h-8 text-blood" />
            <div>
              <h2 className="text-2xl font-display font-bold text-parchment-900">
                Cuaderno de Titivillus
              </h2>
              <p className="text-xs text-parchment-800/70">
                Formas no advertidas en tus cotejos
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-parchment-800/60 hover:text-parchment-900 p-1 rounded transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="my-4 overflow-y-auto flex-grow custom-scrollbar pr-2 space-y-3">
          {entries.length === 0 ? (
            <div className="text-center py-12 text-parchment-700 italic">
              <p className="text-lg">Tu cuaderno está inmaculado.</p>
              <p className="text-sm mt-1 opacity-70">
                Las palabras que pases por alto durante los cotejos quedarán anotadas aquí.
              </p>
            </div>
          ) : (
            entries.map((entry, idx) => (
              <div 
                key={idx}
                className="bg-parchment-100/90 border border-parchment-300 rounded p-3 flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="line-through text-blood text-base bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    {entry.incorrect}
                  </span>
                  <ArrowRight size={16} className="text-parchment-600" />
                  <span className="text-emerald-800 font-bold text-base bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                    {entry.correct}
                  </span>
                </div>
                <span className="text-xs font-display uppercase tracking-wider bg-parchment-300/80 px-2.5 py-1 rounded text-parchment-900 font-bold">
                  {entry.failCount} {entry.failCount === 1 ? 'omisión' : 'omisiones'}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t-2 border-parchment-800/20 flex items-center justify-between">
          {entries.length > 0 ? (
            <button
              onClick={handleClear}
              className="text-xs text-blood hover:text-red-900 font-display flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Trash2 size={14} /> Purgar Cuaderno
            </button>
          ) : <div></div>}

          <button
            onClick={onClose}
            className="bg-parchment-800 text-parchment-100 px-6 py-2 rounded font-display font-bold hover:bg-parchment-900 transition-colors shadow-sm"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};

export default TitivillusNotebookModal;
