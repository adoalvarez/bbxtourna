import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './features/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './features/App'
import RoundRobin from './features/Robin'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/round-robin',
    Component: RoundRobin
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>,
)
