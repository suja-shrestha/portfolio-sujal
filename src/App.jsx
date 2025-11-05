import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/foot'; // 
import Hero from './component/hero/Hero';
import Project from './component/Projects/Project';
import Aboutus from './component/AboutUS/Aboutus';
import Contact from './component/Contact/Contact';
import Nav from './component/nav/Nav'; // 

// ✅ Layout that includes both Nav and Footer on every page
function Layout() {
  return (
    <>
      <Nav />
      <Outlet /> {/* Page content renders here */}
      <Footer />
    </>
  );
}

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />, // ✅ Shared layout
      children: [
        {
          path: '/',
          element: <Hero />,
        },
        {
          path: '/project',
          element: <Project />,
        },
        {
          path: '/about',
          element: <Aboutus />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
