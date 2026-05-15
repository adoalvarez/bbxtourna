import './layout.css'
import bbx from '../assets/bbxtourna-header.png'
import { Link, NavLink, Outlet } from 'react-router'

const PageLayout = () => {
  return (
    <div className="page-container"> 
      <div className="page-header h-15 mb-1.5">
        <div className="w-11/12 m-auto flex flex-row items-center justify-between">
          <NavLink to={'/'} >
            <img src={bbx} className="object-contain w-full h-15 text-white" />
          </NavLink>
          <div className="flex flex-row content-center items-center gap-6 text-warning-content">
            <Link to="/tournament" className="font-bold">Tournaments</Link>
            <Link to="/players" className="font-bold">Players</Link>
          </div>
        </div>
      </div>
      <div className="page-body">
        <Outlet />
      </div>
    </div>
  )
}

export default PageLayout;