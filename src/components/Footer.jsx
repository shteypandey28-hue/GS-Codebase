import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, ExternalLink, MessageCircle, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const services = [
    { label: 'Faculty Development', href: '/faculty-development' },
    { label: 'AI for All', href: '/ai-for-all' },
    { label: 'Career Guidance', href: '/career-guidance' },
    { label: 'Student Counselling', href: '/students-counselling' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Workshops', href: '#about' },
    { label: 'Contact', href: 'mailto:ganeshsoni123@gmail.com' },
  ];

  return (
    <footer className="relative z-10 border-t border-border overflow-hidden bg-bg-deep">
      {/* CTA Section — only on Home page */}
      {isHome && (
      <div className="relative py-28 px-6 sm:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ background: 'radial-gradient(ellipse at center, var(--color-flame), transparent 60%)' }}></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-flame text-xs uppercase tracking-widest font-bold mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Ready to Transform?
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Let's Build Something{' '}
            <span className="gradient-text-vibrant">Extraordinary</span>
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Whether it's upskilling your faculty, integrating AI, or guiding the next generation — every great transformation begins with a conversation.
          </p>
          <a
            href="mailto:ganeshsoni123@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-white hover:scale-105 hover:shadow-xl hover:shadow-flame/25 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, var(--color-flame), var(--color-magenta))' }}
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
      )}

      {/* Footer Grid */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-xl font-bold text-text-primary mb-4">
              <span className="gradient-text-vibrant">G</span>anesh
              <span className="gradient-text-vibrant">S</span>oni
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Empowering institutions, professionals, and dreamers to unlock their full potential through transformative education and guidance.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Globe className="w-4 h-4" />, href: 'https://www.linkedin.com/in/ganeshsoni/', color: 'hover:text-electric hover:border-electric/30 hover:bg-electric/10' },
                { icon: <ExternalLink className="w-4 h-4" />, href: 'https://www.instagram.com', color: 'hover:text-magenta hover:border-magenta/30 hover:bg-magenta/10' },
                { icon: <MessageCircle className="w-4 h-4" />, href: 'https://wa.me/918806414646', color: 'hover:text-lime hover:border-lime/30 hover:bg-lime/10' },
                { icon: <Mail className="w-4 h-4" />, href: 'mailto:ganeshsoni123@gmail.com', color: 'hover:text-flame hover:border-flame/30 hover:bg-flame/10' },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-dim transition-all duration-300 ${social.color}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-text-secondary hover:text-flame transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-flame/30 group-hover:bg-flame transition-colors duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-text-primary mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <a href={service.href} className="text-text-secondary hover:text-magenta transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-magenta/30 group-hover:bg-magenta transition-colors duration-300"></span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-text-primary mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-secondary">+91 88064 14646</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-flame mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-secondary">ganeshsoni123@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-magenta mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-secondary leading-relaxed">SGS Solutions, B2-601, Avon Vista, Balewadi, Pune</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-text-dim uppercase tracking-[0.15em]">
            &copy; {currentYear} Ganesh Soni. All rights reserved.
          </p>
          <p className="text-[11px] text-text-dim uppercase tracking-[0.15em]">
            Crafted with <span className="text-flame">❤</span> for Impact
          </p>
        </div>
      </div>
    </footer>
  );
}
