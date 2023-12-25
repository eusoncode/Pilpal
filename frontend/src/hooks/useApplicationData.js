import { useReducer } from 'react';
import axios from 'axios';


// Define the initial state for the reducer
const initialState = {
  addNewSupplimentClicked: false,
  user: null
};

// Define action types as constants
const ACTIONS = {
  SET_NEW_SUPPLIMENT_CLICKED: 'SET_NEW_SUPPLIMENT_CLICKED',
  SET_USER: 'SET_USER'
};

// Define the reducer function to handle state updates
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_NEW_SUPPLIMENT_CLICKED:
      // Handle adding a favorite photo
      return { ...state, addNewSupplimentClicked:  action.payload.isClicked };

    case ACTIONS.SET_USER:
      // Handle setting the modal open state
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
}

// Custom hook for managing application data with a reducer
const useApplicationData = () => {
  // Use the useReducer hook to manage state with the appReducer function
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action functions for updating the state
  const setNewSupplimentClicked = (isClicked) => {
    dispatch({ type: ACTIONS.SET_NEW_SUPPLIMENT_CLICKED, payload: { isClicked } });
  };

  const login = (email, password) => {
    // console.log("login():", email, password);
    const body = {
      "email": email,
      "password": password    
    }
    axios.post('http://localhost:8080/users/login', body)
      .then((response) => {
        const loggedUser = response.data.userFound;
        // console.log(response.data.userFound);
        dispatch({ type: ACTIONS.SET_USER, payload: { user: loggedUser } });
      })
      .catch((error) => {
        console.error('Error while making POST request:', error);
      });
  };

  const logout = () => {
    dispatch({ type: ACTIONS.SET_USER, payload: { user: null } });
    setNewSupplimentClicked(false);
  };

  const handleAddNew = () => {
    setNewSupplimentClicked(true);
  }

  const goBackToDashboard = () => {    
    setNewSupplimentClicked(false);
  }

  return {
    state,
    actions: {
      login,
      logout,
      handleAddNew,
      goBackToDashboard
    },
  };
};

export default useApplicationData;