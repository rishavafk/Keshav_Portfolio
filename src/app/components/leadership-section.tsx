import { motion } from 'motion/react';
import { Users, Code, BookOpen, Lightbulb } from 'lucide-react';

const leadership = [
  {
    title: 'Founder',
    organization: 'Sci-Fest Innovator, Voltanex',
    description: 'Founded an independent science club, hosted Integration Bees, facilitated advanced STEM discussions, and engineered a Smart Waste Disposal System.',
    icon: Lightbulb,
  },
  {
    title: 'Organizing Committee',
    organization: 'Cambridge Code League',
    description: 'Led volunteer coordination and logistics for a national A-Level hackathon involving multiple schools and participants.',
    icon: Code,
  },
  {
    title: 'Editor',
    organization: 'Annual Illuminea Magazine',
    description: 'Edited and verified over 20 articles and published a piece on Quantum Mechanics across multiple platforms.',
    icon: BookOpen,
  },
];

export function LeadershipSection() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-16 text-indigo-400">
            Leadership & Initiatives
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative p-6 bg-slate-950/50 border border-indigo-500/20 rounded-xl h-full backdrop-blur-sm"
                whileHover={{
                  y: -10,
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Icon container */}
                <motion.div
                  className="mb-6 p-4 bg-indigo-500/10 rounded-lg inline-block"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <item.icon className="w-8 h-8 text-indigo-400" />
                </motion.div>

                <h3 className="text-2xl text-indigo-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-indigo-400/80 mb-4">
                  {item.organization}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute -bottom-1 -right-1 w-16 h-16 border-b-2 border-r-2 border-indigo-500/30 rounded-br-xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                />
              </motion.div>

              {/* Connecting line to next item */}
              {index < leadership.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Interactive floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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
