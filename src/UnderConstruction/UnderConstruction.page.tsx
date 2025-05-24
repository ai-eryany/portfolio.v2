import Helper from '@/libs/Helper.lib';
import UnderConstructionLayout from './UnderConstruction.layout';
import styles from './UnderConstruction.page.module.scss';

export default function UnderConstruction() {
  return (
    <UnderConstructionLayout>
      <div className={Helper.cn(styles.area)}>
        <ul className={Helper.cn(styles.circles)}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className={Helper.cn(styles.titleBox)}>
          <h1>Page is Under Construction</h1>
        </div>
      </div>
    </UnderConstructionLayout>
  );
}
