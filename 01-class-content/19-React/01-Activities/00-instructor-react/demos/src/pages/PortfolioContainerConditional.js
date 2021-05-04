import { useState } from 'react';
import { NavBar } from '../components/Navbar';
import { Home } from './Home';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';

const renderPage = (page) => {
  switch (page) {
    case 'home':
      return <Home />
    case 'contact':
      return <Contact />
    case 'portfolio':
      return <Portfolio />
  }
}

export const PortfolioContainer = () => {
  const [page, setPage] = useState('home');

  const pageHandler = ({target}) => {
    setPage(target.dataset.page);
  }

  return (
    <>
      <nav className="mt-3 text-center">
        <button className="btn btn-outline-primary" data-page="home" onClick={pageHandler}>Home</button>
        <button className="btn btn-outline-primary" data-page="portfolio" onClick={pageHandler}>Portfolio</button>
        <button className="btn btn-outline-primary" data-page="contact" onClick={pageHandler}>Contact</button>
      </nav>
      <div className="container">
        {renderPage(page)}
      </div>
    </>
  )
}
