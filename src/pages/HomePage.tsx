import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ChevronDown, 
  Code, 
  Brain, 
  Shield, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Github, 
  Instagram, 
  Linkedin, 
  Disc,
  Menu,
  X,
  ExternalLink,
  Info,
  Radio
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import BackgroundParticles from '@/components/BackgroundParticles';
import CustomCursor from '@/components/CustomCursor';
import GlitchText from '@/components/GlitchText';
import ThreeHero from '@/components/ThreeHero';
import { cn } from '@/lib/utils';
import { FadeUp, FloatingCube, HexPrism, CountdownTimer } from '@/components/ClubShared';
import { Link } from '@tanstack/react-router';

// --- App ---

export default function HomePage() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLiveBanner, setShowLiveBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Hide live banner when approaching About section (approx 80% of viewport height)
      setShowLiveBanner(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Domains', href: '#domains' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const events = [
    {
      title: "HACK-I-LUSION",
      date: "April 17-18, 2026 | 24 Hours of Innovation",
      venue: "Main Auditorium, DSU",
      tag: "FLAGSHIP",
      status: "UPCOMING",
      desc: "Code. Create. Conceive. Aurum's biggest 24-hour sprint designed to challenge your perception of what’s possible.",
      color: "secondary",
      isFlagship: true,
      link: "/events/hack-i-lusion"
    },
    {
      title: "TECH TALK: AI FRONTIERS",
      date: "April 2, 2025 | 3:00 PM",
      venue: "Seminar Hall B",
      tag: "TALK",
      status: "UPCOMING",
      desc: "Industry experts discuss the future of Generative AI. Explore how human intuition and artificial intelligence can collaborate to solve complex problems.",
      color: "primary"
    },
    {
      title: "CODE SPRINT",
      date: "April 18, 2025 | 10:00 AM",
      venue: "Computer Lab 3",
      tag: "COMPETITION",
      status: "UPCOMING",
      desc: "Speed coding challenge across 5 domains. Test your logical and problem-solving skills in a high-pressure environment.",
      color: "secondary"
    },
    {
      title: "CYBERSEC BOOTCAMP",
      date: "May 3, 2025 | 9:00 AM",
      venue: "Lab Block A",
      tag: "WORKSHOP",
      status: "UPCOMING",
      desc: "Hands-on ethical hacking and defense workshop. Learn from cybersecurity professionals and build secure infrastructure.",
      color: "primary"
    },
    {
      title: "ROBO WARS",
      date: "May 20, 2025 | 11:00 AM",
      venue: "Open Ground",
      tag: "BATTLE",
      status: "UPCOMING",
      desc: "Bot battles, obstacle courses, and drone racing. The ultimate clash of hardware and engineering skills.",
      color: "secondary"
    },
    {
      title: "ANNUAL TECH FEST",
      date: "June 10–12, 2025",
      venue: "College Campus",
      tag: "MEGA EVENT",
      status: "UPCOMING",
      desc: "Aurum's biggest 3-day celebration of technology and innovation. Workshops, competitions, and keynote sessions from tech giants.",
      color: "primary"
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-primary/30">
      <BackgroundParticles />
      <CustomCursor />
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-panel py-3 shadow-lg" : "bg-transparent py-6"
      )}>
        {/* Live Announcement Banner */}
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ 
            opacity: showLiveBanner ? 1 : 0,
            y: showLiveBanner ? 0 : -20,
            pointerEvents: showLiveBanner ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 right-0 overflow-hidden h-10 pointer-events-none flex items-center justify-center"
        >
          <Link 
            to="/events/hack-i-lusion" 
            className="pointer-events-auto flex items-center gap-2 bg-secondary/20 hover:bg-secondary/30 border border-secondary/30 px-4 py-1 rounded-full text-[10px] tracking-[0.2em] font-bold text-secondary animate-pulse transition-all shadow-[0_0_15px_rgba(191,13,0,0.2)]"
          >
            <Radio size={12} className="animate-pulse" />
            LIVE: HACK-I-LUSION REGISTRATION OPEN
          </Link>
        </motion.div>

        <div className={cn(
          "container flex items-center justify-between transition-all duration-300",
          showLiveBanner ? "mt-4 lg:mt-0" : "mt-0"
        )}>
          <div className="flex items-baseline gap-2">
            <span className="font-cinzel text-2xl font-bold text-primary tracking-widest text-glow-gold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>AURUM</span>
            <span className="text-secondary font-rajdhani text-xs tracking-[0.2em] font-bold">· THE LEGION</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-widest text-foreground/70 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#F0B616]" />
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/80 text-black font-bold tracking-widest px-6 h-10 shadow-[0_0_15px_rgba(240,182,22,0.3)] border-none">
              ENLIST
            </Button>
          </div>

          <button 
            className="lg:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 glass-panel py-8 flex flex-col items-center gap-6 pointer-events-none",
            mobileMenuOpen && "pointer-events-auto"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <ThreeHero />
          <div className="scan-line pointer-events-none" />
          
          <FloatingCube position="top-[25%] left-[5%] md:left-[15%]" rotationSpeed={0.5} />
          <FloatingCube position="top-[35%] right-[5%] md:right-[10%]" rotationSpeed={0.8} />
          <FloatingCube position="bottom-[20%] left-[30%] md:left-[40%]" rotationSpeed={0.3} color="rgba(191,13,0,1)" />

          <div className="container relative z-10 text-center px-4">
            <FadeUp>
              <h1 className="flex flex-col items-center">
                <GlitchText text="AURUM" className="text-5xl sm:text-7xl md:text-9xl tracking-[0.15em] md:tracking-[0.2em] font-black" />
                <span className="text-secondary font-rajdhani text-sm sm:text-xl md:text-2xl tracking-[0.3em] md:tracking-[0.5em] mt-4 font-bold">— THE LEGION —</span>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="mt-8 text-lg md:text-xl text-foreground/80 font-rajdhani tracking-widest max-w-2xl mx-auto">
                Evolve with Tech. Lead with Excellence.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-black font-bold tracking-widest px-10 h-14 text-lg border-none shadow-[0_0_20px_rgba(240,182,22,0.4)] group relative overflow-hidden">
                  <span className="relative z-10">JOIN THE LEGION</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 tracking-widest px-10 h-14 text-lg font-bold shadow-[0_0_15px_rgba(240,182,22,0.1)]">
                  EXPLORE EVENTS
                </Button>
              </div>
            </FadeUp>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary z-20 cursor-pointer hover:text-primary/80 transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
          <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4">
            <FadeUp>
              <div className="relative pl-6 md:pl-8 border-l-2 border-secondary">
                <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-primary tracking-tight mb-6 md:mb-8 text-glow-gold">About the Legion</h2>
                <div className="space-y-6 text-foreground/80 leading-relaxed text-lg font-rajdhani font-medium">
                  <p>
                    Aurum is not just a club; it's a legacy of innovation and leadership. We foster a community of tech enthusiasts who are passionate about pushing boundaries and setting new standards in the digital frontier.
                  </p>
                  <p>
                    From artificial intelligence to ethical hacking, we dive deep into the core of emerging technologies, equipping our members with the skills to lead and the vision to evolve.
                  </p>
                </div>
              </div>
            </FadeUp>

            <div className="relative">
              {/* 3D Orbit Ring */}
              <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-primary/20 rounded-full animate-[spin_8s_linear_infinite] preserve-3d" style={{ transform: 'rotateX(75deg)' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#F0B616]" />
              </div>

              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { label: 'Members', value: 200, suffix: '+' },
                  { label: 'Events', value: 50, suffix: '+' },
                  { label: 'Years', value: 5, suffix: '' },
                  { label: 'Projects', value: 30, suffix: '+' },
                ].map((stat, i) => (
                  <FadeUp key={stat.label} delay={i * 0.1}>
                    <div className="glass-panel p-8 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300">
                      <div className="text-4xl md:text-5xl font-bebas text-primary mb-2 group-hover:scale-110 transition-transform">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-xs tracking-[0.3em] uppercase text-foreground/60 font-bold">{stat.label}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="events" className="py-20 md:py-32 relative">
          <div className="container px-4">
            <FadeUp>
              <div className="text-center mb-16 md:mb-20">
                <h2 className="font-bebas text-4xl sm:text-5xl md:text-7xl text-primary tracking-tight inline-block relative text-glow-gold">
                  UPCOMING EVENTS
                  <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_#F0B616]" />
                </h2>
              </div>
            </FadeUp>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Spine */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary md:-translate-x-1/2" />

              <div className="space-y-16 md:space-y-24">
                {events.map((event, i) => (
                  <div key={event.title} className={cn(
                    "relative flex flex-col md:flex-row items-center pl-8 md:pl-0",
                    i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  )}>
                    {/* Node */}
                    <div className="absolute left-[-1px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-background border-2 border-primary z-10">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    </div>

                    <FadeUp delay={0.1} className="w-full md:w-auto">
                      <div className={cn(
                        "glass-panel p-6 md:p-8 rounded-2xl w-full md:w-[400px] hover:border-primary/50 transition-all duration-300 group",
                        i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      )}>
                        <div className="flex items-center justify-between mb-4">
                          <span className={cn(
                            "px-3 py-1 text-[10px] tracking-[0.2em] font-bold rounded border",
                            event.color === 'primary' ? "border-primary text-primary" : "border-secondary text-secondary"
                          )}>
                            {event.tag}
                          </span>
                          {event.status === 'LIVE' && (
                            <span className="flex items-center gap-1.5 text-green-500 text-[10px] font-bold tracking-widest">
                              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              {event.status}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bebas text-3xl text-primary mb-2 tracking-tight group-hover:text-glow-gold transition-all">{event.title}</h3>
                        <p className="text-sm text-foreground/60 font-bold tracking-wide mb-4">{event.date} | {event.venue}</p>
                        <p className="text-foreground/80 mb-6 line-clamp-2">{event.desc}</p>
                        
                        {event.isFlagship ? (
                          <>
                            <CountdownTimer targetDate="2026-04-17T09:00:00" />
                            <div className="mt-8">
                              <Link to="/events/hack-i-lusion">
                                <Button className="w-full bg-primary hover:bg-primary/80 text-black font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-2 border-none">
                                  VIEW EVENT DETAILS <ExternalLink size={16} />
                                </Button>
                              </Link>
                            </div>
                          </>
                        ) : (
                          <div className="mt-8">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary hover:text-black font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                                  LEARN MORE <Info size={16} />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="glass-panel border-primary/30 text-foreground sm:max-w-[500px]">
                                <DialogHeader>
                                  <DialogTitle className="font-bebas text-4xl text-primary tracking-tight text-glow-gold mb-2">{event.title}</DialogTitle>
                                  <div className="flex items-center gap-4 mb-4">
                                    <span className={cn(
                                      "px-3 py-1 text-[10px] tracking-[0.2em] font-bold rounded border",
                                      event.color === 'primary' ? "border-primary text-primary" : "border-secondary text-secondary"
                                    )}>
                                      {event.tag}
                                    </span>
                                    <span className="text-xs font-bold text-foreground/60 tracking-wider uppercase">{event.status}</span>
                                  </div>
                                  <DialogDescription className="text-foreground/80 text-lg leading-relaxed font-rajdhani pt-4">
                                    <div className="space-y-6">
                                      <p>{event.desc}</p>
                                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                        <div>
                                          <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Date & Time</p>
                                          <p className="text-sm font-bold">{event.date}</p>
                                        </div>
                                        <div>
                                          <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Venue</p>
                                          <p className="text-sm font-bold">{event.venue}</p>
                                        </div>
                                      </div>
                                      <div className="pt-6">
                                        <Button className="w-full bg-primary hover:bg-primary/80 text-black font-bold tracking-[0.2em] border-none">
                                          REGISTER FOR EVENT
                                        </Button>
                                      </div>
                                    </div>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>
                          </div>
                        )}
                      </div>
                    </FadeUp>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section id="domains" className="py-20 md:py-32 relative bg-black/40">
          <div className="container px-4">
            <FadeUp>
              <div className="text-center mb-16 md:mb-20">
                <h2 className="font-bebas text-4xl sm:text-5xl md:text-7xl text-primary tracking-tight text-glow-gold uppercase">OUR DOMAINS</h2>
                <p className="text-foreground/60 tracking-[0.2em] md:tracking-[0.3em] font-bold mt-4 uppercase text-xs sm:text-sm">Excellence across all fronts</p>
              </div>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Web Development', desc: 'Code, Design, Deploy', icon: Code },
                { title: 'AI / Machine Learning', desc: 'Train. Predict. Evolve.', icon: Brain },
                { title: 'Cybersecurity', desc: 'Hack. Defend. Secure.', icon: Shield },
                { title: 'Robotics & IoT', desc: 'Build the future, wire by wire.', icon: Cpu },
                { title: 'App Development', desc: 'Mobile-first. User-obsessed.', icon: Smartphone },
                { title: 'Cloud & DevOps', desc: 'Scale without limits.', icon: Cloud },
              ].map((domain, i) => (
                <FadeUp key={domain.title} delay={i * 0.1}>
                  <div className="glass-panel p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="mb-8 relative preserve-3d">
                      <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <domain.icon size={48} className="text-primary relative z-10 group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out" />
                    </div>
                    <h3 className="font-bebas text-3xl text-primary mb-3 tracking-tight">{domain.title}</h3>
                    <p className="text-foreground/70 font-rajdhani font-medium">{domain.desc}</p>
                    
                    <div className="mt-8 flex justify-center perspective-1000">
                      <HexPrism />
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 md:py-32">
          <div className="container px-4">
            <FadeUp>
              <div className="text-center mb-16 md:mb-20">
                <h2 className="font-bebas text-4xl sm:text-5xl md:text-7xl text-primary tracking-tight text-glow-gold uppercase">CORE TEAM</h2>
                <p className="text-foreground/60 tracking-[0.2em] md:tracking-[0.3em] font-bold mt-4 uppercase text-xs sm:text-sm">The minds behind the Legion</p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { name: 'Alex Sterling', role: 'Technical Lead' },
                { name: 'Elena Vane', role: 'Operations Head' },
                { name: 'Marcus Thorne', role: 'Creative Director' },
                { name: 'Sarah Drake', role: 'PR & Outreach' },
              ].map((member, i) => (
                <FadeUp key={member.name} delay={i * 0.1}>
                  <div className="glass-panel p-1 rounded-2xl relative group overflow-hidden border-t-2 border-secondary/50">
                    <div className="p-8 bg-black/40 rounded-2xl h-full flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-6">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bebas text-2xl text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-1 tracking-wide">{member.name}</h3>
                      <p className="text-primary font-rajdhani tracking-widest text-sm font-bold uppercase">{member.role}</p>
                      
                      <div className="mt-8 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {[Github, Linkedin, Instagram].map((Icon, j) => (
                          <a key={j} href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all">
                            <Icon size={18} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="contact" className="py-20 md:py-32 relative">
          <div className="container max-w-2xl px-4">
            <FadeUp>
              <div className="text-center mb-10 md:mb-12">
                <GlitchText text="JOIN THE LEGION" className="text-4xl sm:text-5xl md:text-7xl font-bebas mb-4 md:mb-6" />
                <p className="text-foreground/70 text-base md:text-lg tracking-widest">Enlist today and shape the future of tech.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="glass-panel p-6 md:p-10 rounded-3xl border-primary/20">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">College Email</label>
                    <input type="email" className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">Department</label>
                      <input type="text" className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">Domain Interest</label>
                      <select className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground appearance-none">
                        <option value="">Select Domain</option>
                        <option value="web">Web Development</option>
                        <option value="ai">AI / ML</option>
                        <option value="cyber">Cybersecurity</option>
                        <option value="robotics">Robotics</option>
                        <option value="app">App Development</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">Why Aurum?</label>
                    <textarea rows={4} className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground resize-none" />
                  </div>
                  
                  <Button className="w-full h-16 bg-primary hover:bg-primary/80 text-black font-black tracking-[0.5em] text-xl shadow-[0_0_20px_rgba(240,182,22,0.3)] group overflow-hidden border-none mt-4">
                    <span className="relative z-10">ENLIST NOW</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  </Button>
                </form>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.4}>
              <div className="mt-16 flex justify-center gap-8">
                {[Github, Instagram, Linkedin, Disc].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(240,182,22,0.1)]">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-black border-t border-primary/20">
        <div className="container text-center">
          <div className="mb-8">
            <span className="font-cinzel text-3xl font-bold text-primary tracking-widest text-glow-gold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>AURUM</span>
            <p className="text-foreground/40 mt-2 font-rajdhani tracking-[0.2em] font-bold text-xs uppercase">Evolve with Tech. Lead with Excellence.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-xs tracking-[0.2em] uppercase font-bold text-foreground/60">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-primary transition-colors">{item.label}</a>
            ))}
          </div>
          
          <p className="text-foreground/30 text-[10px] tracking-widest">
            © 2025 Aurum – The Legion. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
