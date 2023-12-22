import './styles/App.scss';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import AddNew from './pages/AddNew';
import axios from 'axios';
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  const login = (email, password) => {
    // console.log("login():", email, password);
    const body = {
      "email": email,
      "password": password    
    }
    axios.post('http://localhost:8080/users/login', body)
      .then((response) => {
        console.log('Post request response:', response.data);
        setUser(response.data)
      })
      .catch((error) => {
        console.error('Error while making POST request:', error);
      });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {/* <AddNew /> */}
      {!user && <Login login={login} />}
      {user && <Dashboard logout={logout } />}
    </>
  );
}

export default App;
