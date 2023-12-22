import React from 'react';

export default function Header(props) {
  return (
    <header>
      <nav>
        <ul className="nav-container--left">
          <li className="active">My Dashboard</li>
          <li>Supplement List</li>
        </ul>
        <ul className="nav-container--right">
          <li>+ Add New</li>
          <li className="logout-btn" onClick={props.onClick}>Log out</li>
        </ul>
      </nav>
    </header>
  );
}
