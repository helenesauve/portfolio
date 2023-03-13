import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used




function Navbar () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
        <FontAwesomeIcon icon={solid('house')} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* <div> */}
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
            <li className="nav-item">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                CV
                </NavLink>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    );
  }

export default Navbar;
