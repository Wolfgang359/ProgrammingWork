import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/Navbar';

export const PortfolioContainer = () => {

  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
