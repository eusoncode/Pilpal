import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import LayoutWithHeader from './components/LayoutWithHeader';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddNew from './pages/AddNew';
import SupplementList from './pages/SupplementList';
import UserRegister from './pages/UserRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithHeader>
              <Dashboard />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/supplement-list"
          element={
            <LayoutWithHeader>
              <SupplementList />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/add-new"
          element={
            <LayoutWithHeader>
              <AddNew />
            </LayoutWithHeader>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
