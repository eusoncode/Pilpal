import './styles/App.scss';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddNew from './pages/AddNew';
import axios from 'axios';
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [addNewClicked, setAddNewClicked] = useState(false);

  const login = (email, password) => {
    // console.log("login():", email, password);
    const body = {
      "email": email,
      "password": password    
    }
    axios.post('http://localhost:8080/users/login', body)
      .then((response) => {
        // console.log(response.data.userFound);
        setUser(response.data.userFound)
      })
      .catch((error) => {
        console.error('Error while making POST request:', error);
      });
  };

  const logout = () => {
    setUser(null);
    setAddNewClicked(false);
  };

  const handleAddNew = () => {
    setAddNewClicked(true);
  }

  const goBackToDashboard = () => {    
    setAddNewClicked(false);
  }

  return (
    <>
      {user && addNewClicked && <AddNew logout={logout} handleAddNew={handleAddNew} goBackToDashboard={goBackToDashboard} />}
      {!user && !addNewClicked && <Login login={login} />}
      {user && !addNewClicked && <Dashboard logout={logout} user={user} handleAddNew={handleAddNew} />}
    </>
  );
}

export default App;
