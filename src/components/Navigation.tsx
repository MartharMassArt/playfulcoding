'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { projectsData } from '@/lib/projectData';
import { submitProject } from '@/lib/supabase';

const projects = Object.values(projectsData).map(project => ({
  id: project.id,
  title: project.title,
  weeks: project.weeks,
  emoji: project.emoji
}));

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [studentName, setStudentName] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    function handleOpenModal(event: CustomEvent) {
      const { projectId, week } = event.detail;
      openSubmitModal(projectId, week);
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('openSubmitModal', handleOpenModal as EventListener);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('openSubmitModal', handleOpenModal as EventListener);
    };
  }, []);

  const openSubmitModal = (projectId?: string, week?: string) => {
    setSelectedProject(projectId || '');
    setSelectedWeek(week || '');
    setStudentName('');
    setProjectUrl('');
    setProjectTitle('');
    setProjectDescription('');
    setSubmitError('');
    setSubmitSuccess(false);
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      await submitProject({
        student_name: studentName,
        project_id: selectedProject,
        week: selectedWeek || undefined,
        submission_url: projectUrl,
        title: projectTitle,
        description: projectDescription,
      });
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setModalOpen(false);
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      setSubmitError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-purple-200/30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-lg p-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {"</>"}
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                Playful Code
              </span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-all hover:scale-105"
              >
                Home
              </Link>
              
              {/* Projects Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-all hover:scale-105"
                >
                  Projects
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-purple-100 overflow-hidden">
                    {projects.map((project) => (
                      <Link
                        key={project.id}
                        href={`/project/${project.id}`}
                        className="block px-4 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-gray-700 hover:text-purple-600 flex items-center flex-1">
                            <span className="mr-2 text-lg">{project.emoji}</span>
                            <span>{project.title}</span>
                          </span>
                          <span className="text-xs font-mono text-gray-500 whitespace-nowrap">
                            Week {project.weeks}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => openSubmitModal()}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all"
              >
                Submit Work
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Submission Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Submit Your Work
              </span>
            </h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a project...</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      Week {project.weeks}: {project.title}
                    </option>
                  ))}
                </select>
              </div>
              
              {selectedProject && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Week (Optional)
                  </label>
                  <select
                    value={selectedWeek}
                    onChange={(e) => setSelectedWeek(e.target.value)}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    disabled={isSubmitting}
                  >
                    <option value="">Select week (if applicable)</option>
                    <option value="Week 1">Week 1</option>
                    <option value="Week 2">Week 2</option>
                  </select>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project URL
                </label>
                <input
                  type="url"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="https://codepen.io/your-project"
                  required
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Supports: CodePen, p5js.org, and other platforms
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="Give your project a creative title"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                  rows={3}
                  placeholder="Brief description of your project..."
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {submitError}
                </div>
              )}
              
              {submitSuccess && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
                  Successfully submitted! Redirecting...
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={`w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all ${
                  isSubmitting || submitSuccess ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'Submitting...' : submitSuccess ? 'Submitted!' : 'Submit Your Work'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// Export the function to open modal for use in other components
export { projects };
export type { Navigation as NavigationType };