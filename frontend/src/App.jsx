import './styles/App.scss';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddNew from './pages/AddNew';
import useApplicationData from './hooks/useApplicationData';
import Home from './pages/Home'
function App() {
  // Use the custom hook to manage application data
  const { state, actions } = useApplicationData();
  const { addNewSupplimentClicked, user, userSupplements} = state;
  const { login, logout, handleAddNew, goBackToDashboard} = actions;

  return (
   
    <>
    {/* //<Home logout={logout} login={login}/> */}
    <Home login={login} logout={logout}/>
      {user && addNewSupplimentClicked && <AddNew logout={logout} handleAddNew={handleAddNew} goBackToDashboard={goBackToDashboard} />}
      {!user && !addNewSupplimentClicked && <Login login={login} />}
      {user && !addNewSupplimentClicked && <Dashboard logout={logout} user={user} handleAddNew={handleAddNew} userSupplements={userSupplements} />}
    </>
 
  );
}

export default App;
