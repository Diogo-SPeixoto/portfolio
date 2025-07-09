import { HTMLMotionProps, motion, useInView } from 'framer-motion';
import { useRef } from "react";

type Props = HTMLMotionProps<'section'> & {
  children: React.ReactNode;
};

const FadeInWhenVisible = ({ children, ...rest }: Props) => {
  const ref = useRef(   null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default FadeInWhenVisible;
