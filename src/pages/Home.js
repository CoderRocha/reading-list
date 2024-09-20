import { useState } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

export default function Home() {
  const [books, setBooks] = useState([
    { title: 'the diary of a wimp kid', id: 1 },
    { title: 'the diary of a wimp kid 2', id: 2 },
    { title: 'the diary of a wimp kid 3', id: 3 },
    { title: 'the diary of a wimp kid 4', id: 4 }
  ])

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
