import * as styles from './index.css';

import type { PageComponent } from '../../../pages/_app';

const TopPage: PageComponent = () => {
  return (
    <div className={styles.wrapper}>
      <span>
        Hello
      </span>
      <em className={styles.emphasis}>
        World !
      </em>
    </div>
  );
};

export default TopPage;
