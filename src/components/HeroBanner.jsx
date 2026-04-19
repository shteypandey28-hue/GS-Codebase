import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroBanner({ title, subtitle, image, accentColor = 'flame' }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const gradientMap = {
    flame: 'from-flame/30 to-magenta/10',
    magenta: 'from-magenta/30 to-violet/10',
    electric: 'from-electric/30 to-magenta/10',
    violet: 'from-violet/30 to-electric/10',
  };

  return (
    <header className="relative min-h-[65vh] flex items-center justify-center pt-[15vw] pb-[8vw] overflow-hidden bg-bg-dark">
      {/* Parallax Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 h-[130%]"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-bg-dark/60"></div>
        <div className={`absolute inset-0 bg-gradient-to-b ${gradientMap[accentColor] || gradientMap.flame}`}></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] font-bold mb-8 text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-flame animate-pulse"></span>
            {subtitle}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tight leading-[1.05]">
            {title}
            <span className="gradient-text-vibrant">.</span>
          </h1>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-dark to-transparent z-10"></div>
    </header>
  );
}
