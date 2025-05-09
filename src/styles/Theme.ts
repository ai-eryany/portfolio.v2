const spring = {
  fast: {
    type: 'spring',
    duration: 0.6,
  },
  medium: {
    type: 'spring',
    duration: 0.8,
  },
  slow: {
    type: 'spring',
    duration: 1.2,
  },
};

const EnterAnimation = {
  target: {
    initial: { opacity: 0, x: '-10px', y: '-10px' },
    animate: { opacity: 1, x: '0px', y: '0px' },
    transition: spring.medium,
  },
  strokeGrow: {
    initial: { width: 0 },
    animate: { width: '100px' },
    transition: spring.medium,
  },
  fadeInRight: {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: '0%' },
    transition: spring.medium,
  },
  fadeInLeft: {
    initial: { opacity: 0, x: '-100%' },
    animate: { opacity: 1, x: '0%' },
    transition: spring.medium,
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: spring.medium,
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: spring.medium,
  },
  bounceIn: {
    initial: { opacity: 0, y: '50px' },
    animate: { opacity: 1, y: '0px' },
    transition: spring.medium,
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -80 },
    animate: { opacity: 1, rotate: 0 },
    transition: spring.medium,
  },
};

const ExitAnimation = {
  fadeOut: {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: spring.slow,
  },
};

const HoverAnimation = {
  zoomOnHover: {
    whileHover: {
      scale: 1.1,
      transition: spring.fast,
    },
  },
  expandOnHover: {
    whileHover: {
      scale: 1.2,
      transition: spring.fast,
    },
  },
};

const InfiniteAnimation = {
  fadeInOut: {
    initial: { opacity: 0.1 },
    animate: { opacity: [0.2, 1, 0.2] },
    transition: {
      type: 'tween',
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const Theme = {
  EnterAnimation,
  ExitAnimation,
  HoverAnimation,
  InfiniteAnimation,
};

export default Theme;
