import { motion } from 'motion/react';
import { BookOpen, Sparkles, ExternalLink } from 'lucide-react';

export function WritingSection() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-purple-950/30 via-slate-900 to-indigo-950/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-16 text-indigo-400">
            Writing & Scientific Curiosity
          </h2>
        </motion.div>

        <motion.div
          className="relative p-8 md:p-12 bg-slate-950/50 border border-purple-500/20 rounded-2xl overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            borderColor: 'rgba(168, 85, 247, 0.4)',
            scale: 1.02,
          }}
        >
          {/* Animated particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              className="flex items-center gap-4 mb-6"
              whileHover={{ x: 10 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-10 h-10 text-purple-400" />
                </motion.div>
              </div>
              <BookOpen className="w-10 h-10 text-purple-400" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl text-purple-300 mb-4">
              The Universe's Magic Trick That Shapes Reality
            </h3>
            <p className="text-xl text-purple-400/80 mb-6">
              A Walk Through Quantum Physics
            </p>

            <motion.p
              className="text-lg text-slate-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A conceptual exploration of quantum mechanics written for a general audience, 
              blending physical intuition with mathematical curiosity.
            </motion.p>

            <motion.a
              href="https://medium.com/@shah.shav.ke/the-universes-magic-trick-that-shapes-reality-a-walk-through-quantum-physics-204d0000657f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Read on Medium</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>

            {/* Quantum wave visualization */}
            <div className="mt-8 flex gap-1">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-purple-500/20 rounded-t"
                  animate={{
                    height: [
                      `${20 + Math.sin(i * 0.2) * 15}px`,
                      `${20 + Math.sin(i * 0.2 + Math.PI) * 15}px`,
                      `${20 + Math.sin(i * 0.2) * 15}px`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.02,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}