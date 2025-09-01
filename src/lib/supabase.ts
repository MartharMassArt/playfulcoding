import { createClient } from '@supabase/supabase-js';

// Database types
export interface Submission {
  id?: string;
  student_name: string;
  project_id: string;
  week?: string;
  submission_url: string;
  title: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}

// Create Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions for submissions
export const submitProject = async (submission: Omit<Submission, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('submissions')
    .insert([submission])
    .select()
    .single();

  if (error) {
    console.error('Error submitting project:', error);
    throw error;
  }

  return data;
};

export const getSubmissionsByProject = async (projectId: string) => {
  const { data, error } = await supabase
    .from('submissions')
    .select('*')
    .eq('project_id', projectId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }

  return data;
};

export const getAllSubmissions = async () => {
  const { data, error } = await supabase
    .from('submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all submissions:', error);
    throw error;
  }

  return data;
};