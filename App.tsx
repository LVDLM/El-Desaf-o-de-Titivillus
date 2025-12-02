import React, { useState, useCallback } from 'react';
import { GameState, LevelData, PlayerStats } from './types';
import { getStaticLevel } from './services/staticLevelService';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import Leaderboard from './components/Leaderboard';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [currentLevelData, setCurrentLevelData] = useState<LevelData | null>(null);
  const [stats, setStats] = useState<PlayerStats>({
    score: 0,
    level: 1,
    errorsCaught: 0,
    mistakesMade: 0
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

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

  const handleStartGame = () => {
    // Reset stats for new game
    setStats({
      score: 0,
      level: 1,
      errorsCaught: 0,
      mistakesMade: 0
    });
    loadLevel(1);
  };

  const handleLevelComplete = (levelScore: number) => {
    if (!currentLevelData) return;
    
    setStats(prev => ({
      ...prev,
      score: prev.score + levelScore,
      errorsCaught: prev.errorsCaught + currentLevelData.totalErrors, 
    }));
    
    setGameState(GameState.LEVEL_COMPLETE);
  };

  const handleGameOver = () => {
    setGameState(GameState.GAME_OVER);
  };

  const handleNextLevel = () => {
    setStats(prev => ({ ...prev, level: prev.level + 1 }));
    loadLevel(stats.level + 1);
  };

  const handleRetry = () => {
    loadLevel(stats.level);
  };

  const handleMainMenu = () => {
    setGameState(GameState.MENU);
  };

  // Render logic
  return (
    <div className="min-h-screen bg-[#2b2b2b] selection:bg-gold selection:text-black">
      
      {/* Global Leaderboard Modal */}
      <Leaderboard isOpen={showLeaderboard} onClose={() => setShowLeaderboard(false)} />

      {gameState === GameState.MENU && (
        <StartScreen 
          onStart={handleStartGame} 
          onOpenLeaderboard={() => setShowLeaderboard(true)}
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