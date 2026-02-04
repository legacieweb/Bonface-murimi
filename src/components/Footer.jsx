import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Github', icon: <Github size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'Linkedin', icon: <Linkedin size={20} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
  ];

  const quickLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#projects' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="bg-[#050505] pt-32 pb-12 px-4 border-t border-white/5 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-8">
            <h2 className="text-4xl font-black tracking-tighter">
              BONFACE <span className="text-accent">MURIMI.</span>
            </h2>
            <p className="text-foreground/50 max-w-sm text-lg leading-relaxed">
              Crafting exceptional digital experiences through innovative design and cutting-edge technology. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-500 hover:-translate-y-2 group"
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-lg font-medium text-foreground/40 hover:text-foreground transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-px bg-accent transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Get in Touch</h4>
            <div className="space-y-6">
              <a href="mailto:hello@bonfacemurimi.com" className="group block p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-accent/30 transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                    <Mail size={24} />
                  </div>
                  <ArrowUpRight className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-1">Email</p>
                <p className="text-xl font-bold">hello@bonfacemurimi.com</p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-foreground/30 text-sm font-medium">
            © {currentYear} Bonface Murimi. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-black uppercase tracking-widest text-foreground/30">
            <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
