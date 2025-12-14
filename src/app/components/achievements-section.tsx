import { motion } from 'motion/react';
import { Trophy, Medal, Award } from 'lucide-react';

const achievements = [
  {
    rank: '11/80 nationwide',
    title: 'Mathematics and Physics Olympiad',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    rank: 'Pre-Quarterfinalist',
    title: 'Undergraduate and Higher Secondary Science Olympiad',
    icon: Medal,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    rank: '9/150',
    title: 'Intra-School Physics Olympiad',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
  },
];

export function AchievementsSection() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-16 text-indigo-400">
            Academic Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative p-8 bg-slate-900/50 border border-indigo-500/20 rounded-2xl h-full"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Glowing background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <motion.div
                    className="mb-6 inline-block"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="w-12 h-12 text-indigo-400" />
                  </motion.div>

                  <motion.div
                    className={`text-4xl md:text-5xl bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-4`}
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
                  >
                    {achievement.rank}
                  </motion.div>

                  <p className="text-lg text-slate-300">
                    {achievement.title}
                  </p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-indigo-500/20 rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-indigo-500/20 rounded-bl-lg" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated connection particles */}
        <div className="relative mt-16 h-2">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-500 rounded-full"
              style={{
                left: `${(i / 20) * 100}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
