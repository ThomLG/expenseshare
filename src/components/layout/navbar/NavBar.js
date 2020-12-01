import React from 'react';
import {NavLink, Link} from "react-router-dom";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

                <Link to='/' className='navbar-brand'>Expenseshare</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to='/' className='nav-link'>Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/join' className='nav-link'>Rejoindre</NavLink>
                        </li><li className="nav-item">
                            <NavLink to='/create' className='nav-link'>Créer un groupe</NavLink>
                        </li><li className="nav-item">
                            <NavLink to='/about' className='nav-link'>A propos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;