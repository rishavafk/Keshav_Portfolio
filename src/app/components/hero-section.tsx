import { motion } from 'motion/react';
import { OrbitAnimation } from './orbit-animation';
import { ChevronDown } from 'lucide-react';
import profileImage from "../../assets/9df61f9247ec1323a9241296e99f2b0e5c0a43af.png";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <OrbitAnimation />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={profileImage} 
            alt="Keshav Shah" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-indigo-500/30 shadow-2xl shadow-indigo-500/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl mb-6 text-indigo-100">
            Keshav Shah
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-indigo-200 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Building systems at the intersection of physics, computation, and real-world impact.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-indigo-300/80 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Exploring how theoretical insight becomes practical change.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {['Physics', 'Engineering', 'Sustainability', 'Research'].map((tag, index) => (
            <motion.span
              key={tag}
              className="px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-200"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
              transition={{ delay: index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.button
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-8 h-8 text-indigo-400" />
        </motion.button>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}