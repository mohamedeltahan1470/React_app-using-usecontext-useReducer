import "./App.css";
import "./theme.css";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";

function App() {
  const {changeName, name, changeTheme, changeage, counter, theme, age, startCount } =
    useContext(DataContext);

  return (
    <div className={`App ${theme}`}>
      <Link to="/Page2" style={{ marginBottom: "44px" }}>
        Go to page2
      </Link>

      <button
        onClick={() => {
          changeTheme(theme == "light" ? "dark" : "light");
        }}
        style={{ marginBottom: "44px" }}
      >
        Toggle Theme
      </button>

      <div
        onChange={()=>{
          changeTheme(theme == "light" ? "dark" : "light")
        }}
        style={{ marginBottom: "44px" }}
        className="btn-container"
      >
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button
          onClick={() => {
            changeTheme("light");
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            changeTheme("dark");
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            changeTheme("gray");
          }}
          style={{ marginRight: "26px" }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            changeTheme("pink");
          }}
        >
          Pink
        </button>
      </div>

      <h2 style={{ marginTop: "66px" }}>My name is {name}</h2>
      <button
        onClick={() => {
          changeName("Mohammed ali abdullah abdelfatah");
        }}
      >
        Change name
      </button>
      <br />
      <br />

      <h2>My Age is {age}</h2>
      <button
        onClick={() => {
          changeage("23");
        }}
      >
        Change Age
      </button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={()=>{counter(startCount + 1)}}>count is : {startCount}</button>
    </div>
  );
}

export default App;
