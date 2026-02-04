import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Globe, Smartphone, Monitor, Laptop, RefreshCw } from 'lucide-react';

const ProjectPreview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const url = searchParams.get('url') || 'https://iyonicorp.com';
  const title = searchParams.get('title') || 'Project Preview';
  
  const [view, setView] = useState('desktop');
  const [loading, setLoading] = useState(true);

  const viewWidths = {
    desktop: '100%',
    tablet: '768px',
    mobile: '375px',
  };

  return (
    <div className="h-screen bg-[#050505] text-white flex flex-col overflow-hidden">
      {/* Header Bar */}
      <nav className="h-20 px-8 border-b border-white/5 flex items-center justify-between bg-black/50 backdrop-blur-xl shrink-0 z-50">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-accent hover:border-accent transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase">{title}</h1>
            <div className="flex items-center gap-2 text-white/40 text-[10px] font-black tracking-widest uppercase">
              <Globe className="w-3 h-3" />
              {new URL(url).hostname}
            </div>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="hidden md:flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-[1.5rem]">
          {[
            { id: 'desktop', icon: <Monitor size={18} /> },
            { id: 'tablet', icon: <Laptop size={18} /> },
            { id: 'mobile', icon: <Smartphone size={18} /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`p-3 rounded-2xl transition-all ${
                view === item.id 
                  ? 'bg-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white text-black font-black rounded-2xl hover:bg-accent hover:text-white transition-all text-xs uppercase tracking-widest group"
          >
            Visit Live
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Main Preview Area */}
      <main className="flex-1 bg-[#0a0a0a] p-4 md:p-8 flex justify-center items-center overflow-hidden">
        <motion.div
          animate={{ width: viewWidths[view] }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="h-full relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border-[8px] border-white/5"
        >
          {loading && (
            <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-accent animate-pulse" />
                </div>
              </div>
              <p className="text-accent font-black tracking-widest uppercase text-[10px] animate-pulse">Loading Live Experience</p>
            </div>
          )}
          
          <iframe 
            src={url} 
            className="w-full h-full"
            onLoad={() => setLoading(false)}
            title={title}
          />
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectPreview;
