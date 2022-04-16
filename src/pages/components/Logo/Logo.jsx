import styles from './Logo.less';

function Logo({type, info}) {
  let logo;
  switch (type) {
    case 'IMG': {
      logo = <div className={styles.container}></div>;
      break;
    }
    default:
      break;
  }
  return <div>{logo}</div>;
}

export default Logo;
