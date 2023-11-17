import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const brandStyle = { fontSize: '40px' };

    return (
        <header className="header fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand" to="/">
                    <span style={brandStyle} className="text-white">Hannah McEvoy's Professional Site</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;