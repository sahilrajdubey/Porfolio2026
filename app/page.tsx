'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import LogoLoop from '@/components/LogoLoop';
import { SiInstagram, SiGithub, SiLinkedin, SiDiscord, SiX } from 'react-icons/si';
import CircularGallery from '@/components/CircularGallery';
import RotatingText from '@/components/RotatingText';
import TextPressure from '@/components/TextPressure';
import { useState, useEffect } from 'react';

export default function Home() {
  const [bgPhase, setBgPhase] = useState<'landing' | 'black' | 'main'>('landing');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;

      const scrollY = window.scrollY;
      const aboutTop = aboutSection.offsetTop;
      const aboutHeight = aboutSection.offsetHeight;

      // Calculate split point (halfway through about section)
      // Adjust offset checks to better match visual breaks if needed
      if (scrollY < aboutTop - 100) { // Keep landing bg until close to about
        setBgPhase('landing');
      } else if (scrollY < aboutTop + aboutHeight / 100
      ) {
        setBgPhase('black');
      } else {
        setBgPhase('main');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];
  const socialLogos = [
    { node: <SiInstagram color="#ffffffff" />, title: "Instagram", href: "https://www.instagram.com/sahilrajdubey_" },
    { node: <SiGithub color="#ffffffff" />, title: "GitHub", href: "https://github.com/sahilrajdubey" },
    { node: <SiLinkedin color="#ffffffff" />, title: "LinkedIn", href: "https://www.linkedin.com/in/sahil-raj-dubey/" },
    { node: <SiDiscord color="#ffffffff" />, title: "Discord", href: "https://discord.gg/58uwPkFjJJ" },

  ];
  return (
    <>
      {/* SVG Filter Definition for Rough Paper Edge */}
      <svg className="hidden">
        <defs>
          <filter id="roughpaper">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
        </defs>
      </svg>

      {/* Landing Page Section */}
      <section className="relative h-screen w-full overflow-hidden text-white selection:bg-white/20 pb-32">


        <div className="fixed inset-0 z-0 select-none bg-black transition-colors duration-700">
          {/* Layer 1: Background Landing Image (bgimage.png) */}
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${bgPhase === 'landing' ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/bgimage.png"
              alt="Background Landing"
              fill
              priority
              className="object-cover object-center"
              quality={100}
            />
          </div>


          {/* Layer 3: Overlay Image (myphoto4.png) */}
          <div className={`absolute top-20 bottom-[-1px] right-[-5%] lg:right-[-3%] w-[500px] md:w-[650px] lg:w-[800px] transition-opacity duration-700 ease-in-out ${bgPhase === 'landing' ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/myphoto4.png"
              alt="Overlay Photo"
              fill
              priority
              className="object-contain object-bottom"
              quality={100}
            />
          </div>

          {/* Layer 4: Black Background (Actually just showing the parent bg-black when others are transparent, but we can be explicit or just rely on opacity) */}
          {/* If both images are opacity-0, the background color of the parent div (bg-black) shows through.
              Since bgPhase 'black' sets both images to opacity 0, we get the black background. 
          */}

          {/* Layer 5: Main Image (image.jpg) */}
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${bgPhase === 'main' ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/image.jpg"
              alt="Background Main"
              fill
              priority
              className="object-cover object-center"
              quality={100}
            />
          </div>
        </div>


        <div className="relative z-50 w-full px-8 py-4 md:px-12 md:py-6 flex justify-between items-start pointer-events-none">
          <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-semibold text-white pointer-events-auto tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-[family-name:var(--font-inter)]  tracking-wider">Sahil Raj Dubey xD</span>
          </div>

          <nav className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium text-white/90 pointer-events-auto font-[family-name:var(--font-inter)]">
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide">[about]</a>
            <a href="#work" onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide">[work]</a>
            <a
              href="https://drive.google.com/uc?export=download&id=1jcJVFavLjZRXA556DFqE8P3iUBM2K1lt"
              className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide"
              download
            >
              [resume]
            </a>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide">[let's chat]</a>
          </nav>
        </div>




        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 w-full max-w-2xl px-4">
          <h3 className="text-sm md:text-base lg:text-lg text-white/60 mb-4 font-[family-name:var(--font-inter)] uppercase tracking-widest font-light">

          </h3>
          <div className="relative overflow-hidden">
            {/* Left Fade overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-30 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, transparent 80%)' }} />
            {/* Right Fade overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-30 pointer-events-none"
              style={{ background: 'linear-gradient(to left, rgba(7, 6, 6, 0.96) 0%, transparent 80%)' }} />


          </div>
        </div>



      </section>


      <section id="about" className="relative min-h-screen w-full flex items-center justify-center py-20 px-8">
        {/* Static Background stays behind */}

        {/* Paper Container */}
        <div className="relative z-10  w-full max-w-7xl">
          {/* Paper Background with Rough Edge */}
          <div className="absolute inset-0 bg-white rounded-lg paper-edge"
            style={{
              background: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)',
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

          {/* Content Content (on top of background) */}
          <div className="relative p-12 md:p-16 lg:p-20">

            {/* About Me Heading */}
            <h2 className="flex items-center gap-2 md:gap-4 text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] font-bold text-black mb-12 tracking-tight">
              About
              <RotatingText
                texts={['Persona', 'Speaker', 'Myself', 'Sahil']}
                mainClassName="bg-blue-900 text-white px-2 sm:px-2 md:px-3 rounded-lg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h2>

            {/* Content Area - You can add your content here */}
            <div className="space-y-8 text-lg md:text-xl text-gray-800 font-[family-name:var(--font-inter)] leading-relaxed">
              <p className="text-2xl font-medium text-gray-900">
                Hello! I’m Sahil Raj Dubey, an ardent technophile shaping sophisticated web ecosystems through innovation and refined craftsmanship.
              </p>

              <p>
                I’m a detail-driven creator who blends aesthetics with logic to build meaningful digital experiences. My journey in tech revolves around crafting intuitive web applications, exploring the depths of data science, and shaping intelligent systems through machine learning and artificial intelligence. With Python as my core tool, I transform ideas into practical, project-oriented solutions that speak through clean design and efficient execution.

                Beyond technical skill, I thrive in collaborative spaces—leading with clarity, contributing with empathy, and elevating every team I work with. Whether developing innovative products or exploring new technologies, I approach every challenge with curiosity, discipline, and an eye for refinement.
              </p>

              <p>
                My journey in web development started with a curiosity about how things work
                on the internet, and has evolved into a deep passion for creating digital solutions
                that make a difference.
              </p>

              {/* Skills or additional sections can go here */}
              <div className="pt-8 mt-8 border-t border-gray-200">
                <h3 className="text-3xl font-[family-name:var(--font-playfair)] font-semibold text-black mb-6">
                  What I Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Frontend Development</h4>
                    <p className="text-gray-700">Building responsive and interactive user interfaces</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">UI/UX Design</h4>
                    <p className="text-gray-700">Creating beautiful and intuitive user experiences</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Backend Development</h4>
                    <p className="text-gray-700">Building fast, secure, scalable server systems</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Data Science</h4>
                    <p className="text-gray-700">Transforming raw data into actionable insights</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Machine Learning</h4>
                    <p className="text-gray-700">Creating intelligent models that learn patterns</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Database Management</h4>
                    <p className="text-gray-700">Structuring optimized and reliable data storage</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">API Development</h4>
                    <p className="text-gray-700">Designing seamless and efficient data flows</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Team Collaboration</h4>
                    <p className="text-gray-700">Working cohesively to build robust solutions</p>
                  </div>

                </div>
                <div className="pt-20 mt-8 border-t border-gray-200"></div>
                <h3 className="text-3xl font-[family-name:var(--font-playfair)] font-semibold text-black mb-6">
                  Certifications
                </h3>
              </div>
            </div>
            <div style={{ height: '600px', position: 'relative' }} className="-mx-12 md:-mx-16 lg:-mx-20 -mt-24 -mb-12 md:-mb-16 lg:-mb-10 rounded-b-lg overflow-hidden">
              <CircularGallery bend={3} textColor="#000000ff" borderRadius={0.05} scrollEase={0.02} items={undefined} />
            </div>
            <div className="pt-8 mt-9 border-t border-gray-200"></div>
            <h3 className="text-3xl font-[family-name:var(--font-playfair)] font-semibold text-black mb-6">
              Tools & Technologies
            </h3>
            <div className="flex flex-col items-center justify-center w-full">
              <table className="mx-auto w-full border-collapse border border-black">
                <tbody>
                  <tr>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/python-icon.svg" alt="Python" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Python</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>JavaScript</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="TypeScript" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>TypeScript</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>React</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Next.js</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Node.js</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=express" alt="Express" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Express</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="MySQL" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>MySQL</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>MongoDB</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Firebase</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=postman" alt="Postman" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Postman</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="AWS" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>AWS</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Tailwind</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=graphql" alt="GraphQL" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>GraphQL</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/github-icon.svg" alt="GitHub" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>GitHub</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=git" alt="Git" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Git</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-8 mt-20 border-t border-gray-200"></div>
          </div>
        </div>

      </section>
      <section id="work" className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-8 -mt-20">
        {/* Static Background stays behind */}
        <h2 className="flex items-center gap-2 md:gap-4 text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] font-bold text-black mb-12 tracking-tight">
          My
          <RotatingText
            texts={['Creations', 'Innovations', 'Formations', 'Endeavours']}
            mainClassName="bg-green-900 text-white px-2 sm:px-2 md:px-3 rounded-lg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>

        {/* Paper Container */}
        <div className="relative z-10 w-full max-w-7xl">
          {/* Paper Background with Rough Edge */}
          <div className="absolute inset-0 bg-white rounded-lg paper-edge"
            style={{
              background: '#ebeadaff',
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
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center max-w-6xl mx-auto">
                <div className="w-full md:w-3/5 lg:w-2/3 relative p-3 bg-white/50 backdrop-blur-sm border border-green-900/100 rounded-2xl shadow-xl">
                  <video
                    src="/rec1.mov"
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

              {/* About Me Heading - Changed to div because TextPressure contains an h1 and div, creating invalid nesting inside h2 */}
              <div className="flex flex-col items-center justify-center w-full mb-6">
                <div className="w-full max-w-[800px] relative">
                  <TextPressure
                    text="ELEVATE"
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
                Skill Tracking Dashboard
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
                A modern, gamified interface designed to help users monitor their learning journey in a clean and visually engaging way. It brings together progress tracking, achievements, streaks, and roadmap completion into one unified experience. Users can view their total XP, current level, daily learning streak, and milestone progress at a glance. The dashboard also highlights recently earned achievements such as streak rewards, course completions, and level milestones, making the entire learning process more exciting and motivating.

                A dynamic roadmap progress bar shows how many milestones have been completed, helping users stay aligned with long-term goals. The dashboard is supported by a smooth sidebar navigation system, giving quick access to Courses, Skill Tracker, Roadmaps, Analysis, Profile, and Settings. With its dark-themed UI, gradient highlights, and clean card-based layout, the dashboard feels both professional and enjoyable to use. Overall, it provides a complete overview of personal growth and encourages users to stay consistent, keep learning, and level up their skills day by day.
              </p>

              <div className="flex justify-center mt-12 pb-8">
                <a
                  href="https://github.com/sahilrajdubey/skillprogressdashboard"
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
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-8 text-black animate-bounce">
                <svg viewBox="0 0 24 50" fill="none" className="w-full h-auto">
                  <path d="M12 2 C16 6 8 10 12 14 C16 18 8 22 12 26 C16 30 8 34 12 38 L12 48 M7 43 L12 48 L17 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>




        </div>

        {/* Second Paper Container (Duplicate) */}
        <div className="relative z-10 w-full max-w-7xl mt-32">
          {/* Paper Background with Rough Edge */}
          <div className="absolute inset-0 bg-white rounded-lg paper-edge"
            style={{
              background: '#eed7d7ff',
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
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center max-w-6xl mx-auto">
                <div className="w-full md:w-3/5 lg:w-2/3 relative p-3 bg-white/50 backdrop-blur-sm border border-green-900/100 rounded-2xl shadow-xl">
                  <video
                    src="/rec2.mov"
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

              {/* About Me Heading - Changed to div because TextPressure contains an h1 and div, creating invalid nesting inside h2 */}
              <div className="flex flex-col items-center justify-center w-full mb-6">
                <div className="w-full max-w-[800px] relative">
                  <TextPressure
                    text="INNOVATE"
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
                Innovate - The Tech Fest
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
                A webpage for a dynamic and immersive technology festival designed to bring together passionate innovators, developers, creators, and tech enthusiasts under one roof. The event celebrates the spirit of innovation by showcasing the latest advancements in technology, hands-on workshops, live demonstrations, and interactive technical competitions.

                From exploring emerging trends like AI, Web Development, Cybersecurity, Robotics, and Cloud Technologies to engaging in hackathons and project exhibitions, Innovate creates a platform where ideas meet execution. Participants get the opportunity to learn from industry experts, collaborate with like-minded peers, build real-world solutions, and unleash their creativity.

                Whether you’re a beginner eager to explore the tech world or an advanced learner looking to level up your skills, Innovate – The Tech Fest delivers an inspiring and empowering experience that fuels curiosity, learning, and innovation.
              </p>

              <div className="flex justify-center mt-12 pb-8">
                <a
                  href="https://github.com/gitcomit8/technovate-new"
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
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-8 text-black animate-bounce">
                <svg viewBox="0 0 24 50" fill="none" className="w-full h-auto">
                  <path d="M12 2 C16 6 8 10 12 14 C16 18 8 22 12 26 C16 30 8 34 12 38 L12 48 M7 43 L12 48 L17 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Second Paper Container (Duplicate) */}
        <div className="relative z-10 w-full max-w-7xl mt-32">
          {/* Paper Background with Rough Edge */}
          <div className="absolute inset-0 bg-white rounded-lg paper-edge"
            style={{
              background: '#d7eceeff',
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
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center max-w-6xl mx-auto">
                <div className="w-full md:w-3/5 lg:w-2/3 relative p-3 bg-white/50 backdrop-blur-sm border border-green-900/100 rounded-2xl shadow-xl">
                  <video
                    src="/rec3.mov"
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

              {/* About Me Heading - Changed to div because TextPressure contains an h1 and div, creating invalid nesting inside h2 */}
              <div className="flex flex-col items-center justify-center w-full mb-6">
                <div className="w-full max-w-[800px] relative">
                  <TextPressure
                    text="GEEKSFORGEEKS"
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
                GeeksForGeeks - Campus Body
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base font-light">
                The GeeksforGeeks SRMIST Club Website is a comprehensive, modern, and fully interactive full-stack platform created to revolutionize the digital workflow of our college’s tech club. Developed using Next.js and Tailwind CSS, paired with a scalable backend and advanced 3D web technologies, this project blends performance, design, and innovation into a single unified system. The website streamlines every aspect of club management—ranging from event creation, registration handling, announcements, and automated updates to hosting a dedicated gallery for every event with high-quality visuals and smooth animations. It also features a specialized Coding Challenges section inspired by LeetCode, allowing students to practice curated problems, sharpen their problem-solving skills, and stay consistent with competitive programming. With responsive layouts, fast rendering, role-based access control, and visually engaging 3D components, the platform significantly enhances the club’s digital presence. Beyond functionality, it creates an immersive environment where students can learn, explore, collaborate, and stay connected with all ongoing technical activities, making it a complete digital ecosystem for the entire community.
              </p>
              <div className="flex justify-center mt-12 pb-8">
                <a
                  href="https://github.com/gitcomit8/GEEKSFORGEEKS-SRMIST"
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


            </div>
          </div>
        </div>

      </section>
    </>

  );
}
