import App from './components/App';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Hero from './components/Hero';
import Shop from './components/Shop';

const productLoader = async function () {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
};

const routes = [
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
        loader: productLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
];

export default routes;
