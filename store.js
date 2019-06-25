import React, { createContext, useReducer  } from 'react';

export const StoreContext = createContext({});

const initialState = { fruits: [] }

function reducer(state, action) {
  switch (action.type) {
    case 'addFruit':
     if(!state.fruits) return {fruits:[], }
      return {
        fruits: [...state.fruits, action.payLoad]
      };
    case 'addVegetable':
      return {
        fruits: [...state.fruits, action.payLoad]
      }
    default: throw new Error('Tipo da Action não implementado');
  }
}

const Store = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);
  return <StoreContext.Provider value={[state, dispath]} >{children}</StoreContext.Provider>
}

export default Store;
