import { motion } from 'motion/react';
import { WaveBackground } from './wave-background';

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen py-20 px-4 bg-slate-950 overflow-hidden">
      <WaveBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-12 text-indigo-400">
            About Me
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6 text-lg text-slate-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            I am a student researcher with a strong interest in{' '}
            <span className="text-indigo-400 font-semibold">physics-inspired problem solving</span>,{' '}
            <span className="text-indigo-400 font-semibold">computational modeling</span>, and{' '}
            <span className="text-indigo-400 font-semibold">applied research for societal impact</span>. 
            My work spans environmental technology, biomedical sensing, and data-driven forecasting systems, 
            with a focus on low-cost, scalable solutions in resource-constrained settings.
          </p>

          <p>
            I have engaged in research fellowships and collaborations that emphasize independent inquiry, 
            mathematical reasoning, and interdisciplinary thinking. Alongside research, I contribute to 
            scientific communities through organizing hackathons, editing academic publications, and founding 
            student-led science initiatives.
          </p>

          <motion.p
            className="pt-4 text-indigo-300"
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            My academic goal is to pursue rigorous training in physics and engineering while continuing to 
            apply these principles to challenges in climate resilience, healthcare accessibility, and 
            sustainable development.
          </motion.p>
        </motion.div>

        {/* Context section */}
        <motion.div
          className="mt-12 p-6 bg-indigo-950/30 border border-indigo-500/20 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: 'rgba(99, 102, 241, 0.4)' }}
        >
          <h3 className="text-2xl text-indigo-400 mb-4">Context</h3>
          <p className="text-slate-300 leading-relaxed">
            Alongside academics and research, I have managed significant personal and family responsibilities, 
            including long daily commutes, caregiving, and household work. These experiences strengthened my 
            discipline, resilience, and ability to work effectively under constraints.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
