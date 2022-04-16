import React from 'react';
import styles from './Header.less';

function Header({
  type = 'common',
  children,
  headerHeight,
  headerWidth,
  style,
}) {
  return (
    <div
      className={styles[type + '_container']}
      style={{ ...style, height: headerHeight }}
    >
      <header
        className={styles.header_container}
        style={{ width: headerWidth }}
      >
        {children}
      </header>
    </div>
  );
}

export default Header;
