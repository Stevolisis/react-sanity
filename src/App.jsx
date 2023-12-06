import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages';
import Post from './pages/post';
import AboutUs from './pages/about_us';
import Posts from './pages/posts';
import Category from './pages/Category';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/category/:id",
      element: <Category />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/post/:id",
      element: <Post />,
    },
    {
      path: "/about_us",
      element: <AboutUs />,
    },
  ]);
  
  
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
