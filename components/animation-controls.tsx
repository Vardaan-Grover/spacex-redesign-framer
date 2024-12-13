'use client';

import { motion, useAnimationControls } from 'framer-motion';
const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start('flip');
  };

  return (
    <div className="grid place-content-center h-dvh gap-3">
      <button
        onClick={handleClick}
        className="bg-violet-500 text-white text-2xl border-none rounded-lg p-4 cursor-pointer"
      >
        Flip It
      </button>
      <motion.div
        className="w-40 h-40 bg-black rounded-lg"
        variants={{
          initial: {
            rotate: '0deg',
          },
          flip: { rotate: '360deg' },
        }}
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
