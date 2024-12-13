'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="grid place-content-center h-dvh gap-3">
      <motion.button
        className="bg-violet-500 text-white text-2xl border-none rounded-lg p-4 cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: '0deg', scale: 0, y: 0 }}
            animate={{ rotate: '180deg', scale: 1, y: [0, 150, -150, -150, 0] }}
            exit={{ rotate: '0deg', scale: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.95, 1],
            }}
            className="w-40 h-40 bg-white"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
