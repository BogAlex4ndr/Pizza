import React from 'react';
import styles from './NotFoudBlock.module.scss';

export default function NotFoundBlock() {
    console.log(styles.root)
  return (
    <div className={styles.root}>
      <h1>😕</h1>
      <h1>Not Found</h1>
      <p>page not found</p>
    </div>
  );
}
