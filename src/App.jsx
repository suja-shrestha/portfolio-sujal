import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Hero from './component/hero/Hero';
import Project from './component/Projects/Project';
import Aboutus from './component/AboutUS/Aboutus';
import Contact from './component/Contact/Contact';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Hero />,
    },
    {
      path:'/project',
      element:<Project/>,
    },
    {
      path:"/about",
      element:<Aboutus/>,
    },
    {
      path:'/contact',
      element:<Contact/>
    }
  ]);

  return <RouterProvider router={router} />;
}
