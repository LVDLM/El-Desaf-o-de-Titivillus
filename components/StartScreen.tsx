import React from 'react';
import { Scroll, Feather, Trophy } from 'lucide-react';
import { isSupabaseConfigured } from '../services/supabaseClient';

interface StartScreenProps {
  onStart: () => void;
  onOpenLeaderboard: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, onOpenLeaderboard }) => {
  
  const handleStartClick = () => {
    // Play writing sound
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_744997de40.mp3?filename=fast-and-slow-marker-strokes-82047.mp3");
    audio.volume = 0.6;
    audio.play().catch(e => console.warn("Audio play blocked", e));
    
    onStart();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-parchment-900 relative">
      <div className="max-w-2xl w-full bg-parchment-200 border-8 border-parchment-800 rounded-lg shadow-2xl p-8 relative overflow-hidden">
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold m-2"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold m-2"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold m-2"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold m-2"></div>

        <div className="text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Feather size={64} className="text-blood animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold text-parchment-900 mb-2 tracking-tighter">
            El Desafío de
          </h1>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-blood mb-8 tracking-widest uppercase">
            Titivillus
          </h2>

          <div className="prose prose-lg text-parchment-900 mx-auto font-serif mb-8 leading-relaxed">
            <p className="mb-4">
              <span className="text-6xl float-left font-display font-bold mr-2 text-blood">E</span>n la quietud del scriptorium, el demonio Titivillus acecha. Su misión es corromper los textos sagrados introduciendo errores en el trabajo de los monjes.
            </p>
            <p className="flex justify-center my-4 opacity-80 mix-blend-multiply">
               {/* Using a more generic medieval initial or decoration if image fails, but keeping img for now */}
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/5/54/Titivillus.jpg" 
                 alt="Titivillus"
                 className="rounded shadow-md max-h-48 grayscale sepia hover:grayscale-0 transition-all duration-500"
               />
            </p>
            <p>
              Como copista mayor, tu deber es comparar la copia corrupta con el original. <strong>Pincha sobre las sílabas o signos incorrectos</strong> para purgarlos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleStartClick}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-display font-bold text-white transition-all duration-200 bg-parchment-800 font-lg rounded-sm hover:bg-parchment-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-parchment-900 shadow-lg hover:-translate-y-1"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center gap-2 text-xl">
                <Scroll className="w-6 h-6" /> Tomar la Pluma
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
          
          <p className="mt-6 text-sm italic opacity-60 font-serif">
            "Verba volant, scripta manent... si recte scripta sunt."
          </p>
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