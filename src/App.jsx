
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Lastass from './pages/lastass'
import Profile from './pages/profile'
import Quests from './pages/quests'
import NewTask from './pages/newtask'
import Math from './Quest-ex/math'
import Port from './Quest-ex/port'
import His from './Quest-ex/his'

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
    path: '/newtask',
        element: < NewTask/>
  },
  {
    path: '/quest/mat',
        element: <Math />
  },
  {
    path: '/quest/his',
        element: <His />
  },
  {
    path: '/quest/port',
        element: <Port />
  },
])


export default function App() {
  return (

      <RouterProvider router={router} />
  )
}
