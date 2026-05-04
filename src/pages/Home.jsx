import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, GraduationCap, BrainCircuit, Compass, Users, Star, Zap, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 120 } }
};

const services = [
  {
    title: 'AI for All',
    img: '/images/ai-for-all.jpg',
    desc: 'Demystifying artificial intelligence for educators, HR professionals, and students — making cutting-edge AI tools accessible to everyone.',
    link: '/ai-for-all',
    color: 'electric',
    icon: <BrainCircuit className="w-6 h-6" />,
    gradient: 'from-electric/20 to-transparent',
  },
  {
    title: 'Career Guidance',
    img: '/images/career-guidance.jpg',
    desc: 'From crafting standout resumes to mastering technical interviews — strategic career coaching that opens doors to opportunities.',
    link: '/career-guidance',
    color: 'magenta',
    icon: <Compass className="w-6 h-6" />,
    gradient: 'from-magenta/20 to-transparent',
  },
  {
    title: 'Faculty Development',
    img: '/images/faculty-dev.jpg',
    desc: 'Comprehensive training programs that transform teaching methodologies, integrate modern pedagogy, and elevate institutional academic standards.',
    link: '/faculty-development',
    color: 'flame',
    icon: <GraduationCap className="w-6 h-6" />,
    gradient: 'from-flame/20 to-transparent',
  },
  {
    title: "Student Counselling",
    img: '/images/student-counselling.jpg',
    desc: 'Helping young minds discover their purpose through Ikigai, dream mapping, and personalized mentoring for academic and emotional growth.',
    link: '/students-counselling',
    color: 'violet',
    icon: <Users className="w-6 h-6" />,
    gradient: 'from-violet/20 to-transparent',
  }
];

const stats = [
  { number: '500+', label: 'Students Mentored', color: 'text-flame' },
  { number: '50+', label: 'Workshops Delivered', color: 'text-electric' },
  { number: '15+', label: 'Years of Impact', color: 'text-magenta' },
  { number: '25+', label: 'Partner Institutions', color: 'text-violet' },
];

