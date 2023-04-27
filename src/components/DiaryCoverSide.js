import React from 'react';
import styles from './DiaryCoverSide.module.css';

function DiaryCoverSide() {
  return (
    <div className={styles.DiaryCoverSide}>
      <div className={styles.DiaryCoverSide}>
        <div className={styles.Profile}>
          <div className={styles.ProfileImg}></div>
          <div className={styles.ProfileDesc}>안녕하세요</div>
        </div>
      </div>
    </div>
  );
}

export default DiaryCoverSide;
