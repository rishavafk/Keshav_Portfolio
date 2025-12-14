import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
        </motion.div>

        <motion.p
          className="text-xl text-slate-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Interested in collaboration, research opportunities, or just want to chat about physics and engineering?
        </motion.p>

        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:shah.shav.ke@gmail.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            />
            <Mail className="w-5 h-5 relative z-10" />
            <span className="text-lg relative z-10">shah.shav.ke@gmail.com</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Decorative elements */}
        <div className="mt-20 flex justify-center gap-8">
          {[Mail].map((Icon, index) => (
            <motion.div
              key={index}
              className="p-4 bg-slate-900/50 border border-indigo-500/20 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.2,
                borderColor: 'rgba(99, 102, 241, 0.5)',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
              }}
            >
              <Icon className="w-6 h-6 text-indigo-400" />
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <motion.div
          className="mt-20 pt-8 border-t border-indigo-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-2">Keshav Shah</p>
          <p className="text-indigo-400/60">
            Physics · Engineering · Sustainability · Research
          </p>
        </motion.div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}