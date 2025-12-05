import React, { useState, useCallback, useEffect } from 'react';
import { GameState, LevelData, PlayerStats } from './types';
import { getStaticLevel } from './services/staticLevelService';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import Leaderboard from './components/Leaderboard';
import { Loader2, Scroll } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [currentLevelData, setCurrentLevelData] = useState<LevelData | null>(null);
  const [stats, setStats] = useState<PlayerStats>({
    score: 0,
    level: 0, // Start at 0 for tutorial logic consistency
    errorsCaught: 0,
    mistakesMade: 0
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // New features for Scribe Mode
  const [rewardUnlocked, setRewardUnlocked] = useState(false);
  const [showRewardNotification, setShowRewardNotification] = useState(false);
  const [gameMode, setGameMode] = useState<'corrector' | 'scribe'>('corrector');

  // God Mode State
  const [isGodMode, setIsGodMode] = useState(false);

  // Load unlock status on mount
  useEffect(() => {
    const unlocked = localStorage.getItem('titivillus_scribe_mode_unlocked') === 'true';
    setRewardUnlocked(unlocked);
  }, []);

  const loadLevel = useCallback(async (levelNum: number) => {
    setGameState(GameState.LOADING);
    setErrorMsg(null);
    try {
      const data = await getStaticLevel(levelNum);
      setCurrentLevelData(data);
      setGameState(GameState.PLAYING);
    } catch (err: any) {
      console.error("Failed to generate level", err);
      setErrorMsg("Error al cargar el manuscrito.");
      setGameState(GameState.ERROR);
    }
  }, []);

  const handleStartGame = (startLevel: number = 0) => {
    setStats({
      score: 0,
      level: startLevel,
      errorsCaught: 0,
      mistakesMade: 0
    });
    loadLevel(startLevel);
  };

  const handleEnableGodMode = () => {
    setIsGodMode(true);
    setRewardUnlocked(true); // God mode automatically unlocks rewards
    // Play a divine sound
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2025/05/05/audio_ca4220361e.mp3?filename=turn-a-page-336933.mp3");
    audio.volume = 1.0;
    audio.play().catch(() => {});
  };

  const checkUnlockCondition = (currentLevel: number) => {
    // Condition: Beat Level 5 (so moving to 6) OR Lose after Level 5 (level >= 5)
    if (!rewardUnlocked && currentLevel >= 5) {
      setRewardUnlocked(true);
      setShowRewardNotification(true);
      localStorage.setItem('titivillus_scribe_mode_unlocked', 'true');
    }
  };

  const handleLevelComplete = (levelScore: number) => {
    if (!currentLevelData) return;
    
    setStats(prev => ({
      ...prev,
      score: prev.score + levelScore,
      errorsCaught: prev.errorsCaught + currentLevelData.totalErrors, 
    }));

    // Check unlock on success
    if (stats.level >= 5) {
       checkUnlockCondition(stats.level);
    }
    
    setGameState(GameState.LEVEL_COMPLETE);
  };

  const handleGameOver = () => {
    // Check unlock on failure if level was high enough
    if (stats.level >= 5) {
       checkUnlockCondition(stats.level);
    }
    setGameState(GameState.GAME_OVER);
  };

  const handleNextLevel = () => {
    // Increment level
    const nextLevel = stats.level + 1;
    setStats(prev => ({ ...prev, level: nextLevel }));
    loadLevel(nextLevel);
  };

  const handleRetry = () => {
    loadLevel(stats.level);
  };

  const handleMainMenu = () => {
    setGameState(GameState.MENU);
  };

  const handleCloseRewardNotification = () => {
    setShowRewardNotification(false);
  };

  // Render logic
  return (
    <div className="min-h-screen bg-[#2b2b2b] selection:bg-gold selection:text-black">
      
      {/* Global Leaderboard Modal */}
      <Leaderboard isOpen={showLeaderboard} onClose={() => setShowLeaderboard(false)} />

      {/* Reward Notification Modal */}
      {showRewardNotification && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-parchment-200 border-4 border-gold rounded shadow-2xl p-8 max-w-lg w-full text-center relative animate-ink-blot">
             <div className="flex justify-center mb-4">
               <Scroll className="text-blood w-16 h-16" />
             </div>
             <h2 className="text-3xl font-display font-bold text-parchment-900 mb-4">¡Nuevo Rango Alcanzado!</h2>
             <p className="font-serif text-lg text-parchment-900 mb-6 leading-relaxed">
               Por tu destreza y perseverancia enfrentando a Titivillus en los niveles más arduos, has sido ascendido.
               <br/><br/>
               Se ha desbloqueado el <strong>Modo Escriba</strong>.
               <br/>
               Ahora podrás demostrar tu valía reescribiendo los textos sagrados desde cero.
             </p>
             <button 
               onClick={handleCloseRewardNotification}
               className="bg-parchment-800 text-parchment-100 px-6 py-3 rounded font-bold hover:bg-gold hover:text-parchment-900 transition-colors"
             >
               Acepto el Honor
             </button>
          </div>
        </div>
      )}

      {gameState === GameState.MENU && (
        <StartScreen 
          onStart={() => handleStartGame(0)} 
          onOpenLeaderboard={() => setShowLeaderboard(true)}
          rewardUnlocked={rewardUnlocked}
          gameMode={gameMode}
          onToggleGameMode={(mode) => setGameMode(mode)}
          onEnableGodMode={handleEnableGodMode}
          isGodMode={isGodMode}
          onSelectLevel={handleStartGame}
        />
      )}

      {gameState === GameState.LOADING && (
        <div className="flex flex-col items-center justify-center min-h-screen text-parchment-200">
           <Loader2 className="w-16 h-16 animate-spin text-gold mb-4" />
           <p className="font-serif text-xl italic animate-pulse">Los escribas están preparando la tinta...</p>
        </div>
      )}

      {gameState === GameState.ERROR && (
        <div className="flex flex-col items-center justify-center min-h-screen text-parchment-200">
          <div className="bg-red-900/50 p-8 rounded border border-red-500 text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">Error Funesto</h2>
            <p>{errorMsg}</p>
            <button 
              onClick={() => setGameState(GameState.MENU)}
              className="mt-6 px-4 py-2 bg-parchment-200 text-black rounded font-bold hover:bg-white"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      )}

      {gameState === GameState.PLAYING && currentLevelData && (
        <GameScreen 
          levelData={currentLevelData} 
          onComplete={handleLevelComplete}
          onGameOver={handleGameOver}
          onMainMenu={handleMainMenu}
          gameMode={gameMode}
          isGodMode={isGodMode}
        />
      )}

      {(gameState === GameState.LEVEL_COMPLETE) && (
        <GameOverScreen 
          success={true}
          stats={stats}
          onNextLevel={handleNextLevel}
          onRetry={handleStartGame} 
          onMainMenu={handleMainMenu}
        />
      )}

       {(gameState === GameState.GAME_OVER) && (
        <GameOverScreen 
          success={false}
          stats={stats}
          onNextLevel={handleNextLevel} 
          onRetry={handleRetry}
          onMainMenu={handleMainMenu}
        />
      )}
    </div>
  );
};

export default App;