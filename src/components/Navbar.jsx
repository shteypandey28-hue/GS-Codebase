import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const expertiseLinks = [
    { to: '/faculty-development', label: 'Faculty Development' },
    { to: '/ai-for-all', label: 'AI for ALL' },
    { to: '/career-guidance', label: 'Career Guidance' },
    { to: '/students-counselling', label: 'Student Counselling' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled
          ? 'py-3 px-6 md:px-10 backdrop-blur-2xl bg-bg-dark/90 border-border shadow-lg shadow-black/5'
          : 'py-5 px-6 md:px-10 bg-transparent border-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-text-primary hover:opacity-80 transition-opacity flex items-center gap-1">
          <span className="gradient-text-vibrant">G</span>anesh
          <span className="gradient-text-vibrant">S</span>oni
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-sans text-[11px] tracking-[0.15em] uppercase font-semibold text-text-secondary">
          <Link
            to="/"
            className={`hover:text-flame transition-colors duration-300 ${
              location.pathname === '/' ? 'text-flame' : ''
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span
              className={`cursor-pointer hover:text-magenta transition-colors duration-300 ${
                location.pathname !== '/' ? 'text-magenta' : ''
              }`}
            >
              Expertise ▾
            </span>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-4 pt-3 min-w-[260px]"
                >
                  <div className="glass rounded-xl overflow-hidden shadow-2xl shadow-black/10">
                    {expertiseLinks.map((link, i) => {
                      const colors = [
                        'hover:text-flame hover:bg-flame/5 hover:border-l-flame',
                        'hover:text-electric hover:bg-electric/5 hover:border-l-electric',
                        'hover:text-magenta hover:bg-magenta/5 hover:border-l-magenta',
                        'hover:text-violet hover:bg-violet/5 hover:border-l-violet',
                      ];
                      return (
                        <Link
                          key={i}
                          to={link.to}
                          className={`block px-6 py-4 text-text-secondary border-l-3 border-l-transparent transition-all duration-200 ${
                            i > 0 ? 'border-t border-black/5' : ''
                          } ${location.pathname === link.to ? 'text-flame bg-flame/5 border-l-flame' : ''} ${colors[i]}`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#about" className="hover:text-electric transition-colors duration-300">
            About
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:ganeshsoni123@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-flame/30"
          style={{
            background: 'linear-gradient(135deg, var(--color-flame), var(--color-magenta))',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></span>
          Let's Connect
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-primary p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="glass rounded-xl mt-4 p-6 flex flex-col gap-4">
              <Link to="/" className="text-text-primary font-semibold text-sm uppercase tracking-wider hover:text-flame transition-colors">Home</Link>
              {expertiseLinks.map((link, i) => (
                <Link key={i} to={link.to} className="text-text-secondary text-sm uppercase tracking-wider hover:text-magenta transition-colors pl-4 border-l-2 border-border">
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:ganeshsoni123@gmail.com"
                className="mt-4 text-center py-3 rounded-full text-xs uppercase tracking-widest font-bold text-white"
                style={{ background: 'linear-gradient(135deg, var(--color-flame), var(--color-magenta))' }}
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
