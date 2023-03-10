import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Navbar () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
        <FontAwesomeIcon icon={solid('house')} />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText"></div>
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
