'use client';

import { motion, MotionConfig } from 'framer-motion';

const Gestures = () => {
  return (
    <div className="grid place-content-center h-dvh gap-3">
      <MotionConfig transition={{ duration: 0.125, ease: 'easeInOut' }}>
        <motion.button
          className="bg-violet-500 text-white text-2xl border-none rounded-lg p-4 cursor-pointer"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9, rotate: '2.5deg' }}
        >
          Click Me
        </motion.button>
        <motion.button
          className="bg-red-500 text-white text-2xl border-none rounded-lg p-4 cursor-pointer"
          whileHover={{
            scale: 1.5,
          }}
          whileTap={{ scale: 0.85, rotate: '-2.5deg' }}
        >
          Click Me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
