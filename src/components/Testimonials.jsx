import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechStart",
    content: "Working with Bonface was a game-changer for our platform. His attention to detail and technical expertise brought our vision to life faster than we imagined.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, Fashionly",
    content: "The e-commerce solution provided was not only visually stunning but also highly performant. Our conversion rate increased by 40% within the first month.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Marcus Johnson",
    role: "Founder, Digital Edge",
    content: "An absolute professional. Bonface has a unique ability to bridge the gap between complex technical requirements and intuitive user experiences.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-4 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase"
          >
            Client <span className="text-accent">Stories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/50 max-w-xl mx-auto"
          >
            Don't just take my word for it. Here's what my partners have to say about our collaboration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-8 bg-foreground/[0.02] border border-foreground/5 rounded-[3rem] group hover:bg-foreground/[0.04] transition-all"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black z-10 group-hover:scale-110 transition-transform">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <div className="mb-8 relative">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-2xl border border-accent/10 -rotate-6 group-hover:rotate-0 transition-transform duration-500 -z-10" />
              </div>

              <p className="text-lg text-foreground/80 mb-8 italic leading-relaxed">
                "{t.content}"
              </p>

              <div>
                <h4 className="font-bold text-xl tracking-tight">{t.name}</h4>
                <p className="text-accent text-sm font-medium uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
