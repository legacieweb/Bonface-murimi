import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#050505] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-foreground/60 text-lg mb-16 max-w-2xl">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-12 text-foreground/70 leading-relaxed">
              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">1. Introduction</h2>
                <p>
                  Welcome to Bonface Murimi's website. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Personal identification information (Name, email address, phone number, etc.)</li>
                  <li>Usage data (Pages visited, time spent on the site, browser type, etc.)</li>
                  <li>Communication preferences</li>
                  <li>Technical data (IP address, device type, operating system, etc.)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide support</li>
                  <li>Send you marketing communications</li>
                  <li>Analyze usage patterns to optimize our website</li>
                  <li>Protect against fraudulent or unauthorized activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">4. Information Sharing</h2>
                <p>
                  We may share your information with third-party service providers who assist us in operating our website and providing our services. We do not sell, trade, or rent your personal information to third parties without your consent.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">6. Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">7. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2 text-white font-medium">
                  Email: hello@bonfacemurimi.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
