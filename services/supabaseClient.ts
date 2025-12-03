import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { LeaderboardEntry } from '../types';

let supabase: SupabaseClient | null = null;

// Initialize Supabase if keys are present
// CRITICAL FIX: In Vite applications (like this one deployed on Vercel), 
// environment variables are accessed via import.meta.env, not process.env.
// Casting import.meta to any to avoid TypeScript errors when vite types are not loaded
const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || '';
const supabaseKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("Supabase keys missing. Leaderboard will be in mock mode.");
}

// Export the status so components can know if we are in Mock mode or Real mode
export const isSupabaseConfigured = !!supabase;

export const getLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  if (!supabase) {
    // Mock data for development/preview if keys are missing
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
    console.warn(`[Mock Mode] Score for ${username} (${score}) was NOT saved to DB because keys are missing.`);
    // We return true here so the UI doesn't break during testing, 
    // but in production this means data is lost if keys aren't set.
    return true;
  }

  const { error } = await supabase
    .from('leaderboard')
    .insert([{ username, score }]);

  if (error) {
    // CRITICAL for debugging: Log the exact error from Supabase (e.g., RLS policy violation)
    console.error('Error submitting score to Supabase:', error);
    console.error('Details:', error.message, error.details, error.hint);
    return false;
  }

  return true;
};