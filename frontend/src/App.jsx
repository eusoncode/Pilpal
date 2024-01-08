import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  const { user, userSupplements} = state;
  const { login, logout, addNewSupplement, signUp, takeSupplement, handleRefillAlert } = actions;

  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <LayoutWithHeader logout={logout}>
              <Dashboard
                user={user}
                userSupplements={userSupplements}
                takeSupplement={takeSupplement}
                handleRefillAlert={handleRefillAlert}
              />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/supplement-list"
          element={
            <LayoutWithHeader logout={logout}>
              <SupplementList
                userSupplements={userSupplements}
              />
            </LayoutWithHeader>
          } 
        />
        <Route
          path="/add-new"
          element={
            <LayoutWithHeader logout={logout}>
              <AddNew
                  addNewSupplement={addNewSupplement}
              />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/register"
          element={
            <UserRegister
              signUp={signUp}
            />
          }
        />
        <Route
          path="/"
          element={
            <Login
              login={login}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