const marqueeItems = [
  'Symbiosis International', 'IIT Mumbai', 'Tech Mahindra', 'Infosys Springboard',
  'Pune University', 'AICTE Promoted', 'Browser Stack', 'VIT Pune', 'COEP', 'MIT Pune'
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 sm:px-16 lg:px-24 overflow-hidden">
        {/* Hero background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 h-[130%]">
          <img
            src="/images/hero-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-[0.06]"
          />
        </motion.div>

        {/* Vibrant orb effects */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.08] blur-3xl" style={{ background: 'var(--color-flame)' }}></div>
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-3xl" style={{ background: 'var(--color-magenta)' }}></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] font-bold mb-8 text-text-secondary">
              <Sparkles className="w-3.5 h-3.5 text-flame" />
              <span className="hover-gradient-vibrant cursor-default inline-block transform transition-transform duration-300 hover:scale-110">Educator</span>
              <span className="opacity-50">·</span>
              <span className="hover-gradient-vibrant cursor-default inline-block transform transition-transform duration-300 hover:scale-110">Speaker</span>
              <span className="opacity-50">·</span>
              <span className="hover-gradient-vibrant cursor-default inline-block transform transition-transform duration-300 hover:scale-110">AI Evangelist</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] text-text-primary mb-8">
              Transforming{' '}
              <span className="gradient-text-vibrant">Careers</span>
              <br />& Shaping{' '}
              <span className="gradient-text-cool">Futures</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-text-secondary mb-10 max-w-lg leading-relaxed">
              With 15+ years of industry expertise, I help institutions modernize their teaching, professionals accelerate their careers, and students find their true calling.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <a
                href="#about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] font-bold text-white hover:scale-105 hover:shadow-xl hover:shadow-flame/25 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, var(--color-flame), var(--color-magenta))' }}
              >
                Discover My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:ganeshsoni123@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] font-bold text-text-primary border-2 border-text-primary/20 hover:border-flame hover:text-flame transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={fadeUp} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className={`font-display text-3xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-text-dim text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual - Image Card */}
          <motion.div variants={fadeUp} className="relative hidden lg:block">
            <div className="relative">
              {/* Gradient border glow */}
              <div className="absolute -inset-1 rounded-2xl opacity-30 blur-lg" style={{ background: 'linear-gradient(135deg, var(--color-flame), var(--color-magenta), var(--color-electric))' }}></div>

              <div className="relative rounded-2xl overflow-hidden border border-border">
                <img
                  src="/images/profile.jpg"
                  className="w-full h-[550px] object-cover"
                  alt="Ganesh Soni"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 glass rounded-xl p-5 flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--color-flame), var(--color-magenta))' }}>
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-text-primary font-display font-bold text-lg">15+ Years</div>
                    <div className="text-text-secondary text-xs">Shaping Academic & Corporate Excellence</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating accent cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass rounded-xl px-5 py-3 flex items-center gap-3"
            >
              <Zap className="w-5 h-5 text-amber" />
              <span className="text-sm font-semibold text-text-primary">AI Expert</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/3 -left-8 glass rounded-xl px-5 py-3 flex items-center gap-3"
            >
              <TrendingUp className="w-5 h-5 text-lime" />
              <span className="text-sm font-semibold text-text-primary">500+ Mentored</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <section className="py-8 border-y border-border relative overflow-hidden flex items-center">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-bg-dark to-transparent z-10"></div>
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-bg-dark to-transparent z-10"></div>
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-12 whitespace-nowrap px-8 items-center"
        >
          {[...marqueeItems, ...marqueeItems].map((name, i) => (
            <span key={i} className="flex items-center gap-8 font-display text-xl text-text-secondary hover:text-text-primary transition-colors duration-500">
              {name}
              <Star className="w-3 h-3 text-flame/50" />
            </span>
          ))}
        </motion.div>
      </section>

      {/* ===================== ABOUT / PHILOSOPHY ===================== */}
      <section id="about" className="py-24 md:py-32 px-6 sm:px-16 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-16 text-center flex flex-col items-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] font-bold mb-6 text-text-secondary">
              <Sparkles className="w-3.5 h-3.5 text-electric" />
              My Philosophy
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl lg:text-5xl font-bold text-text-primary">
              The Architecture of{' '}
              <span className="gradient-text-cool">Impact</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5">
            {/* Strategic Vision */}
            <motion.div variants={fadeUp} className="md:col-span-2 md:row-span-1 rounded-2xl p-10 md:p-12 flex flex-col justify-center relative overflow-hidden group border border-border shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(255,107,53,0.12), rgba(233,30,140,0.08))' }}>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.15] blur-3xl group-hover:opacity-[0.25] transition-opacity duration-700" style={{ background: 'var(--color-flame)' }}></div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">Strategic Vision</h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                I don't just solve today's challenges — I architect transformative systems for lasting impact. Whether it's integrating AI into academic curriculums or reshaping corporate training, every strategy is designed for sustainable growth and measurable outcomes.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl min-h-[250px] shadow-md">
              <img
                src="/images/speaking.jpg"
                alt="Speaking"
                className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 font-display font-bold text-lg text-white">
                Public Speaking
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl min-h-[250px] shadow-md">
              <img
                src="/images/mentorship.jpg"
                alt="Mentorship"
                className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 font-display font-bold text-lg text-white">
                Mentorship
              </div>
            </motion.div>

            {/* Core Philosophy Pillars */}
            <motion.div variants={fadeUp} className="md:col-span-2 md:row-span-1 rounded-2xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group border border-border shadow-sm bg-white">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.08] blur-3xl group-hover:opacity-[0.15] transition-opacity duration-700" style={{ background: 'var(--color-electric)' }}></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center text-electric mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-text-primary mb-2">Innovate</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Modernizing curriculums with cutting-edge AI and robust tech frameworks.</p>
                </div>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-flame/10 flex items-center justify-center text-flame mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-text-primary mb-2">Inspire</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Igniting passion in students through personalized, purpose-driven mentorship.</p>
                </div>
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-magenta/10 flex items-center justify-center text-magenta mb-4">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-text-primary mb-2">Impact</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Delivering measurable growth and strategic execution across institutions.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===================== SERVICES GRID ===================== */}
      <section className="py-24 md:py-32 px-6 sm:px-16 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="mb-16">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] font-bold mb-6 text-text-secondary">
              <Zap className="w-3.5 h-3.5 text-flame" />
              What I Do
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl lg:text-5xl font-bold text-text-primary">
              Core{' '}
              <span className="gradient-text-warm">Expertise</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div variants={fadeUp} key={i}>
                <Link
                  to={service.link}
                  className="block group rounded-2xl border border-border bg-white overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 h-full flex flex-col relative"
                >
                  {/* Image */}
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`}></div>

                    {/* Icon badge */}
                    <div
                      className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-white opacity-90"
                      style={{ background: `var(--color-${service.color})` }}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-bold text-text-primary mb-3">{service.title}</h3>
                    <p className="text-sm text-text-primary/80 leading-relaxed flex-grow">{service.desc}</p>
                    <div className={`mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-${service.color} group-hover:gap-3 transition-all duration-300`}>
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom color accent line */}
                  <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: `var(--color-${service.color})` }}></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
