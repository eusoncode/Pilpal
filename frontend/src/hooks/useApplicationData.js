import { useEffect, useReducer } from 'react';
import axios from 'axios';


// Define the initial state for the reducer
const initialState = {
  addNewSupplimentClicked: false,
  user: null,
  userSupplements: [],
  userSignUpClicked: false,
  showSupplementListClicked: false,
  editButtonClicked: false
};

// Define action types as constants
const ACTIONS = {
  SET_NEW_SUPPLIMENT_CLICKED: 'SET_NEW_SUPPLIMENT_CLICKED',
  SET_USER: 'SET_USER',
  GET_SUPPLEMENTS_FOR_USER: 'SET_SUPPLEMENTS_FOR_USER',
  SET_USER_SIGNUP_CLICKED: 'SET_USER_SIGNUP_CLICKED',
  SET_SHOW_USER_SUPPLEMENT_LIST: 'SET_SHOW_USER_SUPPLEMENT_LIST',
  SET_EDIT_BUTTON_CLICKED: 'SET_EDIT_BUTTON_CLICKED'
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

    case ACTIONS.GET_SUPPLEMENTS_FOR_USER:
      // Handle setting the user supplement state
      return { ...state, userSupplements: action.payload.userSupplements };
    
    case ACTIONS.SET_USER_SIGNUP_CLICKED:
      // Handle setting the user supplement state
      return { ...state, userSignUpClicked: action.payload.isClicked };
    
    case ACTIONS.SET_SHOW_USER_SUPPLEMENT_LIST:
      // Handle setting the user supplement list state
      return { ...state, showSupplementListClicked: action.payload.isClicked };
    
    case ACTIONS.SET_EDIT_BUTTON_CLICKED:
      // Handle setting the user supplement list state
      return { ...state, editButtonClicked: action.payload.isClicked };
      
      
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

  const setUserSignUpClicked = (isClicked) => {
    dispatch({ type: ACTIONS.SET_USER_SIGNUP_CLICKED, payload: { isClicked } });
  };

  const setShowSupplementList = (isClicked) => {    
    dispatch({ type: ACTIONS.SET_SHOW_USER_SUPPLEMENT_LIST, payload: { isClicked } });
  }

  const setEditButtonClicked = (isClicked) => {    
    dispatch({ type: ACTIONS.SET_EDIT_BUTTON_CLICKED, payload: { isClicked } });
  }

  const login = (email, password) => {
    // console.log("login():", email, password);
    const body = {
      "email": email,
      "password": password    
    }
    axios.post('http://localhost:8080/users/login', body, { withCredentials: true })
      .then((response) => {
        const loggedUser = response.data.userFound;
        // console.log(response.data.userFound);
        dispatch({ type: ACTIONS.SET_USER, payload: { user: loggedUser } });
      })
      .catch((error) => {
        console.error('Error while making POST request:', error);
      });
  };

  const signUp = ({email, password, username}) => {
    const body = {
      "username": username,
      "email": email,
      "password": password    
    }

    axios.post('http://localhost:8080/users/signup', body, { withCredentials: true })
      .then((response) => {
        // console.log("response:", response.data);
        // setNewSupplimentClicked(false);
        setUserSignUpClicked(false);
      })
      .catch((error) => {
        console.error('Error while making POST request:', error);
      });
  };

  const takeSupplement = (supplementId, newValue) => {
    const body = {
      "supplementId": supplementId,
      "newValue": newValue    
    }

    axios.post('http://localhost:8080/supplement_usage/updateStockLevel', body, { withCredentials: true })
      .then((response) => {
        // console.log('Supplement successfully taken:', response);
      })
      .catch((error) => {
        console.error('Error while making POST request:', error);
      });
  };


  // Fetch user's supplements when the user logs in
  useEffect(() => {
    if (state.user) {
      axios.get('http://localhost:8080/user_supplements', { withCredentials: true })
        .then((response) => {
          const userSupplements = response.data.userSupplements;
            // console.log('userSupplements - ', userSupplements);
          dispatch({ type: ACTIONS.GET_SUPPLEMENTS_FOR_USER, payload: { userSupplements } });
        })
        .catch((error) => {
          console.error('Error fetching user supplements:', error);
        });
    }
  }, [state.user]);
  

  const logout = () => {
    dispatch({ type: ACTIONS.SET_USER, payload: { user: null } });
    // setNewSupplimentClicked(false);
    goBackToDashboard();
  };

  const handleAddNew = () => {
    setNewSupplimentClicked(true);
    setShowSupplementList(false);
    setUserSignUpClicked(false);
    setEditButtonClicked(false);
  }

  const goBackToDashboard = () => {    
    setNewSupplimentClicked(false);
    setShowSupplementList(false);
    setUserSignUpClicked(false);
    setEditButtonClicked(false);
  }

  const clickSignUp = () => {
    setUserSignUpClicked(true);
    setNewSupplimentClicked(false);
    setShowSupplementList(false);
    setEditButtonClicked(false);
  }
  
  const handleShowSupplementList = () => {
    setShowSupplementList(true);   
    setNewSupplimentClicked(false);
    setUserSignUpClicked(false);
    setEditButtonClicked(false);
  }

  const goBackToLogin = () => {
    goBackToDashboard();
  }

  const setEditClicked = () => {
    setEditButtonClicked(true)    
    setNewSupplimentClicked(false);
    setShowSupplementList(false);
    setUserSignUpClicked(false);
  }

  return {
    state,
    actions: {
      login,
      logout,
      handleAddNew,
      goBackToDashboard,
      clickSignUp,
      signUp,
      takeSupplement,
      handleShowSupplementList,
      goBackToLogin,
      setEditClicked
    },
  };
};

export default useApplicationData;