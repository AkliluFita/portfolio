import { createContext, useReducer } from "react";

// initial state
const INITIAL_STATE = { darkMode: true };

// prepare the data layer
export const ThemeContext = createContext(INITIAL_STATE);

// reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

// wrap out app and provide the data layer
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};
