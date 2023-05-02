import React, { useEffect, useState } from 'react';
import Card from 'src/components/atoms/Card/Card';
import './Book.scss';
import styles from './Book.module.scss';
// eslint-disable-next-line import/extensions
import Request from 'src/api/request.js';

async function fetchData(setPosts) {
  try {
    const booksResponse = await Request('GET', 'BOOKS', null, null);
    setPosts(booksResponse);
  } catch (err) {
    console.log(err);
  }
}

export const Book = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    void fetchData(setPosts);
  }, []);
  console.log(posts);
  return (
    <div className='book-container'>
      Book Page
      <div className={styles.bookItem}>Körlük</div>
      <Card>HELLO</Card>
    </div>
  );
};
