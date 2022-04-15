import Logo from '../../../components/Header/components/Logo/Logo';
import { ButtonList } from '../../../components/Button/Button';
import styles from './HeaderLeft.less';

function HeaderLeft({}) {
  let LogoSettings = {
    type: 'IMG',
    info: {
      //   URL: `${baseURL}/logo.png`,
      height: '100px',
      width: '170px',
    },
  };
  
  return (
    <div className={styles.HeaderLeft_container}>
      <div className={styles.Logo_container}>
        <Logo {...LogoSettings}></Logo>
      </div>
      <div className={styles.ButtonList_container}>
        <ButtonList {...ButtonListSettings}></ButtonList>
      </div>
    </div>
  );
}

export default HeaderLeft;
