import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navClassNames, setNavClassNames] = useState(['collapse', 'navbar-collapse'])
  const location = useLocation();

  const handleToggle = () => {
    setNavClassNames(['navbar-collapse', 'collapsing'], { show: showNav });
    setShowNav(!showNav);
    setTimeout(() => {
      if (showNav) {
        setNavClassNames(['collapse', 'navbar-collapse', 'show']);
      } else {
        setNavClassNames(['collapse', 'navbar-collapse']);
      }
    }, 300)
  };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Pupster
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleToggle}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
          className={cn(navClassNames)}
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className={cn('nav-item', {'active': location.pathname === '/'})}>
                        <Link to="/" className="nav-link">
                            About <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className={cn('nav-item', {'active': location.pathname === '/discover'})}>
                        <Link to="/discover" className="nav-link">
                            Discover
                        </Link>
                    </li>
                    <li className={cn('nav-item', {'active': location.pathname === '/search'})}>
                        <Link to="/search" className="nav-link">
                            Search
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
