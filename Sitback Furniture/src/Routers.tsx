import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import OrderConfirmationPage from './pages/OrderConfirmationPage/OrderConfirmationPage'
import ShoppingPage from './pages/ShoppingPage/ShoppingPage'
import Root from './Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/categories/:categoryId', element: <ShoppingPage /> },
      { path: '/confirmOrder', element: <OrderConfirmationPage /> },
    ],
  },
  { path: '*', element: <Navigate to='/' /> },
])

export default router
