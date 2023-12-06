import './index.css'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages';
import Category from './pages/category';
import Post from './pages/post';
import AboutUs from './pages/about_us';
import Posts from './pages/posts';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/category/:id" element={<Category />}/>
          <Route path="/posts" element={<Posts />}/>
            <Route path="/post/:id" element={<Post />}/>
            <Route path="/about_us" element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
