import { motion } from 'motion/react';
import { Leaf, TrendingUp, Shield, Users, ExternalLink } from 'lucide-react';

const features = [
  { name: 'Secure donation system', icon: Shield },
  { name: 'Transparent impact tracking', icon: TrendingUp },
  { name: 'Interactive dashboards', icon: BarChart3 },
  { name: 'Community-driven environmental action', icon: Users },
];

import { BarChart3 } from 'lucide-react';

export function ProjectsSection() {
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
            Selected Projects
          </h2>
        </motion.div>

        <motion.div
          className="relative p-8 md:p-12 bg-gradient-to-br from-green-950/30 to-indigo-950/30 border border-green-500/20 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: 'rgba(34, 197, 94, 0.4)' }}
        >
          {/* Animated background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <Leaf className="w-12 h-12 text-green-400" />
              </motion.div>
              <div>
                <h3 className="text-3xl md:text-4xl text-green-400">
                  Green Nepal
                </h3>
                <p className="text-green-300/70">Rotary Club of Kasthamandap Initiative</p>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-slate-300 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Green Nepal is a comprehensive web platform supporting environmental conservation and 
              reforestation initiatives in Nepal. The platform enables secure donations, real-time 
              tracking of tree-planting activities, environmental impact metrics, and community engagement.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-950/50 rounded-lg border border-green-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderColor: 'rgba(34, 197, 94, 0.3)',
                  }}
                >
                  <feature.icon className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">{feature.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://hariyoban.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Visit Green Nepal</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Animated connection lines */}
        <div className="relative mt-8 flex justify-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-16 bg-gradient-to-b from-green-500/20 to-transparent mx-4"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}