import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-bg-dark relative overflow-hidden min-h-screen flex flex-col">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[30vh] -left-[20vw] w-[80vw] h-[80vh] rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, var(--color-flame), transparent 70%)' }}></div>
        <div className="absolute top-[40vh] -right-[20vw] w-[70vw] h-[70vh] rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, var(--color-magenta), transparent 70%)' }}></div>
        <div className="absolute -bottom-[20vh] left-[30vw] w-[60vw] h-[60vh] rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, var(--color-electric), transparent 70%)' }}></div>
      </div>

      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-grow flex flex-col relative z-[1]"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}
