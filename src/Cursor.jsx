import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over an interactive element
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') !== null ||
        e.target.closest('button') !== null
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 28, stiffness: 300, mass: 0.5 }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1.5,
      opacity: 0.5,
      transition: { type: 'spring', damping: 28, stiffness: 300, mass: 0.5 }
    }
  };

  const innerVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0,
      opacity: 0
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none rounded-full border-2 border-gold z-[9999]"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none rounded-full bg-navy z-[9999]"
        variants={innerVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'tween', duration: 0.05 }}
      />
    </>
  );
}
