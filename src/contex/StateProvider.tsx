import { createContext, FunctionalComponent } from "preact";
import { useReducer } from "preact/hooks";

interface Theme {
  name: string;
  overallColor: string;
  totalColor: string;
  inactiveColor: string;
  activeColor: string;
  barTopColor: string;
  barBottomColor: string;
  barBaseColor: string;
  baseTextColor?:string;
  baseTextInactiveColor?:string;
}

interface State {
  theme: Theme;
}

interface Action {
  type: string;
  payload?: any;
}

type StateContextType = [State, (action: Action) => void];

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

interface StateProviderProps {
  initialState: State;
  reducer: (state: State, action: Action) => State;
  children: preact.ComponentChildren;
}

const StateProvider: FunctionalComponent<StateProviderProps> = ({
  initialState,
  reducer,
  children,
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export default StateProvider;
