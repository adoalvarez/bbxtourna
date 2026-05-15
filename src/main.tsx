import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './features/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PageLayout from './shared/layouts/PageLayout'
import NotFoundPage from './features/NotFoundPage'
import { PlayerProvider } from './app/PlayerStore'
import Tournament from './features/Tournament'
import Players from './features/Players'
import Matches from './features/Tournament/Matches'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'players',
        element: <Players />
      },
      {
        path: 'tournament',
        children: [
          {
            index: true,
            element: <Tournament />
          },
          {
            path: 'matches',
            element: <Matches />
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ],
    
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlayerProvider>
      <RouterProvider router={router} />
    </PlayerProvider>
  </StrictMode>,
)
