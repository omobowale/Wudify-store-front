import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home';
import Category from './pages/product_category/Category';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import Checkout from './pages/checkout/Checkout';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {

  // Create a client
  const queryClient = new QueryClient()

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
      path: "/order-confirmation/:reference",
      element: <Order />
    },
    {
      path: "/my-cart/checkout",
      element: <Checkout />
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
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
