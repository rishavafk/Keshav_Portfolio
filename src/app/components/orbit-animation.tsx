import { motion } from 'motion/react';

export function OrbitAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {/* Central nucleus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-4 h-4 bg-indigo-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Orbiting electrons */}
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            className="relative"
            style={{
              width: `${150 + index * 80}px`,
              height: `${150 + index * 80}px`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10 + index * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      ))}

      {/* Orbit paths */}
      {[0, 1, 2].map((index) => (
        <div
          key={`path-${index}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-indigo-500/20 rounded-full"
          style={{
            width: `${150 + index * 80}px`,
            height: `${150 + index * 80}px`,
          }}
        />
      ))}
    </div>
  );
}
