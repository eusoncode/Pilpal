import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-container--left">
          <li className="active">My Dashboard</li>
          <li>Supplement List</li>
        </ul>
        <ul className="nav-container--right">
          <li>+ Add New</li>
          <li className="logout-btn">Log out</li>
        </ul>
      </nav>
    </header>
  );
}
