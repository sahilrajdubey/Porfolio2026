'use client';
import { useEffect, useState } from 'react';

export default function GlobalBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    
    // Preload video
    const video = document.createElement('video');
    video.src = '/bgvdo.mp4';
    video.preload = 'auto';
    video.load();
    
    video.addEventListener('loadeddata', () => {
      setIsVideoLoaded(true);
    });

    // Hide video after landing page
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Hide video when scrolled past 80% of viewport height
      if (scrollY > window.innerHeight * 0.8) {
        setShowVideo(false);
      } else {
        setShowVideo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadeddata', () => {});
    };
  }, []);

  if (!isMounted) return null;

  // Don't render video component if not on landing
  if (!showVideo) return null;

  return (
    <>
      {/* Global Background Video - Only visible on landing page */}
      <div 
        className="fixed inset-0 z-[-1] w-full h-full overflow-hidden"
        style={{
          opacity: showVideo ? 1 : 0,
          transition: 'opacity 0.7s ease-in-out',
          pointerEvents: 'none'
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          suppressHydrationWarning
          style={{
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <source src="/bgvdo.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile overlay - more translucent for better video visibility */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/70" />
        
        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
      </div>

      {/* Fallback loading state */}
      {!isVideoLoaded && showVideo && (
        <div className="fixed inset-0 z-[-1] bg-black" />
      )}
    </>
  );
}
