import { motion } from 'framer-motion';
import { User, Target, Shield, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The "Cool Frame" for an image placeholder */}
            <div className="relative aspect-[4/5] max-w-md mx-auto group">
              <div className="absolute inset-0 border-2 border-accent/20 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-700" />
              <div className="absolute inset-0 border-2 border-foreground/10 rounded-[3rem] -rotate-6 group-hover:-rotate-12 transition-transform duration-700" />
              <div className="absolute inset-0 bg-foreground/5 rounded-[3rem] overflow-hidden backdrop-blur-sm border border-foreground/10 shadow-2xl">
                <img 
                  src="https://i.imgur.com/j1jFGWm.png" 
                  alt="Bonface Murimi"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                
                {/* Overlay card */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-2xl border border-foreground/10 rounded-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-black text-accent mb-1 uppercase tracking-[0.3em]">Chief Architect</p>
                  <p className="text-xl font-black tracking-tighter">BONFACE MURIMI</p>
                  <div className="mt-4 flex gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Open for Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-10 -left-10 grid grid-cols-6 gap-2 opacity-20">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-accent rounded-full" />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
              DRIVEN BY <br />
              <span className="text-accent">PURPOSE</span> & CODE
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/60 leading-relaxed mb-12">
              <p>
                My journey into the world of software engineering began with a simple curiosity: 
                <span className="text-foreground font-semibold"> how can we make the web faster, safer, and more intuitive?</span> 
                Today, as a lead developer at <span className="text-accent font-bold">Iyonicorp</span>, I answer that question daily.
              </p>
              <p>
                I specialize in architecting complex systems that don't just work—they excel. 
                From building secure e-commerce engines to crafting lightning-fast SaaS dashboards, 
                my approach is always user-centric and performance-driven.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-foreground/[0.03] border border-foreground/5 rounded-[2rem] hover:border-accent/20 transition-colors">
                <Target className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2 tracking-tight">Precision</h3>
                <p className="text-sm text-foreground/50">Every line of code is written with intent and optimized for peak performance.</p>
              </div>
              <div className="p-6 bg-foreground/[0.03] border border-foreground/5 rounded-[2rem] hover:border-accent/20 transition-colors">
                <Shield className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2 tracking-tight">Security</h3>
                <p className="text-sm text-foreground/50">Implementing enterprise-grade security standards in every digital solution.</p>
              </div>
              <div className="p-6 bg-foreground/[0.03] border border-foreground/5 rounded-[2rem] hover:border-accent/20 transition-colors">
                <Rocket className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2 tracking-tight">Scalability</h3>
                <p className="text-sm text-foreground/50">Architecting systems that grow seamlessly with your business needs.</p>
              </div>
              <div className="p-6 bg-accent/5 border border-accent/10 rounded-[2rem]">
                <p className="text-accent font-black italic text-lg leading-tight">
                  "Building the future of the web, one component at a time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
