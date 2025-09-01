import { createClient } from '@supabase/supabase-js';
import { Submission } from './supabase';

// Server-side Supabase client using anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Server-side client using anon key - respects RLS policies
// Only approved submissions will be visible due to RLS
export const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

// Fetch approved submissions for a specific project
export async function getApprovedSubmissions(projectId: string): Promise<Submission[]> {
  const { data, error } = await supabaseAdmin
    .from('submissions')
    .select('*')
    .eq('project_id', projectId)
    .eq('approved', true)
    .order('created_at', { ascending: true }); // Chronological order

  if (error) {
    console.error('Error fetching approved submissions:', error);
    return [];
  }

  return data || [];
}

// Helper function to convert URLs to embeddable iframe URLs
export function getEmbedUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    
    // CodePen URLs
    if (urlObj.hostname === 'codepen.io') {
      // Convert https://codepen.io/username/pen/id to embed URL
      const pathParts = urlObj.pathname.split('/');
      if (pathParts.length >= 4 && pathParts[2] === 'pen') {
        const username = pathParts[1];
        const penId = pathParts[3];
        return `https://codepen.io/${username}/embed/${penId}?default-tab=result&theme-id=light`;
      }
    }
    
    // p5.js editor URLs
    if (urlObj.hostname === 'editor.p5js.org') {
      // Convert https://editor.p5js.org/username/full/sketchId or
      // https://editor.p5js.org/username/sketches/sketchId
      // to https://preview.p5js.org/username/embed/sketchId
      const pathParts = urlObj.pathname.split('/').filter(p => p);
      if (pathParts.length >= 3) {
        const username = pathParts[0];
        // Get sketch ID from either /full/ or /sketches/ paths
        const sketchId = pathParts[pathParts.length - 1];
        return `https://preview.p5js.org/${username}/embed/${sketchId}`;
      } else if (pathParts.length >= 2) {
        // Handle URLs like /username/sketchId
        const username = pathParts[0];
        const sketchId = pathParts[1];
        return `https://preview.p5js.org/${username}/embed/${sketchId}`;
      }
    }
    
    // Return null for unsupported URLs
    return null;
  } catch (error) {
    console.error('Error parsing URL:', error);
    return null;
  }
}