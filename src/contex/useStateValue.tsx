import { useContext } from "preact/hooks";
import { StateContext } from "./StateProvider";

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

const useStateValue = (): StateContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};

export default useStateValue;
