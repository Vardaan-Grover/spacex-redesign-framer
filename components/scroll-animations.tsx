'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
    const backgroundColor = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      ['rgb(86, 1, 245)', 'rgb(170, 100, 69)', 'rgb(1, 245, 13)']
    );

  return (
    <div>
      <motion.div
        className="bg-blue-400 origin-left sticky top-0 w-full h-4"
        style={{ scaleX: scaleX, backgroundColor: backgroundColor }}
      />
      <div className="max-w-[700px] mx-auto p-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          fugit libero odit vitae sequi dolore pariatur! Enim iste, esse
          provident odit ex, numquam vel aliquid magnam, recusandae perspiciatis
          eveniet quos?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          et. Eius eligendi possimus rem, assumenda eveniet soluta et numquam
          amet molestiae perferendis architecto voluptatum vitae exercitationem
          itaque dolor maiores deserunt.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis fugit, neque provident beatae saepe illum? Culpa dignissimos
          veritatis aliquid, quidem laborum dicta exercitationem consequuntur
          pariatur beatae adipisci impedit voluptate!
        </p>
        <br />
      </div>
    </div>
  );
};

export default ScrollAnimations;
