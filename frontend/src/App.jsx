import './styles/App.scss';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddNew from './pages/AddNew';
import useApplicationData from './hooks/useApplicationData';
// import SupplementList from './pages/SupplementList';
import UserRegister from './pages/UserRegister';

function App() {
  // Use the custom hook to manage application data
  const { state, actions } = useApplicationData();
  const { addNewSupplimentClicked, user, userSupplements, userSignUpClicked} = state;
  const { login, logout, handleAddNew, goBackToDashboard, clickSignUp, signUp, takeSupplement } = actions;
  // console.log(userSignUpClicked);

  return (
    <>
      {user && addNewSupplimentClicked && !userSignUpClicked && <AddNew logout={logout} handleAddNew={handleAddNew} goBackToDashboard={goBackToDashboard} />}
      {!user && !addNewSupplimentClicked && !userSignUpClicked && <Login login={login} clickSignUp={clickSignUp} />}
      {/* {!user && !addNewSupplimentClicked && userSignUpClicked && <SignUp signUp={signUp} />} */}
      {user && !addNewSupplimentClicked && !userSignUpClicked && <Dashboard logout={logout} user={user} handleAddNew={handleAddNew} userSupplements={userSupplements} takeSupplement={takeSupplement} />}
      {!user && !addNewSupplimentClicked && userSignUpClicked && <UserRegister signUp={signUp} />}
    </>
  );
}

export default App;