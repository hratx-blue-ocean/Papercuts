import React from 'react';
import styles from './About.module.css';
import { BigImg } from './BigImg/BigImg';
import { DescComp } from './Desc/Desc';
import { TempComp } from './Team/Team';

export const AboutComp = () => {
  return (
    <>
      <BigImg />
      <DescComp />
      <TempComp />
    </>
  );
};
