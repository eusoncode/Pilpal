// import './styles/App.scss';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import AddNew from './pages/AddNew';
// import useApplicationData from './hooks/useApplicationData';
// import SupplementList from './pages/SupplementList';
// import UserRegister from './pages/UserRegister';

// function App() {
//   // Use the custom hook to manage application data
//   const { state, actions } = useApplicationData();
//   const { addNewSupplimentClicked, showSupplementListClicked, user, userSupplements, userSignUpClicked, editButtonClicked} = state;
//   const { login, logout, addNewSupplement, handleAddNew, goBackToDashboard, clickSignUp, signUp, takeSupplement, handleShowSupplementList, goBackToLogin, setEditClicked, handleRefillAlert } = actions;
//   // console.log(
//   //   `showSupplementListClicked: ${showSupplementListClicked},
//   //    userSignUpClicked: ${userSignUpClicked},
//   //    addNewSupplimentClicked: ${addNewSupplimentClicked},
//   //    user: ${user},
//   //    editButtonClicked: ${editButtonClicked}
//   //   `);

//   // console.log({userSupplementState: userSupplements});

//   return (
//     <>
//       {user && !showSupplementListClicked && addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <AddNew logout={logout} handleAddNew={handleAddNew} goBackToDashboard={goBackToDashboard} user={user} handleShowSupplementList={handleShowSupplementList} addNewSupplement={addNewSupplement} />}
//       {!user && !showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <Login login={login} clickSignUp={clickSignUp} />}
//       {user && showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <SupplementList logout={logout} user={user} handleAddNew={handleAddNew} userSupplements={userSupplements} goBackToDashboard={goBackToDashboard} handleShowSupplementList={handleShowSupplementList} setEditClicked={setEditClicked} />}
//       {user && !showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <Dashboard logout={logout} user={user} handleAddNew={handleAddNew} userSupplements={userSupplements} takeSupplement={takeSupplement} handleShowSupplementList={handleShowSupplementList} handleRefillAlert={handleRefillAlert} />}
//       {!user && !showSupplementListClicked && !addNewSupplimentClicked && userSignUpClicked && !editButtonClicked && <UserRegister signUp={signUp} goBackToLogin={goBackToLogin} />}
//       {/* {user && !showSupplementListClicked && !addNewSupplimentClicked && userSignUpClicked && editButtonClicked && <EditUserSupplement logout={logout} user={user} handleAddNew={handleAddNew} userSupplements={userSupplements} goBackToDashboard={goBackToDashboard} handleShowSupplementList={handleShowSupplementList} setEditClicked={setEditClicked} />} */}
//     </>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import './styles/App.scss';
// import LayoutWithHeader from './components/LayoutWithHeader';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import AddNew from './pages/AddNew';
// import useApplicationData from './hooks/useApplicationData';
// import SupplementList from './pages/SupplementList';
// import UserRegister from './pages/UserRegister';

