import Templates from '../../templates';
import Elements from '../../elements';
import Styles from '@/shared/styles';
import styles from './WideImage.component.module.scss';
import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';

const { ImageElement } = Elements.Image;
const { ImgShadeTemplate } = Templates.ImgShade;
const { theme } = Styles.JsStyle;

type P = {
  src: string;
  bgImage: string;
  blendMode: 'darken' | 'hard-light' | 'color-burn' | 'multiply' | 'luminosity';
};

export default function WideImageComponent(props: Props<'div', P>) {
  const { bgImage, src, blendMode } = props;
  return (
    <div className={clx(styles.base)}>
      <ImgShadeTemplate
        bgImage={bgImage}
        shadeColor={theme.colors.secondary.main}
        shadeOpacity={0.1}
        imgRotationDegree={0}
      />
      <ImageElement blendMode={blendMode} src={src} />
    </div>
  );
}
