import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ChevronDown, 
  Leaf, 
  Heart, 
  Handshake, 
  Zap, 
  Trophy, 
  Users, 
  Globe, 
  MessageSquare,
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users as TeamIcon,
  QrCode,
  Github,
  Linkedin,
  Instagram,
  Disc
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackgroundParticles from '@/components/BackgroundParticles';
import CustomCursor from '@/components/CustomCursor';
import GlitchText from '@/components/GlitchText';
import ThreeHero from '@/components/ThreeHero';
import { cn } from '@/lib/utils';
import { FadeUp, FloatingCube, CountdownTimer } from '@/components/ClubShared';
import { Link } from '@tanstack/react-router';

export default function HackILusion() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tracks = [
    {
      title: "Green Intelligence",
      subtitle: "AI for Sustainability",
      desc: "Build the logic for a greener planet. Focus on carbon footprints, energy efficiency, and eco-tech.",
      icon: Leaf,
      color: "text-green-500"
    },
    {
      title: "AI for Good",
      subtitle: "Inclusion & Accessibility",
      desc: "Breaking barriers. Create tech that ensures empathy, accessibility, and inclusion for all.",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Human + AI",
      subtitle: "The Co-Creation",
      desc: "The ultimate synergy. Explore how human intuition and artificial intelligence can collaborate to solve complex problems.",
      icon: Handshake,
      color: "text-primary"
    },
    {
      title: "The Wildcard",
      subtitle: "Unrestricted Innovation",
      desc: "Bring us the idea that no one saw coming. Disrupt the status quo with your unique vision.",
      icon: Zap,
      color: "text-yellow-500"
    }
  ];

  const rewards = [
    {
      title: "Grand Cash Prize Pool",
      desc: "For the top innovators who redefine the limits of tech.",
      icon: Trophy
    },
    {
      title: "Tech Partner Awards",
      desc: "Specialized prizes from our elite industry sponsors.",
      icon: Zap
    },
    {
      title: "Networking & Mentorship",
      desc: "Direct interaction with industry leaders and experts.",
      icon: Users
    },
    {
      title: "Swag & Recognition",
      desc: "Premium certificates of merit and official Legion swag.",
      icon: Globe
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-primary/30 overflow-x-hidden">
      <BackgroundParticles />
      <CustomCursor />
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <Link to="/">
          <Button variant="ghost" className="text-foreground/70 hover:text-primary gap-2 hover:bg-white/5 backdrop-blur-md">
            <ArrowLeft size={18} /> BACK TO LEGION
          </Button>
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="font-cinzel text-xl font-bold text-primary tracking-widest text-glow-gold">AURUM</span>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
          <ThreeHero />
          <div className="scan-line pointer-events-none" />
          
          <FloatingCube position="top-[25%] left-[5%] md:left-[10%]" rotationSpeed={0.4} />
          <FloatingCube position="bottom-[30%] right-[5%] md:right-[15%]" rotationSpeed={0.6} color="rgba(191,13,0,1)" />

          <div className="container relative z-10 text-center px-4">
            <FadeUp>
              <div className="inline-block px-4 py-1 glass-panel border-secondary/30 rounded-full text-secondary text-[10px] sm:text-xs tracking-[0.3em] font-bold mb-6 sm:mb-8 uppercase">
                Flagship Hackathon
              </div>
              <h1 className="flex flex-col items-center">
                <GlitchText text="HACK-I-LUSION" className="text-4xl sm:text-6xl md:text-[8rem] tracking-[0.1em] font-black leading-none" />
                <span className="text-foreground/80 font-rajdhani text-sm sm:text-xl md:text-2xl tracking-[0.3em] md:tracking-[0.4em] mt-4 sm:mt-6 font-bold uppercase">Code. Create. Conceive.</span>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
                <div className="glass-panel p-4 sm:p-6 rounded-2xl border-white/5 flex flex-col items-center">
                  <Calendar className="text-primary mb-2 sm:mb-3" size={20} />
                  <p className="text-[10px] font-bold tracking-widest text-foreground/60 uppercase mb-1">Date</p>
                  <p className="text-base sm:text-lg font-bold">April 17-18, 2026</p>
                </div>
                <div className="glass-panel p-4 sm:p-6 rounded-2xl border-white/5 flex flex-col items-center">
                  <Clock className="text-primary mb-2 sm:mb-3" size={20} />
                  <p className="text-[10px] font-bold tracking-widest text-foreground/60 uppercase mb-1">Duration</p>
                  <p className="text-base sm:text-lg font-bold">24 Hours of Innovation</p>
                </div>
                <div className="glass-panel p-4 sm:p-6 rounded-2xl border-white/5 flex flex-col items-center sm:col-span-2 md:col-span-1">
                  <MapPin className="text-primary mb-2 sm:mb-3" size={20} />
                  <p className="text-[10px] font-bold tracking-widest text-foreground/60 uppercase mb-1">Organized By</p>
                  <p className="text-base sm:text-lg font-bold">Aurum – The Legion</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-12 sm:mt-16 flex flex-col items-center gap-4 sm:gap-6">
                <p className="text-foreground/40 text-[10px] tracking-[0.2em] font-bold uppercase">The countdown has begun</p>
                <div className="scale-75 sm:scale-100 origin-center">
                  <CountdownTimer targetDate="2026-04-17T09:00:00" />
                </div>
                <Button size="lg" className="mt-6 sm:mt-8 bg-primary hover:bg-primary/80 text-black font-black tracking-[0.2em] sm:tracking-[0.3em] px-8 sm:px-12 h-14 sm:h-16 text-lg sm:text-xl border-none shadow-[0_0_30px_rgba(240,182,22,0.4)] group overflow-hidden">
                  <span className="relative z-10">ENLIST NOW</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Button>
              </div>
            </FadeUp>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
            >
              <ChevronDown size={32} />
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 md:py-32 relative overflow-hidden bg-black/20">
          <div className="container max-w-5xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeUp>
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
                  <h2 className="font-bebas text-4xl sm:text-5xl md:text-7xl text-primary tracking-tight mb-6 md:mb-8 text-glow-gold uppercase">The Vision</h2>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6 font-rajdhani tracking-wide">Beyond the Surface</h3>
                  <div className="space-y-4 sm:space-y-6 text-foreground/70 leading-relaxed text-base sm:text-lg font-rajdhani font-medium">
                    <p>
                      In the world of technology, what you see is only the beginning. Hack-i-lusion is more than a competition; it is a 24-hour sprint designed to challenge your perception of what’s possible.
                    </p>
                    <p>
                      We invite the brightest minds to peel back the layers of reality and build solutions that redefine our future. Break the boundaries, disrupt the status quo, and conceive the inconceivable.
                    </p>
                  </div>
                </div>
              </FadeUp>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {[
                  { title: "Intense 24-Hour Sprint", desc: "A high-pressure environment to test your limits and unleash pure creativity.", icon: Clock },
                  { title: "Curated Talent", desc: "180-210 elite developers from across the region competing for the top spot.", icon: Users },
                  { title: "Industry Synergy", desc: "Connect with leaders from AI, Design, and Cybersecurity industries.", icon: Zap }
                ].map((item, i) => (
                  <FadeUp key={item.title} delay={i * 0.1}>
                    <div className="glass-panel p-4 sm:p-6 rounded-2xl border-white/5 flex gap-4 sm:gap-6 items-start group hover:border-primary/30 transition-all">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-1 group-hover:text-primary transition-colors uppercase tracking-wider">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section className="py-20 md:py-32 relative">
          <div className="container px-4">
            <FadeUp>
              <div className="text-center mb-16 md:mb-20">
                <h2 className="font-bebas text-4xl sm:text-5xl md:text-7xl text-primary tracking-tight text-glow-gold uppercase">The Domains of Innovation</h2>
                <p className="text-foreground/60 tracking-[0.2em] md:tracking-[0.3em] font-bold mt-4 uppercase text-xs sm:text-sm">Choose your battlefield</p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {tracks.map((track, i) => (
                <FadeUp key={track.title} delay={i * 0.1}>
                  <div className="glass-panel p-6 sm:p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/10 transition-all" />
                    <div className="flex gap-6 sm:gap-8 items-start relative z-10">
                      <div className={cn("w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-black/40 flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform", track.color)}>
                        <track.icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                          <span className="text-primary font-bebas text-lg sm:text-xl tracking-widest">0{i + 1}</span>
                          <h3 className="font-bebas text-2xl sm:text-3xl text-foreground tracking-tight group-hover:text-primary transition-colors">{track.title}</h3>
                        </div>
                        <p className="text-primary/80 text-xs sm:text-sm font-bold tracking-[0.2em] mb-3 sm:mb-4 uppercase">{track.subtitle}</p>
                        <p className="text-foreground/60 leading-relaxed font-rajdhani font-medium text-sm">{track.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="py-20 md:py-32 relative overflow-hidden bg-secondary/5">
          <div className="container px-4">
            <FadeUp>
              <div className="text-center mb-16 md:mb-20">
                <h2 className="font-bebas text-4xl sm:text-5xl md:text-7xl text-primary tracking-tight text-glow-gold uppercase">The Spoils of War</h2>
                <p className="text-foreground/60 tracking-[0.2em] md:tracking-[0.3em] font-bold mt-4 uppercase text-xs sm:text-sm">Excellence is recognized and rewarded</p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {rewards.map((reward, i) => (
                <FadeUp key={reward.title} delay={i * 0.1}>
                  <div className="glass-panel p-6 sm:p-8 rounded-2xl text-center group hover:border-secondary/50 transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform border border-secondary/20">
                      <reward.icon size={24} />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 uppercase tracking-wider group-hover:text-secondary transition-colors">{reward.title}</h4>
                    <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-medium mt-auto">{reward.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-20 md:py-32 relative">
          <div className="container max-w-6xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <FadeUp>
                <div className="glass-panel p-6 sm:p-10 rounded-3xl border-primary/20">
                  <h2 className="font-bebas text-3xl sm:text-4xl text-primary mb-6 sm:mb-8 tracking-wider">EVENT LOGISTICS</h2>
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex gap-4 sm:gap-6 items-center">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 glass-panel rounded-xl flex items-center justify-center text-primary">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Date</p>
                        <p className="text-lg sm:text-xl font-bold tracking-tight">April 17th – 18th, 2026</p>
                      </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 items-center">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 glass-panel rounded-xl flex items-center justify-center text-primary">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Duration</p>
                        <p className="text-lg sm:text-xl font-bold tracking-tight">24 Hours Continuous</p>
                      </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 items-center">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 glass-panel rounded-xl flex items-center justify-center text-primary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Venue</p>
                        <p className="text-lg sm:text-xl font-bold tracking-tight">Dayananda Sagar University (DSU)</p>
                      </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 items-center">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 glass-panel rounded-xl flex items-center justify-center text-primary">
                        <TeamIcon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Team Size</p>
                        <p className="text-lg sm:text-xl font-bold tracking-tight">3 members per team</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5">
                    <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 uppercase tracking-widest text-secondary">CONTACT COORDINATORS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <p className="text-lg sm:text-xl font-black text-foreground">S Shreenidhi</p>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">Student Coordinator</p>
                      </div>
                      <div>
                        <p className="text-lg sm:text-xl font-black text-foreground">G Nithesh</p>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">Student Coordinator</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/40 mt-4 sm:mt-6 italic font-medium">Aurum – The Legion, CSE Dept. DSU</p>
                  </div>
                </div>
              </FadeUp>

              <div className="flex flex-col items-center lg:items-end">
                <FadeUp delay={0.2}>
                  <div className="text-center lg:text-right mb-10 md:mb-12">
                    <h2 className="font-bebas text-4xl sm:text-5xl md:text-7xl text-foreground mb-4">READY TO BREAK THE ILLUSION?</h2>
                    <p className="text-primary text-lg sm:text-xl font-bold tracking-[0.2em] uppercase">Scan to register</p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.4}>
                  <div className="relative group p-3 sm:p-4 glass-panel rounded-[1.5rem] sm:rounded-[2rem] border-primary/30">
                    <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                    <div className="relative bg-white p-4 sm:p-8 rounded-[1rem] sm:rounded-[1.5rem] shadow-[0_0_50px_rgba(240,182,22,0.2)] group-hover:shadow-[0_0_70px_rgba(240,182,22,0.4)] transition-all">
                      <QrCode size={180} className="text-black md:w-[240px] md:h-[240px]" strokeWidth={1.5} />
                    </div>
                    
                    {/* Animated corner borders */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl" />
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl" />
                  </div>
                </FadeUp>

                <FadeUp delay={0.6}>
                  <div className="mt-10 sm:mt-16 flex gap-4 sm:gap-6">
                    {[Github, Instagram, Linkedin, Disc].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-panel flex items-center justify-center text-foreground/60 hover:text-primary transition-all hover:border-primary/50">
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-black border-t border-primary/20">
        <div className="container text-center">
          <div className="mb-8">
            <span className="font-cinzel text-3xl font-bold text-primary tracking-widest text-glow-gold uppercase">AURUM</span>
            <p className="text-foreground/40 mt-2 font-rajdhani tracking-[0.2em] font-bold text-xs uppercase">The Tech Club of CSE, Dayananda Sagar University</p>
          </div>
          <p className="text-foreground/30 text-[10px] tracking-widest uppercase">
            © 2026 Hack-i-lusion | Organized by Aurum – The Legion.
          </p>
        </div>
      </footer>
    </div>
  );
}
