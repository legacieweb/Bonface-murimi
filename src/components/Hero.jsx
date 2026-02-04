import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe, Sparkles, Terminal, Cpu, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#050505]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-semibold tracking-wide text-accent uppercase bg-accent/10 rounded-xl border border-accent/20">
                <Sparkles className="w-4 h-4" />
                Available for new projects
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                DESIGNING <br />
                <span className="text-accent">DIGITAL</span> <br />
                EXPERIENCES
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/50 max-w-2xl mb-12 leading-relaxed">
                Hi, I'm <span className="text-foreground font-bold">Bonface Murimi</span>. I bridge the gap between complex backend logic and stunning frontend interfaces. 
                Engineering premium solutions at <span className="text-accent font-semibold">Iyonicorp</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto px-10 py-5 bg-accent hover:bg-accent/90 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 group text-lg shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                  <a 
                    href="#projects" 
                    className="flex-1 sm:flex-none px-10 py-5 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-sm"
                  >
                    Explore Work
                  </a>
                  <a 
                    href="/resume.pdf" 
                    download
                    className="flex-1 sm:flex-none px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-sm group"
                  >
                    <FileText className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 flex flex-wrap gap-12"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-foreground/5 rounded-xl border border-foreground/10 text-accent">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black">50+</div>
                  <div className="text-sm text-foreground/40 font-medium">Projects Built</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-foreground/5 rounded-xl border border-foreground/10 text-accent">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black">100%</div>
                  <div className="text-sm text-foreground/40 font-medium">Uptime Guaranteed</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-foreground/5 rounded-xl border border-foreground/10 text-accent">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black">20+</div>
                  <div className="text-sm text-foreground/40 font-medium">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square"
            >
              {/* Cool Frames */}
              <div className="absolute inset-0 border-2 border-accent/30 rounded-[3rem] translate-x-6 translate-y-6" />
              <div className="absolute inset-0 border-2 border-foreground/10 rounded-[3rem] -translate-x-6 -translate-y-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-[3rem] backdrop-blur-[2px]" />
              
              <div className="absolute inset-4 overflow-hidden rounded-[2.5rem] bg-[#111] border border-foreground/10 flex items-center justify-center group">
                <Code2 className="w-32 h-32 text-accent/20 group-hover:scale-110 group-hover:text-accent/40 transition-all duration-700" />
                
                {/* Floating Tech Badges */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-4 bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-2xl"
                >
                  <span className="text-xs font-black tracking-widest text-accent uppercase">React Expert</span>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-12 left-8 p-4 bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-2xl"
                >
                  <span className="text-xs font-black tracking-widest text-accent uppercase">Node.js Master</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
