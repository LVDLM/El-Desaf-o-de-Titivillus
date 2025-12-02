import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { LeaderboardEntry } from '../types';

let supabase: SupabaseClient | null = null;

// Initialize Supabase if keys are present
// Note: In a real Vite app these would be import.meta.env.VITE_SUPABASE_URL, etc.
// Adjusting to match the process.env pattern used in previous files or standard env access.
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("Supabase keys missing. Leaderboard will be in mock mode.");
}

export const getLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  if (!supabase) {
    // Mock data for development/preview
    return [
      { username: "Fra Iñigo", score: 1250, created_at: new Date().toISOString() },
      { username: "Sor Juana", score: 980, created_at: new Date().toISOString() },
      { username: "Abad Faria", score: 850, created_at: new Date().toISOString() },
      { username: "Novicio Tom", score: 400, created_at: new Date().toISOString() },
    ];
  }

  const { data, error } = await supabase
    .from('leaderboard')
    .select('*')
    .order('score', { ascending: false })
    .limit(10);

  if (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }

  return data as LeaderboardEntry[];
};

export const submitScore = async (username: string, score: number): Promise<boolean> => {
  if (!supabase) {
    console.log(`[Mock] Submitting score for ${username}: ${score}`);
    return true;
  }

  const { error } = await supabase
    .from('leaderboard')
    .insert([{ username, score }]);

  if (error) {
    console.error('Error submitting score:', error);
    return false;
  }

  return true;
};
