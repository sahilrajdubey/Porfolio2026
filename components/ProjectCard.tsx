import { SiGithub } from 'react-icons/si';
import TextPressure from './TextPressure';

interface ProjectCardProps {
  videoUrl: string;
  textHeading: string;
  title: string;
  description: string;
  githubUrl: string;
  backgroundColor: string;
  showArrow?: boolean;
}

export default function ProjectCard({
  videoUrl,
  textHeading,
  title,
  description,
  githubUrl,
  backgroundColor,
  showArrow = false
}: ProjectCardProps) {
  return (
    <div className="relative z-10 w-full max-w-7xl mt-32 first:mt-0">
      {/* Paper Background with Rough Edge */}
      <div
        className="absolute inset-0 bg-white rounded-lg paper-edge"
        style={{
          background: backgroundColor,
          boxShadow: `
            inset 0 2px 4px rgba(0,0,0,0.1),
            inset 0 -2px 4px rgba(255,255,255,0.9),
            inset 2px 0 4px rgba(0,0,0,0.1),
            inset -2px 0 4px rgba(255,255,255,0.9),
            0 20px 60px rgba(0,0,0,0.3)
          `,
          border: '1px solid rgba(0,0,0,0.05)'
        }}
      />
      
      {/* Work Content */}
      <div className="relative p-12 md:p-16 lg:p-20">
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center max-w-6xl mx-auto">
            <div className="w-full md:w-3/5 lg:w-2/3 relative p-3 bg-white/50 backdrop-blur-sm border border-green-900/100 rounded-2xl shadow-xl">
              <video
                src={videoUrl}
                className="w-full h-auto object-cover rounded-xl shadow-inner"
                autoPlay
                loop
                muted
                playsInline
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>
        
        <div className="relative p-4 md:p-8 lg:p-10">
          {/* Text Pressure Heading */}
          <div className="flex flex-col items-center justify-center w-full mb-6">
            <div className="w-full max-w-[800px] relative">
              <TextPressure
                text={textHeading}
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#0b3c19ff"
                strokeColor="#490303ff"
                minFontSize={46}
              />
            </div>
            <div className="w-full max-w-[500px]">
              <svg viewBox="0 0 500 30" className="w-full h-auto drop-shadow-sm" preserveAspectRatio="none">
                <path
                  d="M0,15 Q20,5 40,15 T80,15 T120,15 T160,15 T200,15 T240,15 T280,15 T320,15 T360,15 T400,15 T440,15 T480,15 T520,15"
                  fill="none"
                  stroke="#0b3c19ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-1">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-medium text-black mb-4 tracking-widest uppercase">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
            {description}
          </p>

          <div className="flex justify-center mt-12 pb-8">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 hover:text-black transition-colors duration-300 group"
            >
              <SiGithub className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-[family-name:var(--font-playfair)] font-medium text-lg border-b border-transparent group-hover:border-black transition-all duration-300">
                View Repository
              </span>
            </a>
          </div>

          {/* Wavy Arrow */}
          {showArrow && (
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-8 text-black animate-bounce">
              <svg viewBox="0 0 24 50" fill="none" className="w-full h-auto">
                <path d="M12 2 C16 6 8 10 12 14 C16 18 8 22 12 26 C16 30 8 34 12 38 L12 48 M7 43 L12 48 L17 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
