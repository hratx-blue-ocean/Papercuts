import React from 'react';
import styles from './Desc.module.css';

export const DescComp = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h2 className={styles.title}>
              <span>A</span>bout Us
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo minus quo, libero
              perferendis, error incidunt a aliquid delectus fugiat molestias, quasi voluptates
              corporis vitae quisquam repellendus ratione! Deleniti, repudiandae beatae? Lorem
              ipsum.
              <br />
              dolor sit amet consectetur adipisicing elit. Explicabo minus quo, libero perferendis,
              error incidunt a aliquid delectus fugiat molestias, quasi voluptates corporis vitae
              quisquam repellendus ratione! Deleniti, repudiandae beatae? Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Explicabo minus quo, libero perferendis, error
              incidunt a aliquid delectus fugiat molestias, quasi voluptates corporis vitae quisquam
              repellendus ratione! Deleniti, repudiandae beatae? Lorem ipsum.
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.imgBox}>
              <img src='https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&h=750&w=1260' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
