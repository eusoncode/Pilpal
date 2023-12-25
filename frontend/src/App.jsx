import './styles/App.scss';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddNew from './pages/AddNew';
// import axios from 'axios';
// import { useState } from "react";
import useApplicationData from './hooks/useApplicationData';

function App() {
  // Use the custom hook to manage application data
  const { state, actions } = useApplicationData();
  const { addNewSupplimentClicked, user} = state;
  const { login, logout, handleAddNew, goBackToDashboard} = actions;

  return (
    <>
      {user && addNewSupplimentClicked && <AddNew logout={logout} handleAddNew={handleAddNew} goBackToDashboard={goBackToDashboard} />}
      {!user && !addNewSupplimentClicked && <Login login={login} />}
      {user && !addNewSupplimentClicked && <Dashboard logout={logout} user={user} handleAddNew={handleAddNew} />}
    </>
  );
}

export default App;
