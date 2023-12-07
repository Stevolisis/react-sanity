import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages';
import Post from './pages/post';
import Link from './pages/link';
import Posts from './pages/posts';
import Category from './pages/Category';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/category/:slug",
      element: <Category />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/post/:slug",
      element: <Post />,
    },
    {
      path: "/link/:slug",
      element: <Link />,
    },
  ]);
  
  
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
