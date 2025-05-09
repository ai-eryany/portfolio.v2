import Templates from '../../templates';
import Elements from '../../elements';
// import Hooks from '@/shared/hooks';
import { Props } from '@/shared/types';
import styles from './ImageCard.component.module.scss';
import { clx } from '@/shared/utils';

const { TitleCardElement } = Elements.TitleCard;
const { ImageElement } = Elements.Image;
const { ImgShadeTemplate } = Templates.ImgShade;
// const { useAnimateDelay } = Hooks;

type P = {
  bgImage: string;
  imgRotationDegree: number;
  shadeColor: string;
  shadeOpacity: number;
  src: string;
  blendMode: 'darken' | 'hard-light' | 'color-burn' | 'multiply' | 'luminosity';
};

export default function ImageCardComponent(props: Props<'div', P>) {
  // const { isAbleToAnimate, ref } = useAnimateDelay(500);
  const {
    children,
    blendMode,
    bgImage,
    imgRotationDegree,
    shadeColor,
    shadeOpacity,
    src,
    className,
  } = props;
  return (
    <div className={clx(styles.base, className)}>
      <ImgShadeTemplate
        bgImage={bgImage}
        imgRotationDegree={imgRotationDegree}
        shadeColor={shadeColor}
        shadeOpacity={shadeOpacity}
      />
      <ImageElement blendMode={blendMode} src={src} />
      <TitleCardElement>{children}</TitleCardElement>
    </div>
  );
}
