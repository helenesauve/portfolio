import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./style.css";

function Navbar () {
    return (

      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          Hélène Sauvé
        </Link>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to="/projects"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar;
