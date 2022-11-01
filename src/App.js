import './scss/App.scss';
import Header from './components/Header';
import Content from './pages/Content';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
