import { actionTypes } from "./actionTypes";

interface theme {
  name: string;
  overallColor: string;
  totalColor: string;
  inactiveColor: string;
  activeColor: string;
  barTopColor: string;
  barBottomColor: string;
  barBaseColor: string;
  baseTextColor: string;
  baseTextInactiveColor: string;
}

interface State {
  theme: theme;
}

export const initialState: State = {
  theme: {
    name: "normal",
    overallColor: " #edf2ff",
    totalColor: "#4169e1",
    inactiveColor: "#e08700",
    activeColor: "#59d3e3",
    barTopColor: "rgba(224, 135, 0, 0.2)",
    barBottomColor: "rgba(224, 135, 0, 0)",
    barBaseColor: "#E08700",
    baseTextColor: "#4169E1",
    baseTextInactiveColor: "#FFFFFF",
  },
};

interface Action {
  type: string;
  payload?: any;
}

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actionTypes.THEME_SETUP:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
