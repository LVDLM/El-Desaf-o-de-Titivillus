import React from 'react';
import { LevelData, TextToken } from '../types';
import { extractContext } from '../utils/levelHelpers';
import { CheckCircle, AlertCircle, ArrowRight, BookOpen } from 'lucide-react';

interface LevelReviewScreenProps {
  levelData: LevelData;
  tokens: TextToken[];
  success: boolean;
  onContinue: () => void;
}

const LevelReviewScreen: React.FC<LevelReviewScreenProps> = ({
  levelData,
  tokens,
  success,
  onContinue
}) => {
  // Filter all tokens that had an error
  const errorTokens = tokens.filter(t => t.isError);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-parchment-900 font-serif">
      <div className="max-w-3xl w-full bg-parchment-200 border-4 border-parchment-800 rounded-lg shadow-2xl p-6 md:p-8 relative overflow-hidden animate-ink-blot my-6">
        
        {/* Decorative corner borders */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-gold m-2 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-gold m-2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-gold m-2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-gold m-2 pointer-events-none"></div>

        {/* Header */}
        <div className="text-center mb-6 border-b-2 border-parchment-800/20 pb-4">
          <div className="flex justify-center mb-2">
            <BookOpen className="w-10 h-10 text-parchment-800" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-parchment-900">
            Cotejo del Manuscrito
          </h2>
          {levelData.bookTitle && (
            <p className="text-parchment-800/80 font-serif italic text-sm md:text-base mt-1">
              «{levelData.bookTitle}» {levelData.bookAuthor ? `— ${levelData.bookAuthor}` : ''}
            </p>
          )}
        </div>

        {/* Error Comparison List */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 mb-6 custom-scrollbar">
          {errorTokens.map((token) => {
            const context = extractContext(levelData.originalText, token.correction, 5);

            return (
              <div 
                key={token.id} 
                className="bg-parchment-100/90 border border-parchment-300 rounded p-4 shadow-sm hover:border-parchment-400 transition-colors"
              >
                {/* Visual Status Indicator & Pair */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5 pb-2 border-b border-parchment-200">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="line-through text-blood font-semibold text-lg bg-red-100/60 px-2 py-0.5 rounded border border-red-300">
                      {token.text === ' ' ? '· espacio ·' : (token.text || '· omisión ·')}
                    </span>
                    <ArrowRight size={18} className="text-parchment-600 shrink-0" />
                    <span className="text-emerald-800 font-bold text-lg bg-emerald-100/80 px-2.5 py-0.5 rounded border border-emerald-300">
                      {token.correction === ' ' ? '· espacio ·' : token.correction}
                    </span>
                  </div>

                  <div>
                    {token.userFixed ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-full border border-emerald-300">
                        <CheckCircle size={14} className="text-emerald-700" />
                        Detectado
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded-full border border-amber-300">
                        <AlertCircle size={14} className="text-amber-700" />
                        Inadvertido
                      </span>
                    )}
                  </div>
                </div>

                {/* Sentence context showing correct form highlighted in green */}
                <div className="text-sm md:text-base text-ink/80 italic font-serif leading-relaxed bg-parchment-200/40 p-2.5 rounded">
                  <span>{context.before} </span>
                  <span className="text-emerald-800 font-bold bg-emerald-200/70 px-1.5 py-0.5 rounded border border-emerald-400/50 not-italic shadow-xs">
                    {context.match}
                  </span>
                  <span> {context.after}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single Continue Button */}
        <div className="text-center pt-2 border-t-2 border-parchment-800/20">
          <button
            onClick={onContinue}
            className="w-full sm:w-auto px-8 py-3.5 bg-parchment-800 text-parchment-100 font-display font-bold text-lg rounded shadow-lg hover:bg-parchment-900 hover:text-white transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Continuar
          </button>
        </div>

      </div>
    </div>
  );
};

export default LevelReviewScreen;