// function App() {
//   // Use the custom hook to manage application data
//   const { state, actions } = useApplicationData();
//   const { addNewSupplimentClicked, showSupplementListClicked, user, userSupplements, userSignUpClicked, editButtonClicked} = state;
//   const { login, logout, addNewSupplement, handleAddNew, goBackToDashboard, clickSignUp, signUp, takeSupplement, handleShowSupplementList, goBackToLogin, setEditClicked, handleRefillAlert } = actions;

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/dashboard"
//           element={
//             user && !showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked ? (
//               <LayoutWithHeader logout={logout} handleAddNew={handleAddNew} handleShowSupplementList={handleShowSupplementList}>
//                 <Dashboard
//                   user={user}
//                   userSupplements={userSupplements}
//                   takeSupplement={takeSupplement}
//                   handleRefillAlert={handleRefillAlert}
//                 />
//               </LayoutWithHeader>
//             ) : (
//               <Navigate to="/login" /> // Redirect to login if user is not logged in
//             )
//           }
//         />
//         <Route
//           path="/supplement-list"
//           element={
//             user && showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked ? (
//               <LayoutWithHeader user={user} logout={logout} handleAddNew={handleAddNew} handleShowSupplementList={handleShowSupplementList}>
//                 <SupplementList
//                   user={user}
//                   userSupplements={userSupplements}
//                   goBackToDashboard={goBackToDashboard}
//                   setEditClicked={setEditClicked}
//                 />
//               </LayoutWithHeader>
//             ) : (
//               <Navigate to="/login" /> // Redirect to login if user is not logged in
//             )
//           }
//         />
//         <Route
//           path="/add-new"
//           element={
//             user && !showSupplementListClicked && addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked ? (
//               <LayoutWithHeader user={user} logout={logout} handleAddNew={handleAddNew} handleShowSupplementList={handleShowSupplementList}>
//                 <AddNew
//                   goBackToDashboard={goBackToDashboard}
//                   user={user}
//                   addNewSupplement={addNewSupplement}
//                 />
//               </LayoutWithHeader>
//             ) : (
//               <Navigate to="/login" /> // Redirect to login if user is not logged in
//             )
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             !user && !showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked ? (
//               <Login login={login} clickSignUp={clickSignUp} />
//             ) : (
//               <Navigate to="/dashboard" /> // Redirect to dashboard if user is already logged in
//             )
//           }
//         />
//         <Route
//           path="/"
//           element={
//             !user && !showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked ? (
//               <Login login={login} clickSignUp={clickSignUp} />
//             ) : (
//               <Navigate to="/dashboard" /> // Redirect to dashboard if user is already logged in
//             )
//           }
//         />
//         <Route
//           path="/register"
//           element={
//             !user && !showSupplementListClicked && !addNewSupplimentClicked && userSignUpClicked && !editButtonClicked ? (
//               <UserRegister signUp={signUp} goBackToLogin={goBackToLogin} />
//             ) : (
//               <Navigate to="/dashboard" /> // Redirect to dashboard if user is already logged in
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles/App.scss';
import LayoutWithHeader from './components/LayoutWithHeader';
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
  const { login, logout, addNewSupplement, handleAddNew, goBackToDashboard, clickSignUp, signUp, takeSupplement, handleShowSupplementList, goBackToLogin, setEditClicked, handleRefillAlert } = actions;

  return (
    <Router>
      <Routes>
        {user && !showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <Route
          path="/dashboard"
          element={
            <LayoutWithHeader logout={logout} handleAddNew={handleAddNew} handleShowSupplementList={handleShowSupplementList}>
              <Dashboard
                user={user}
                userSupplements={userSupplements}
                takeSupplement={takeSupplement}
                handleRefillAlert={handleRefillAlert}
              />
            </LayoutWithHeader>}
        />}
        {user && showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <Route
          path="/supplement-list"
          element={
            <LayoutWithHeader logout={logout} handleAddNew={handleAddNew} handleShowSupplementList={handleShowSupplementList}>
              <SupplementList
                user={user}
                userSupplements={userSupplements}
                goBackToDashboard={goBackToDashboard}
                setEditClicked={setEditClicked}
              />
            </LayoutWithHeader>}
        />}
        {user && !showSupplementListClicked && addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <Route
          path="/add-new"
          element={
            <LayoutWithHeader logout={logout} handleAddNew={handleAddNew} handleShowSupplementList={handleShowSupplementList}>
              <AddNew
                  goBackToDashboard={goBackToDashboard}
                  user={user}
                  addNewSupplement={addNewSupplement}
              />
            </LayoutWithHeader>}
        />}
        {!user && !showSupplementListClicked && !addNewSupplimentClicked && userSignUpClicked && !editButtonClicked && <Route
          path="/register"
          element={
            <UserRegister
              signUp={signUp}
              goBackToLogin={goBackToLogin}
            />}
        />}
        {!user && !showSupplementListClicked && !addNewSupplimentClicked && !userSignUpClicked && !editButtonClicked && <Route
          path="/"
          element={
            <Login
              login={login}
              clickSignUp={clickSignUp}
            />}
        />}
      </Routes>
    </Router>
  );
}

export default App;

