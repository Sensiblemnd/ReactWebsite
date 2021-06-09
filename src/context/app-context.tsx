import React, { createContext, ReactNode, useReducer } from "react";

type InitialStateType = {
  theme: string;
};

type InitialAppContext = {
  theme: string;
  dispatch?: React.Dispatch<any>;
};

type Action = { type: "TOGGLE_THEME" };

/**type Action =
 | { type: 'request' }
 | { type: 'success', results: HNResponse }
 | { type: 'failure', error: string }; */

// 5. The reduceer - this is used to update the state, based on the action
export const AppReducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  theme: "dark",
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext<InitialAppContext>(initialState);

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props: { children: ReactNode }) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 5. Returns our context. Pass in the values we want to expose
  return (
    <AppContext.Provider
      value={{
        theme: state.theme,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
