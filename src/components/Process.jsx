import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Discovery",
    description: "Deep dive into your requirements, target audience, and business goals to create a strategic roadmap.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Design",
    description: "Crafting high-fidelity UI/UX designs that align with your brand identity and conversion goals.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: "Development",
    description: "Engineering your solution using the latest tech stack with clean, performant, and scalable code.",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Launch",
    description: "Rigorous testing and seamless deployment, followed by continuous monitoring and optimization.",
    icon: <Rocket className="w-6 h-6" />
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">My <span className="text-accent">Process</span></h2>
          <p className="text-xl text-foreground/50 max-w-xl mx-auto">From concept to deployment, I follow a systematic approach to ensure project success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 bg-foreground/[0.02] border border-foreground/5 rounded-[2.5rem] group hover:bg-foreground/[0.04] transition-all"
            >
              <div className="mb-6 w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="absolute top-8 right-8 text-4xl font-black text-foreground/5">{idx + 1}</div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase tracking-widest">{step.title}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed font-medium">{step.description}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-foreground/10 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
