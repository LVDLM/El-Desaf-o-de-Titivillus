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
    level: 0, 
    errorsCaught: 0,
    mistakesMade: 0
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // New features for Scribe Mode
  const [rewardUnlocked, setRewardUnlocked] = useState(false);
  const [showRewardNotification, setShowRewardNotification] = useState(false);
  const [gameMode, setGameMode] = useState<'corrector' | 'scribe'>('corrector');

  // Tutorial Persistence
  const [hasPlayedTutorial, setHasPlayedTutorial] = useState(false);

  // God Mode State
  const [isGodMode, setIsGodMode] = useState(false);

  // History tracking to avoid repeats
  const [playedTexts, setPlayedTexts] = useState<string[]>([]);

  // Load unlock status, tutorial status, and God Mode reward on mount
  useEffect(() => {
    const unlocked = localStorage.getItem('titivillus_scribe_mode_unlocked') === 'true';
    setRewardUnlocked(unlocked);

    const tutorialSeen = localStorage.getItem('titivillus_tutorial_completed') === 'true';
    setHasPlayedTutorial(tutorialSeen);

    // Check for God Mode Reward from previous victory
    const godModeReward = localStorage.getItem('titivillus_god_mode_reward') === 'true';
    if (godModeReward) {
      setIsGodMode(true);
      // Consume the reward so it's a one-time bonus for the next game only
      localStorage.removeItem('titivillus_god_mode_reward');
    }
  }, []);

  const loadLevel = useCallback(async (levelNum: number, currentHistory: string[]) => {
    setGameState(GameState.LOADING);
    setErrorMsg(null);
    try {
      const data = await getStaticLevel(levelNum, currentHistory);
      
      if (data) {
        setCurrentLevelData(data);
        setGameState(GameState.PLAYING);
      } else {
        // No more levels available! Victory!
        setGameState(GameState.VICTORY);
        // Grant God Mode reward for the NEXT game
        localStorage.setItem('titivillus_god_mode_reward', 'true');
      }
    } catch (err: any) {
      console.error("Failed to generate level", err);
      setErrorMsg("Error al cargar el manuscrito.");
      setGameState(GameState.ERROR);
    }
  }, []);

  const handleStartGame = (specificLevel?: number) => {
    // Reset history for a new game session
    // NOTE: If you want to prevent repeats across sessions, you'd load this from LS.
    // For now, we clear it per session as requested ("misma partida").
    const newHistory: string[] = [];
    setPlayedTexts(newHistory);

    // Determine start level:
    let startLevel = 1;
    if (specificLevel !== undefined) {
      startLevel = specificLevel;
    } else if (!hasPlayedTutorial) {
      startLevel = 0;
    }

    setStats({
      score: 0,
      level: startLevel,
      errorsCaught: 0,
      mistakesMade: 0
    });
    
    loadLevel(startLevel, newHistory);
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
    
    // Mark tutorial as completed if we just finished level 0
    if (currentLevelData.isTutorial) {
      setHasPlayedTutorial(true);
      localStorage.setItem('titivillus_tutorial_completed', 'true');
    }

    // Add current text to history to prevent repeats
    const updatedHistory = [...playedTexts, currentLevelData.originalText];
    setPlayedTexts(updatedHistory);

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
    loadLevel(nextLevel, playedTexts);
  };

  const handleRetry = () => {
    // Retry allows playing the same difficulty again.
    // We do NOT clear the history here, so they won't get the exact same text again immediately
    // unless the pool is small.
    loadLevel(stats.level, playedTexts);
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
          onStart={() => handleStartGame()} // Default start (smart selection)
          onTutorial={() => handleStartGame(0)} // Force tutorial
          onOpenLeaderboard={() => setShowLeaderboard(true)}
          rewardUnlocked={rewardUnlocked}
          gameMode={gameMode}
          onToggleGameMode={(mode) => setGameMode(mode)}
          onEnableGodMode={handleEnableGodMode}
          isGodMode={isGodMode}
          onSelectLevel={(level) => handleStartGame(level)}
        />
      )}

      {gameState === GameState.LOADING && (
        <div className="flex h-screen items-center justify-center text-parchment-200">
           <Loader2 className="animate-spin w-12 h-12" />
           <span className="ml-4 font-serif text-xl">Preparando manuscrito...</span>
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
      
      {(gameState === GameState.LEVEL_COMPLETE || gameState === GameState.GAME_OVER || gameState === GameState.VICTORY) && (
        <GameOverScreen 
           success={gameState === GameState.LEVEL_COMPLETE || gameState === GameState.VICTORY}
           isGrandVictory={gameState === GameState.VICTORY}
           stats={stats}
           onNextLevel={handleNextLevel}
           onRetry={handleRetry}
           onMainMenu={handleMainMenu}
        />
      )}

      {gameState === GameState.ERROR && (
        <div className="flex flex-col h-screen items-center justify-center text-red-400 p-8 text-center">
           <h2 className="text-3xl font-display font-bold mb-4">Error en el Scriptorium</h2>
           <p className="font-serif mb-6">{errorMsg || "Ha ocurrido un error desconocido."}</p>
           <button onClick={handleMainMenu} className="bg-parchment-800 text-parchment-100 px-6 py-2 rounded">Volver</button>
        </div>
      )}

    </div>
  );
};

export default App;