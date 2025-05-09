// CardAction.tsx
import { motion } from 'motion/react';
import { clx } from '@/shared/utils';
import { Props } from '@/shared/types';
import Hooks from '@/shared/hooks';
import Styles from '@/shared/styles';
import Templates from '../../templates';
import Elements from '../../elements';
import styles from './ActionCard.component.module.scss';

const { useAnimateDelay } = Hooks;
const { EnterAnimation } = Styles.MotionAnimation;
const { ImgShadeTemplate } = Templates.ImgShade;
const { PAButtonElement } = Elements.PAButton;

{
  /* <CardAction
    title="Plant Expansion"
    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, perspiciatis quisquam, ipsum eos quia maiores vel culpa harum tempora totam, reiciendis deleniti aspernatur nulla similique aut dolores. Fuga, illum quia?"
    btnText="Learn More"
    bgImage={images.theme.polygons[0]}
    btnBgColor={theme.colors.accent.main}
    btnTextColor={theme.colors.neutral.white}
    btnRippleBgColor={theme.colors.secondary.main}
    shadeColor={theme.colors.accent.main}
    shadeOpacity={0.2}
    imgRotationDegree={47}
></CardAction> */
}

type P = {
  title?: string;
  desc?: string;
  btnText?: string;
  bgImage: string;
  shadeOpacity: number;
  shadeColor: string;
  btnBgColor: string;
  btnRippleBgColor: string;
  btnTextColor: string;
  imgRotationDegree: number;
  btnLink: string;
};

export default function ActionCardComponent(props: Props<'div', P>) {
  const { ref, isAbleToAnimate } = useAnimateDelay(200);
  const {
    className,
    title,
    desc,
    btnText,
    btnLink,
    bgImage,
    shadeColor,
    shadeOpacity,
    btnBgColor,
    btnRippleBgColor,
    btnTextColor,
    imgRotationDegree,
  } = props;

  return (
    <motion.div
      ref={ref}
      className={clx(styles.wrapper, className)}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ImgShadeTemplate
        bgImage={bgImage}
        imgRotationDegree={imgRotationDegree}
        shadeColor={shadeColor}
        shadeOpacity={shadeOpacity}
      />

      <motion.div
        className={clx(
          styles.h1Container,
          isAbleToAnimate && styles.headInView
        )}
        animate={isAbleToAnimate ? EnterAnimation.fadeIn.animate : undefined}
        initial={EnterAnimation.fadeIn.initial}
        transition={EnterAnimation.fadeIn.transition}
      >
        <motion.h1 className={clx(styles.title)}>{title}</motion.h1>
      </motion.div>

      <motion.div
        className={styles.paragraphContainer}
        animate={isAbleToAnimate ? EnterAnimation.target.animate : undefined}
        initial={EnterAnimation.target.initial}
        transition={EnterAnimation.target.transition}
      >
        <motion.p className={clx(styles.paragraph)}>{desc}</motion.p>
      </motion.div>

      <motion.div
        className={clx(styles.buttonContainer)}
        animate={isAbleToAnimate ? EnterAnimation.target.animate : undefined}
        initial={EnterAnimation.target.initial}
        transition={EnterAnimation.target.transition}
      >
        <PAButtonElement
          to={btnLink}
          bgColor={btnBgColor}
          rippleBgColor={btnRippleBgColor}
          textColor={btnTextColor}
        >
          {btnText}
        </PAButtonElement>
      </motion.div>
    </motion.div>
  );
}
