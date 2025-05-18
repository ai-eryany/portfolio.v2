import Helper from '@/libs/Helper.lib';
import UnderConstructionLayout from './UnderConstruction.layout';
import styles from './UnderConstruction.page.module.scss';
import { Box, Flex, Heading } from '@radix-ui/themes';

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
        <Box className={Helper.cn(styles.titleBox)}>
          <Heading as="h1">Page is Under Construction</Heading>
        </Box>
      </div>
    </UnderConstructionLayout>
  );
}
