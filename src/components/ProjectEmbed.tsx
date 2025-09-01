'use client';

import { useState } from 'react';
import { getEmbedUrl } from '@/lib/supabase-server';

interface ProjectEmbedProps {
  url: string;
  title: string;
  studentName: string;
  description: string;
  week?: string;
  createdAt: string;
}

export default function ProjectEmbed({ 
  url, 
  title, 
  studentName, 
  description, 
  week,
  createdAt 
}: ProjectEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const embedUrl = getEmbedUrl(url);
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  if (!embedUrl) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-purple-100">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">
              by <span className="font-semibold">{studentName}</span>
              {week && <span className="ml-2">• {week}</span>}
              <span className="ml-2">• {formattedDate}</span>
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-500 mb-2">Preview not available</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            View Project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow">
      {/* Project Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-600">
              by <span className="font-semibold text-purple-600">{studentName}</span>
              {week && <span className="ml-2">• {week}</span>}
              <span className="ml-2">• {formattedDate}</span>
            </p>
            <p className="text-gray-700 mt-3">{description}</p>
          </div>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 text-gray-400 hover:text-purple-600 transition-colors"
            title="Open in new tab"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Embedded Project */}
      <div className="relative bg-gradient-to-br from-purple-50 to-pink-50">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              <p className="text-sm text-gray-600 mt-2">Loading project...</p>
            </div>
          </div>
        )}
        <iframe
          src={embedUrl}
          title={title}
          className="w-full"
          style={{ height: '600px', minHeight: '400px' }}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
}