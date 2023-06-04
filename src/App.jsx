
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Lastass from './pages/lastass'
import Profile from './pages/profile'
import Quests from './pages/quests'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/lastmatters',
        element: <Lastass />
  },
  {
    path: '/quest',
        element: <Quests />
  },
  {
    path: '/new-task',
        element: <Lastass />
  },
])


export default function App() {
  return (

      <RouterProvider router={router} />
  )
}

