import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ErrorPage from './components/ErrorPage';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
