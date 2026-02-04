import { useState, useRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowRight, ArrowUpRight, Sparkles, MousePointer2 } from 'lucide-react';

const categories = ["All", "E-commerce", "SaaS", "Fintech", "Service Platform"];

const getScreenshotUrl = (url) => {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
};

const projects = [
  {
    title: "EssayMe",
    description: "A comprehensive academic writing platform connecting students with expert writers. Features include real-time chat, order management, and secure payment processing.",
    longDescription: "EssayMe is a full-stack solution designed for scalability and user trust. It handles complex workflows from order placement to delivery, including automated notifications and feedback loops.",
    tags: ["React", "Node.js", "MongoDB", "Auth"],
    link: "https://essayme.iyonicorp.com",
    github: "#",
    featured: true,
    category: "Service Platform",
  },
  {
    title: "TechStart",
    description: "High-performance e-commerce solution for tech startups with 300% sales growth optimization.",
    tags: ["React", "Tailwind", "Node.js"],
    link: "https://phones.iyonicorp.com",
    github: "#",
    featured: false,
    category: "E-commerce",
  },
  {
    title: "Boutique Fashion",
    description: "A luxury fashion and lifestyle platform focused on brand essence and conversion optimization.",
    tags: ["React", "Motion", "Tailwind"],
    link: "https://fashion.iyonicorp.com",
    github: "#",
    featured: false,
    category: "Fashion & Lifestyle",
  },
  {
    title: "Digital Solutions",
    description: "Professional services platform with integrated booking systems and client portals.",
    tags: ["React", "API", "Database"],
    link: "https://marketing.iyonicorp.com",
    github: "#",
    featured: false,
    category: "Professional Services",
  },
  {
    title: "IyonicPay",
    description: "Enterprise-grade payment processing system with advanced security and encryption.",
    tags: ["Security", "Node.js", "API"],
    link: "https://pay.iyonicorp.com",
    github: "#",
    featured: false,
    category: "Fintech",
  },
  {
    title: "SmartBook",
    description: "Intelligent booking system with automated workflows and real-time scheduling.",
    tags: ["React", "Calendar", "Auth"],
    link: "https://wimson.iyonicorp.com",
    github: "#",
    featured: false,
    category: "SaaS",
  },
  {
    title: "Tranquil Spa",
    description: "A comprehensive wellness booking platform connecting clients with expert therapists. Features include real-time chat, appointment management, and secure payment processing.",
    longDescription: "tranquil Spa is a full-stack solution designed for scalability and client trust. It handles complex workflows from booking to service delivery, including automated reminders and feedback loops.",
    tags: ["Html5", "tailwind", "Node.js", "MongoDB", "Auth"],
    link: "https://tranquil.iyonicorp.com",
    github: "#",
    featured: true,
    category: "Service Platform",
  },
 {
  title: "elegantmen",
  description: "Modern e-commerce platform for sneakers and footwear with seamless browsing and checkout.",
  tags: ["React", "Next.js", "Stripe"],
  link: "https://elegantmen.iyonicorp.com",
  github: "#",
  featured: false,
  category: "E-commerce",
},
{
  title: "Cannela",
  description: "Specialty coffee website showcasing artisanal blends, subscriptions, and café locations.",
  tags: ["React", "Node.js", "MongoDB"],
  link: "https://beanhaven.iyonicorp.com",
  github: "#",
  featured: true,
  category: "E-commerce",
}

];

const ProjectCard = forwardRef(({ project, idx, handleImageError }, ref) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col h-full perspective-1000 cursor-pointer"
    >
      <Link 
        to={`/preview?url=${encodeURIComponent(project.link)}&title=${encodeURIComponent(project.title)}`}
        className="flex flex-col h-full"
      >
        {/* 3D Content Container */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative flex flex-col h-full"
        >
          {/* Modern Image Frame with crazy borders */}
          <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-[3rem] bg-[#0a0a0a] p-3 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:shadow-accent/20 group-hover:border-accent/30">
            
            {/* Animated Glow Trail */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.3),transparent)] animate-[spin_4s_linear_infinity]" />
            </div>

            <div className="absolute inset-3 overflow-hidden rounded-[2.2rem] z-10 bg-[#050505]">
              <motion.img 
                src={getScreenshotUrl(project.link)} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                loading="lazy"
                onError={handleImageError}
              />
              
              {/* Liquid Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-transparent to-purple-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Floating Category Tag */}
            <div 
              style={{ transform: "translateZ(80px)" }}
              className="absolute -top-4 -right-4 px-6 py-2 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-0"
            >
              {project.category}
            </div>
          </div>

          {/* Info with 3D Offset */}
          <div 
            style={{ transform: "translateZ(30px)" }}
            className="flex flex-col flex-grow px-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-white via-white to-white/20 bg-clip-text text-transparent group-hover:to-accent transition-all duration-700">
                {project.title}
              </h3>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>

            <p className="text-foreground/40 text-sm leading-relaxed mb-8 line-clamp-2 group-hover:text-foreground/70 transition-colors">
              {project.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 flex items-center px-6 bg-white/5 border border-white/10 rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-500 overflow-hidden relative">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10">Live Preview</span>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ type: "tween" }}
                />
              </div>
              <style dangerouslySetInnerHTML={{ __html: `.group:hover .h-12 { background-color: #3b82f6; color: white; border-color: #3b82f6; }` }} />
            </div>

            <div className="mt-auto flex flex-wrap gap-4 pt-6 border-t border-white/5">
              {project.tags.slice(0, 3).map((tag, tIdx) => (
                <motion.span 
                  key={tag}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: tIdx * 0.1 }}
                  className="text-[9px] font-black text-accent/50 uppercase tracking-[0.2em]"
                >
                  // {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop";
    e.target.className = "w-full h-full object-cover opacity-20 grayscale";
  };

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeTab));

  return (
    <section id="projects" className="py-40 px-4 bg-[#050505] relative overflow-hidden">
      {/* Crazy Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] text-[20vw] font-black text-white/[0.02] leading-none select-none italic">
          CREATIVE<br />ENGINEERING
        </div>
        <div className="absolute bottom-[-10%] right-[-10%] text-[20vw] font-black text-accent/[0.03] leading-none select-none">
          SELECTED<br />WORKS
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="relative">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -left-12 top-0 text-accent/20 hidden xl:block"
            >
              <MousePointer2 size={120} className="rotate-12 animate-pulse" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 text-[11px] font-black tracking-[0.3em] text-accent uppercase bg-accent/5 rounded-full border border-accent/10"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
              Selected Portfolio
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, skewX: 20 }}
              whileInView={{ opacity: 1, skewX: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.8] relative"
            >
              SELECTED<br />
              <span className="text-transparent stroke-text italic" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>WORK</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-wrap gap-3 bg-white/5 p-3 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-700 relative overflow-hidden group ${
                  activeTab === cat ? "text-black" : "text-white/40 hover:text-white"
                }`}
              >
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTabCrazy"
                    className="absolute inset-0 bg-accent rounded-full -z-10 shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                idx={idx} 
                handleImageError={handleImageError} 
              />
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 flex flex-col items-center gap-8"
        >
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent to-transparent" />
          <a 
            href="https://iyonicorp.com" 
            className="group relative px-16 py-8 bg-white text-black font-black rounded-full hover:bg-accent hover:text-white transition-all duration-700 uppercase tracking-[0.3em] text-xs shadow-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Full Archive
            <div className="absolute inset-0 border-2 border-white rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
          </a>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .stroke-text { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
      ` }} />
    </section>
  );
};

export default Projects;

