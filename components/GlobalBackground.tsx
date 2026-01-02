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

    // Hide video only after fully scrolling past About section start
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;
      
      const scrollY = window.scrollY;
      const aboutTop = aboutSection.offsetTop;
      
      // Keep video visible until we're well into the About section
      if (scrollY > aboutTop + 200) {
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

  return (
    <>
      {/* Global Background Video - Visible on landing and during transition */}
      <div 
        className="fixed inset-0 w-full overflow-hidden"
        style={{
          zIndex: -1,
          opacity: showVideo ? 1 : 0,
          transition: 'opacity 0.7s ease-in-out',
          pointerEvents: 'none',
          height: '100vh'
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
            transition: 'opacity 0.5s ease-in-out',
            height: '100vh'
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
        <div className="fixed inset-0 bg-black" style={{ zIndex: -1 }} />
      )}
    </>
  );
}
