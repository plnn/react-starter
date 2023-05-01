import React from 'react';
import Card from 'src/components/Card/Card';
import './Book.scss';
import styles from './Book.module.scss';

export const Book = (props) => {
  return (
    <div className='book-container'>
      Book Page
      <div className={styles.bookItem}>Körlük</div>
      <Card>HELLO</Card>
    </div>
  );
};
