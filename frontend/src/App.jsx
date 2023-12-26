import './styles/App.scss';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddNew from './pages/AddNew';
import useApplicationData from './hooks/useApplicationData';
import SupplementList from './pages/SupplementList';
import UserRegister from './pages/UserRegister';

function App() {
  // Use the custom hook to manage application data
  const { state, actions } = useApplicationData();
  const { addNewSupplimentClicked, showSupplementListClicked, user, userSupplements, userSignUpClicked, editButtonClicked} = state;
  const { login, logout, handleAddNew, goBackToDashboard, clickSignUp, signUp, takeSupplement, handleShowSupplementList, goBackToLogin, setEditClicked } = actions;
  // console.log(
  //   `showSupplementListClicked: ${showSupplementListClicked},
  //    userSignUpClicked: ${userSignUpClicked},
  //    addNewSupplimentClicked: ${addNewSupplimentClicked},
  //    user: ${user},
  //    editButtonClicked: ${editButtonClicked}
  //   `);

  return (
    <>
      {user && !showSupplementListClicked && addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <AddNew logout={logout} handleAddNew={handleAddNew} goBackToDashboard={goBackToDashboard} handleShowSupplementList={handleShowSupplementList} />}
      {!user && !showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <Login login={login} clickSignUp={clickSignUp} />}
      {user && showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <SupplementList logout={logout} user={user} handleAddNew={handleAddNew} userSupplements={userSupplements} goBackToDashboard={goBackToDashboard} handleShowSupplementList={handleShowSupplementList} setEditClicked={setEditClicked} />}
      {user && !showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <Dashboard logout={logout} user={user} handleAddNew={handleAddNew} userSupplements={userSupplements} takeSupplement={takeSupplement} handleShowSupplementList={handleShowSupplementList} />}
      {!user && !showSupplementListClicked && !addNewSupplimentClicked && userSignUpClicked && !editButtonClicked && <UserRegister signUp={signUp} goBackToLogin={goBackToLogin} />}
      {/* {user && !showSupplementListClicked && !addNewSupplimentClicked && userSignUpClicked && editButtonClicked && <EditUserSupplement logout={logout} user={user} handleAddNew={handleAddNew} userSupplements={userSupplements} goBackToDashboard={goBackToDashboard} handleShowSupplementList={handleShowSupplementList} setEditClicked={setEditClicked} />} */}
    </>
  );
}

export default App;