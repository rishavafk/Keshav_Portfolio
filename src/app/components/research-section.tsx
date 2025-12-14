import { motion } from 'motion/react';
import { Microscope, Brain, BarChart3, FileText } from 'lucide-react';
import { VideoModal } from './video-modal';

import neonatalVideo from "../../assets/WhatsApp Video 2025-12-14 at 5.01.31 PM.mp4";
import researchPdf from "../../assets/final.pdf";


const researchItems = [
  {
    title: 'REYES Fellowship',
    subtitle: 'Remote Experience for Young Engineers and Scientists',
    role: 'Research Fellow',
    description:
      'Applied Python-based computational modeling and data analysis to scientific problems. Developed research intuition, experimental design skills, and experience translating theory into applied insights.',
    skills: ['Python', 'Data Analysis', 'Computational Modeling', 'Research Methods'],
    icon: Brain,
  },
  {
    title: 'Volunteer Research Assistant — Neonatal Healthcare',
    subtitle: 'Supervisor: Dr. Rajesh Dudani',
    role: 'Hope for Better Future Foundation (501(c), USA)',
    description:
      'Contributing to the development of a low-cost technology to monitor endotracheal tube tip position in real time for newborns. The project targets neonatal care in resource-limited settings, emphasizing affordability, reliability, and clinical usability.',
    skills: ['Medical Technology', 'Hardware Development', 'Real-time Monitoring'],
    icon: Microscope,
    note:
      'Real-time monitoring technology for endotracheal tube positioning in neonatal care, designed for resource-limited clinical environments.',
    videoSrc: neonatalVideo,
  },
  {
    title: 'Research Contributor',
    subtitle: 'Netaji Subhas University of Technology (NSUT)',
    role: 'Differential Evolution–Optimized Fuzzy Combination Forecasting System (E-FCFS)',
    description:
      'Worked on data preprocessing, sorting, and visualization. Used Matplotlib to compare predictive outputs across ensemble models for air-quality forecasting.',
    skills: ['Python', 'Matplotlib', 'Environmental Modeling', 'Data Visualization'],
    icon: BarChart3,
    pdfSrc: researchPdf,
  },
];


export function ResearchSection() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-16 text-indigo-400">
            Research Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {researchItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-6 md:p-8 bg-slate-950/50 border border-indigo-500/20 rounded-lg backdrop-blur-sm hover:bg-slate-950/70 transition-all"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'rgba(99, 102, 241, 0.4)',
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-indigo-500/20 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-6 h-6 text-indigo-400" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl text-indigo-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-indigo-400/80 mb-1">{item.subtitle}</p>
                  <p className="text-slate-400 text-sm mb-4">{item.role}</p>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.note && (
                    <p className="text-sm text-indigo-300/70 italic mb-4 pl-4 border-l-2 border-indigo-500/30">
                      {item.note}
                    </p>
                  )}

                  {item.videoSrc && (
                    <div className="mb-4">
                      <VideoModal videoSrc={item.videoSrc} title={item.title} />
                    </div>
                  )}

                  {item.pdfSrc && (
                    <div className="mb-4">
                      <motion.a
                        href={item.pdfSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-lg text-indigo-300 hover:bg-indigo-500/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FileText className="w-4 h-4" />
                        <span>View Research Paper</span>
                      </motion.a>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-sm text-indigo-300"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(99, 102, 241, 0.2)',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
