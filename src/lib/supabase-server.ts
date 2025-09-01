import { createClient } from '@supabase/supabase-js';
import { Submission } from './supabase';

// Server-side Supabase client with service role key for admin operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.NEXT_SECRET_SUPABASE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables');
}

// This client bypasses RLS and should only be used server-side
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
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
      // URLs are already in the format: https://editor.p5js.org/username/full/sketchId
      // Just return as-is if it contains '/full/'
      if (urlObj.pathname.includes('/full/')) {
        return url;
      }
      // Convert https://editor.p5js.org/username/sketches/id to full URL
      const pathParts = urlObj.pathname.split('/');
      if (pathParts.length >= 3) {
        const username = pathParts[1];
        const sketchId = pathParts[pathParts.length - 1];
        return `https://editor.p5js.org/${username}/full/${sketchId}`;
      }
    }
    
    // Return null for unsupported URLs
    return null;
  } catch (error) {
    console.error('Error parsing URL:', error);
    return null;
  }
}