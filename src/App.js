import './App.css';
import Layout from './components/Layout/Layout.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Book } from './pages/Books/Book.tsx';
import { Favorites } from './pages/Favorites/Favorites.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        k
        <Route path='/' element={<Layout />}>
          <Route path='/book' element={<Book />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
