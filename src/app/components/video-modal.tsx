import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  videoSrc: string;
  title: string;
}

export function VideoModal({ videoSrc, title }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-lg text-indigo-300 hover:bg-indigo-500/30 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Play className="w-4 h-4" />
        <span>Watch Research Demo</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-slate-900 rounded-lg overflow-hidden border border-indigo-500/30"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-indigo-500/20">
                <h3 className="text-xl text-indigo-300">{title}</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-indigo-400" />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <video
                  controls
                  className="w-full h-full"
                  src={videoSrc}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
