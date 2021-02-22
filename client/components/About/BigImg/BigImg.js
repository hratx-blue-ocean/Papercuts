import React from 'react';
import styles from './BigImg.module.css';

export const BigImg = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <h2>Learn to Earn, Earn to Learn.</h2>
          <p>
            L.orem ipsum dolor sit amet consectetur adipisicing elit. Quod similique totam sit
            saepe, assumenda veniam illum illo necessitatibus exercitationem temporibus deleniti
            corrupti.
          </p>
          <div className={styles.button}>Sign Up</div>
        </div>
      </div>
    </>
  );
};
