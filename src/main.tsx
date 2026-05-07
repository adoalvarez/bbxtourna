import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './features/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './features/App'
import AddPlayers from './features/Home/AddPlayers'
import { CreateTournament } from './features/Home/CreateTournament'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/add-player',
    Component: AddPlayers
  },
  {
    path: '/create-tournament',
    Component: CreateTournament
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>,
)
