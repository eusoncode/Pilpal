import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({logout}) {
  return (

    <header>
      <nav>
        <ul className="nav-container nav-container--left">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'menu-item active' : 'menu-item'
              }
              end
            >
              My Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/supplement-list"
              className={({ isActive }) =>
                isActive ? 'menu-item active' : 'menu-item'
              }
            >
              Supplement List
            </NavLink>
          </li>
        </ul>
        <ul className="nav-container nav-container--right">
          <li>
            <NavLink
              to="/add-new"
              className={({ isActive }) =>
                isActive ? 'menu-item active' : 'menu-item'
              }
            >
              + Add New
            </NavLink>
          </li>
          {/* Handle logout functionality appropriately */}
          <li>           
            <NavLink
              to="/"
              className="menu-item logout-btn"
              onClick={logout}
            >
              Log out
            </NavLink>
          </li>
        </ul>
      </nav>        
    </header>
  );
}
