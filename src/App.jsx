import './index.css'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages';
import Category from './pages/Category';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/category/:id" element={<Category />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
