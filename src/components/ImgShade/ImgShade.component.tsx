import type { Props } from '@/types/shared.type';
import styles from './ImgShade.component.module.scss';
import ShadeLayer from '../ShadeLayer/ShadeLayer.component';

type P = {
  bgImage: string;
  imgRotationDegree: number;
  shadeColor: string;
  shadeOpacity: number;
};

export default function ImgShade(props: Props<'div', P>) {
  const { bgImage, imgRotationDegree, shadeColor, shadeOpacity } = props;
  return (
    <div className={styles.container}>
      <img
        src={bgImage}
        alt="background"
        className={styles.image}
        style={{ transform: `rotate(${imgRotationDegree}deg)` }}
      />
      <ShadeLayer color={shadeColor} opacity={shadeOpacity} />
    </div>
  );
}
