import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 24, stiffness: 130 } }
};

const accentColors = [
  { border: 'border-flame/40', bg: 'bg-flame/10', text: 'text-flame', dot: 'bg-flame' },
  { border: 'border-magenta/40', bg: 'bg-magenta/10', text: 'text-magenta', dot: 'bg-magenta' },
  { border: 'border-electric/40', bg: 'bg-electric/10', text: 'text-electric', dot: 'bg-electric' },
  { border: 'border-violet/40', bg: 'bg-violet/10', text: 'text-violet', dot: 'bg-violet' },
  { border: 'border-lime/40', bg: 'bg-lime/10', text: 'text-lime', dot: 'bg-lime' },
  { border: 'border-amber/40', bg: 'bg-amber/10', text: 'text-amber', dot: 'bg-amber' },
];

export default function FeedbackList({ items }) {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        {items.map((item, index) => {
          const accent = accentColors[index % accentColors.length];
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={itemVariants}
              className={`mb-12 pb-12 ${index !== items.length - 1 ? 'border-b border-border' : ''}`}
            >
              {/* Badge */}
              {item.badge && (
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-bold mb-6 border ${accent.border} ${accent.bg} ${accent.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`}></span>
                  {item.badge}
                </span>
              )}

              {/* Institution */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-6 leading-tight">
                {item.institution}
              </h3>

              {/* Feedback Title */}
              {item.feedbackTitle && (
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-dim mb-4 flex items-center gap-2">
                  <span className={`w-4 h-px ${accent.dot}`}></span>
                  {item.feedbackTitle}
                </p>
              )}

              {/* Points */}
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary text-base leading-relaxed">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${accent.text} opacity-70`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
