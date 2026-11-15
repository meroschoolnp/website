import React, { useState } from 'react';
import { Monitor } from 'lucide-react';

interface AppImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  priority?: boolean;
  caption?: string;
  fallbackTitle?: string;
  className?: string;
}

export const AppImage: React.FC<AppImageProps> = ({
  src,
  alt,
  aspectClass = 'aspect-[16/9]',
  priority = false,
  caption,
  fallbackTitle,
  className = '',
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900`}
      >
        {!failed ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-[1.015]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6 text-center bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950/40">
            <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Monitor className="w-5 h-5" />
            </div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              {fallbackTitle || alt}
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between gap-4">
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};

export const PublicImage = AppImage;
