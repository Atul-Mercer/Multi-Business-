import React from 'react';

interface BusinessLogoProps {
  name: string;
  type: 'finance' | 'medical' | 'vehicles';
  size?: 'sm' | 'md' | 'lg';
}

export function BusinessLogo({ name, type, size = 'md' }: BusinessLogoProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const getLogoContent = () => {
    switch (type) {
      case 'finance':
        return (
          <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg`}>
            <svg className="w-2/3 h-2/3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case 'medical':
        return (
          <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg`}>
            <svg className="w-2/3 h-2/3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"/>
            </svg>
          </div>
        );
      case 'vehicles':
        return (
          <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg`}>
            <svg className="w-2/3 h-2/3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {getLogoContent()}
      <span className="text-center text-xs">{name}</span>
    </div>
  );
}
