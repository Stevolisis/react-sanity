import './index.css'
import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Index from './pages';
import Post from './pages/post';
import AboutUs from './pages/about_us';
import Posts from './pages/posts';
import Category from './pages/Category';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/category/:id" element={<Category />}/>
          <Route path="/posts" element={<Posts />}/>
          <Route path="/post/:id" element={<Post />}/>
          <Route path="/about_us" element={<AboutUs />}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
