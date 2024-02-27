import { React, createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  name: "Mohammed ali abdullah",
  age: 28,
  startCount: 0,
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "INCREASE":
      return { ...state, startCount: action.newValue };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeName = (newname) => {
    dispatch({
      type: "CHANGE_NAME",
      newValue: newname,
    });
  };

  const changeTheme = (color) => {
    dispatch({
      type: "CHANGE_THEME",
      newValue: color,
    });
  };

  const changeage = (age) => {
    dispatch({
      type: "CHANGE_AGE",
      newValue: age,
    });
  };

  const counter = (newcount) => {
    dispatch({
      type: "INCREASE",
      newValue: newcount,
    });
  };
  return (
    <ThemeContexttt.Provider value={{ ...firstState, changeName, changeTheme , changeage , counter}}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
