'use client';
import { useEffect, useState } from 'react';

export default function GlobalBackground() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          poster="/bgimage.png"
          suppressHydrationWarning
          style={{ height: '100vh' }}
        >
          <source src="/bgvdo.mp4" type="video/mp4" />
        </video>

        {/* Mobile overlay - more translucent for better video visibility */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/70" />

        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
      </div>
    </>
  );
}
