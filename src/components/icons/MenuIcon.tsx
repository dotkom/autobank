import * as React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    strokeLinecap='round'
    {...props}
  />
);

export const MenuIcon = ({
  toggle,
  className,
}: {
  toggle: (i?: number | undefined) => void;
  className?: string;
}) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    onClick={() => {
      toggle();
    }}
    className={`${className} stroke-current `}
  >
    <Path
      variants={{
        closed: { d: 'M 2 2.5 L 17 2.5' },
        open: { d: 'M 3 16.5 L 17 2.5' },
      }}
    />
    <Path
      d='M 2 9.423 L 17 9.423'
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.1 }}
    />
    <Path
      variants={{
        closed: { d: 'M 2 16.346 L 17 16.346' },
        open: { d: 'M 3 2.5 L 17 16.346' },
      }}
    />
  </svg>
);
