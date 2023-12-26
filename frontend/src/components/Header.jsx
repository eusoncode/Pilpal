import React from 'react';

export default function Header({logout, handleAddNew, handleShowSupplementList, goBackToDashboard}) {
  return (
    <header>
      <nav>
        <ul className="nav-container--left">
          <li className="active" onClick={goBackToDashboard}>My Dashboard</li>
          <li onClick={handleShowSupplementList}>Supplement List</li>
        </ul>
        <ul className="nav-container--right">
          <li onClick={handleAddNew}>+ Add New</li>
          <li className="logout-btn" onClick={logout}>Log out</li>
        </ul>
      </nav>
    </header>
  );
}
