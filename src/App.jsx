import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Nav from './component/nav/Nav';
import Footer from './component/footer/foot';
import Hero from './component/hero/Hero';
import Project from './component/Projects/Project';
import Aboutus from './component/AboutUS/Aboutus';
import Contact from './component/Contact/Contact';

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Hero /> },
        { path: '/project', element: <Project /> },
        { path: '/about', element: <Aboutus /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
