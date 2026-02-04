import { motion } from 'framer-motion';
import { Layout, Server, Zap, Search, ShieldCheck, Smartphone } from 'lucide-react';

const services = [
  {
    title: "E-Commerce Solutions",
    description: "Building high-converting online stores with secure payments and inventory management.",
    features: ["Custom Cart Flow", "Stripe/PayPal", "Admin Dashboard"],
    icon: <Server className="w-10 h-10" />
  },
  {
    title: "SaaS Development",
    description: "Architecting multi-tenant platforms with complex role-based access and data analytics.",
    features: ["User Auth", "Subscription logic", "API Integrations"],
    icon: <Smartphone className="w-10 h-10" />
  },
  {
    title: "UI/UX Optimization",
    description: "Transforming slow, outdated interfaces into lightning-fast, modern digital experiences.",
    features: ["Core Web Vitals", "Accessibility", "A/B Testing"],
    icon: <Layout className="w-10 h-10" />
  },
  {
    title: "Enterprise Security",
    description: "Implementing rigorous security protocols to protect user data and business logic.",
    features: ["Encryption", "Penetration Testing", "Audit Logs"],
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: "SEO & Growth",
    description: "Strategizing technical SEO and performance marketing to scale your digital presence.",
    features: ["Semantic HTML", "Schema Markup", "Speed Ops"],
    icon: <Search className="w-10 h-10" />
  },
  {
    title: "Custom API Engine",
    description: "Developing high-performance backend engines to power your web and mobile apps.",
    features: ["Rate Limiting", "Webhooks", "Microservices"],
    icon: <Zap className="w-10 h-10" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            SERVICES <span className="text-accent">&</span> SOLUTIONS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/50 max-w-2xl mx-auto leading-relaxed"
          >
            Leveraging a decade of engineering experience at Iyonicorp to deliver premium digital products that drive growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 bg-foreground/[0.02] border border-foreground/5 rounded-[3rem] hover:bg-foreground/[0.05] hover:border-accent/20 transition-all duration-500 overflow-hidden"
            >
              {/* Abstract Frame Background */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
              
              <div className="mb-10 p-5 w-fit bg-accent/5 rounded-3xl group-hover:bg-accent/10 transition-colors text-accent">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 tracking-tight uppercase tracking-widest leading-none group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-foreground/50 leading-relaxed mb-10 font-medium">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_rgba(59,130,246,1)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Cool Frame Detail */}
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-right-2 border-accent/20 rounded-br-2xl group-hover:border-accent transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
