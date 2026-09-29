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

// Límite razonable calculado a partir del banco de niveles (máximo teórico absoluto: 57 niveles, máx. 70.125 puntos)
export const MAX_REASONABLE_SCORE = 72000;

export const submitScore = async (username: string, score: number): Promise<boolean> => {
  const cleanUser = username.trim().slice(0, 30);
  if (!cleanUser) return false;

  // Validación de rango de puntuación
  if (score <= 0 || score > MAX_REASONABLE_SCORE || !Number.isFinite(score)) {
    console.warn(`[Ranking] Puntuación ${score} rechazada por exceder el máximo admisible (${MAX_REASONABLE_SCORE}).`);
    return false;
  }

  if (!supabase) {
    console.warn(`[Mock Mode] Score for ${cleanUser} (${score}) was NOT saved to DB because keys are missing.`);
    return true;
  }

  const { error } = await supabase
    .from('leaderboard')
    .insert([{ username: cleanUser, score: Math.round(score) }]);

  if (error) {
    console.error('Error submitting score to Supabase:', error);
    return false;
  }

  return true;
};