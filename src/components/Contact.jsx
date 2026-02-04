import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MessageSquare, Loader2, CheckCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    let timeout;
    if (status === 'success') {
      timeout = setTimeout(() => {
        setStatus('idle');
      }, 10000);
    }
    return () => clearTimeout(timeout);
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Frame */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                READY TO <br />
                <span className="text-accent">START?</span>
              </h2>
              <p className="text-xl text-foreground/50 mb-12 max-w-md leading-relaxed">
                Have a project in mind? Let's discuss how we can build something extraordinary for your brand.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-foreground/[0.03] border border-foreground/5 rounded-[2rem] group hover:border-accent/20 transition-all">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-accent uppercase tracking-widest mb-1">Email Me</p>
                    <p className="text-lg font-bold">hello@bonfacemurimi.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-6 bg-foreground/[0.03] border border-foreground/5 rounded-[2rem] group hover:border-accent/20 transition-all">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-accent uppercase tracking-widest mb-1">Let's Chat</p>
                    <p className="text-lg font-bold">+254 700 000 000</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative min-h-[600px] flex items-center"
          >
            {/* Cool Frame for Form */}
            <div className="absolute inset-0 border-2 border-accent/20 rounded-[3rem] translate-x-4 translate-y-4 -z-10" />
            
            <div className="w-full p-10 md:p-16 bg-[#0a0a0a] border border-foreground/10 rounded-[3rem] shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -20 }}
                    className="flex flex-col items-center text-center space-y-8 py-12"
                  >
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                        className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                      >
                        <CheckCircle className="w-12 h-12 text-white" />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-dashed border-accent/30 rounded-full"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-4xl font-black tracking-tighter">MESSAGE SENT!</h3>
                      <p className="text-foreground/50 text-lg max-w-sm">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-accent font-bold">
                      <Sparkles className="w-5 h-5" />
                      <span>Something big is coming</span>
                      <Sparkles className="w-5 h-5" />
                    </div>

                    <div className="w-full h-1 bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 10, ease: "linear" }}
                        className="h-full bg-accent"
                      />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20">
                      Returning to form in 10 seconds
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className="space-y-8" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-2">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Cooper"
                          className="w-full bg-foreground/[0.02] border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:bg-foreground/[0.04] transition-all text-lg font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-2">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full bg-foreground/[0.02] border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:bg-foreground/[0.04] transition-all text-lg font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-accent uppercase tracking-[0.3em] ml-2">Your Message</label>
                      <textarea 
                        rows={5} 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your vision..."
                        className="w-full bg-foreground/[0.02] border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent focus:bg-foreground/[0.04] transition-all text-lg font-medium resize-none"
                      />
                    </div>

                    <button 
                      disabled={status === 'loading'}
                      className="w-full py-6 bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-2xl transition-all flex items-center justify-center gap-4 text-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] group"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : status === 'error' ? (
                        'Failed to Send'
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
