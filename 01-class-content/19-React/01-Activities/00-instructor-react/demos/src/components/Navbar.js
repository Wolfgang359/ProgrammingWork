import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
            </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={
                        cn(['collapse', 'navbar-collapse'],{
                            show: isOpen
                        })
                    }
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/giphy-search" className="nav-link">Giphy Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}