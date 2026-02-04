import { motion } from 'framer-motion';
import { Monitor, Database, Terminal, Layers, Globe, Shield } from 'lucide-react';

const skills = [
  { 
    category: "Frontend Architecture", 
    icon: <Monitor className="w-8 h-8" />,
    description: "Building immersive, lightning-fast user interfaces with modern React patterns.",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  { 
    category: "Backend Systems", 
    icon: <Database className="w-8 h-8" />,
    description: "Engineering robust, scalable server-side solutions and API architectures.",
    items: [
      { name: "Node.js / Express", level: 92 },
      { name: "PostgreSQL / MongoDB", level: 88 },
      { name: "REST / GraphQL", level: 90 },
      { name: "Redis / Caching", level: 80 }
    ]
  },
  { 
    category: "DevOps & Security", 
    icon: <Shield className="w-8 h-8" />,
    description: "Ensuring high availability, automated deployments, and enterprise security.",
    items: [
      { name: "Docker / Kubernetes", level: 75 },
      { name: "CI/CD (GitHub Actions)", level: 85 },
      { name: "AWS / Google Cloud", level: 80 },
      { name: "JWT / OAuth / IAM", level: 92 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none">
              TECHNICAL <br />
              <span className="text-accent">EXPERTISE</span>
            </h2>
            <p className="text-xl text-foreground/50 leading-relaxed max-w-md">
              A comprehensive breakdown of my digital toolkit. I focus on technologies that prioritize performance, security, and developer experience.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-8 bg-foreground/[0.03] border border-foreground/5 rounded-[2.5rem]">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Full Stack</h4>
              <p className="text-sm text-foreground/40 font-medium">End-to-end development capability from DB to UI.</p>
            </div>
            <div className="p-8 bg-foreground/[0.03] border border-foreground/5 rounded-[2.5rem]">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Scalable</h4>
              <p className="text-sm text-foreground/40 font-medium">Architecting systems ready for millions of users.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-foreground/[0.02] border border-foreground/5 rounded-[3rem] hover:bg-foreground/[0.04] transition-all duration-500"
            >
              <div className="mb-10 p-4 w-fit bg-accent/5 rounded-[1.5rem] group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500 text-accent">
                {group.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight uppercase tracking-widest">{group.category}</h3>
              <p className="text-foreground/50 text-sm mb-10 leading-relaxed font-medium">
                {group.description}
              </p>
              
              <div className="space-y-8">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold uppercase tracking-widest opacity-70">{skill.name}</span>
                      <span className="text-xs font-black text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
