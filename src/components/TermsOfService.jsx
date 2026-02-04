import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsOfService = () => {
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
              Terms of <span className="text-accent">Service</span>
            </h1>
            <p className="text-foreground/60 text-lg mb-16 max-w-2xl">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-12 text-foreground/70 leading-relaxed">
              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">2. Services</h2>
                <p>
                  Bonface Murimi provides web development, design, and digital services. The services we provide may vary from time to time and are subject to the terms and conditions outlined in this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">3. Intellectual Property</h2>
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Bonface Murimi and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit permission.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">4. User Conduct</h2>
                <p>When using this website, you agree to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use the website for any illegal or unauthorized purpose</li>
                  <li>Not transmit any harmful or malicious content</li>
                  <li>Respect the rights of others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
                <p>
                  Bonface Murimi shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of or inability to use this website or our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">6. Disclaimer of Warranties</h2>
                <p>
                  The website and services are provided "as is" and "as available" without any warranties of any kind, express or implied. We do not warrant that the website will be error-free or uninterrupted.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">7. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Bonface Murimi from any claims, losses, liabilities, damages, costs, or expenses arising from your use of the website or violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">8. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these terms at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the website constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">10. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
