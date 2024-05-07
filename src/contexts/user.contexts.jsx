import { createContext, useEffect, useReducer } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// set this up as the values you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type: ${type} in payload`);
  }
};

export const INITIAL_STATE = {
  currentUser: null,
};
// Provider that will wrap around other components
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  // or we could destructure state
  // const [{currentUser}, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const { currentUser } = state;
  console.log("current user", currentUser);
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
