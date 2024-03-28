import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home';
import Category from './pages/product_category/Category';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/my-cart",
      element: <Cart />
    },
    {
      path: "/categories/:slug",
      element: <Category />
    },
    {
      path: "/products/:slug",
      element: <Product />
    },

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
