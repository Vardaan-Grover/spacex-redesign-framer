'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="h-[150vh]"></div>
      <motion.div
        className="h-[40vh] bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
      <div
        ref={ref}
        className={`h-dvh ${
          isInView ? 'bg-indigo-300' : 'bg-red-500'
        } transition-all duration-1000`}
      ></div>
    </>
  );
};

export default ViewBasedAnimations;
