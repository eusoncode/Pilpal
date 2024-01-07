import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import LayoutWithHeader from './components/LayoutWithHeader';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddNew from './pages/AddNew';
import SupplementList from './pages/SupplementList';
import UserRegister from './pages/UserRegister';
import EditSupplement from './pages/EditSupplement';
import mockReminder from './data/mocks/mockReminder';

function App() {
  const getSupplementById = (id) => {
    return mockReminder.find((supplement) => supplement.id === parseInt(id));
  };

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
        <Route
          path="/edit/:id"
          element={
            <LayoutWithHeader>
              <EditSupplement getSupplementById={getSupplementById} />
            </LayoutWithHeader>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
