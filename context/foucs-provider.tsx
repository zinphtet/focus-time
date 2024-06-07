import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Define the shape of our state and actions
interface FocusItemsState {
  focusItems: string[];
}

type Action = { type: 'SET_FOCUS_ITEMS'; payload: string };

// Create the initial state
const initialState: FocusItemsState = {
  focusItems: [],
};

// Create a reducer function
const focusItemsReducer = (state: FocusItemsState, action: Action): FocusItemsState => {
  switch (action.type) {
    case 'SET_FOCUS_ITEMS':
      return { focusItems : [...state.focusItems , action.payload] };
    default:
      return state;
  }
};

// Create a Context for the focusItems
const FocusItemsContext = createContext<{
  state: FocusItemsState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

// Create a Provider Component
interface FocusItemsProviderProps {
  children: ReactNode;
}

export const FocusItemsProvider: React.FC<FocusItemsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(focusItemsReducer, initialState);

  return (
    <FocusItemsContext.Provider value={{ state, dispatch }}>
      {children}
    </FocusItemsContext.Provider>
  );
};

// Custom hook for using the FocusItemsContext
export const useFocusItems = () => {
  return useContext(FocusItemsContext);
};
