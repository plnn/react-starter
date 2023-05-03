import React, { useEffect, useState } from 'react';

import Card from 'src/components/atoms/Card/Card';
import './Book.scss';
import Request from 'src/api/request';
import { Button } from 'src/components/atoms/Button/Button';

async function fetchData(setBooks) {
  try {
    const booksResponse = await Request('GET', 'BOOKS', null, null);
    setBooks(booksResponse);
  } catch (err) {
    console.log(err);
  }
}

export const Book = () => {
  const [books, setBooks] = useState<Array<{ name: string; id: number }>>([]);
  useEffect(() => {
    void fetchData(setBooks);
  }, []);
  return (
    <div className='book-container'>
      Book Page
      {(books || []).map((item) => (
        <div key={`book_${item.id}`}>{item.name}</div>
      ))}
      <Card>HELLO</Card>
      <Button $primary>PROCEED</Button>
    </div>
  );
};
