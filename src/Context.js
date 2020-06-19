import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transaction: [ ] };

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function del(id) {
    dispatch({
      type: "Delete_Item",
      payload: id,
    });
  }

  function add(transaction) {
    dispatch({
      type: "Add_Item",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        del,
        add,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
