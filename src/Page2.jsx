import React from "react";
import "./App.css";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";
const Page2 = () => {
  const { name , theme} = useContext(DataContext);

  return (
    <div>
      <div className={`App ${theme}`}>
        <h1> Welcome to page2</h1>
        <h1> My name is : {name}</h1>

        <Link className="link" to="/Page3" style={{ marginBottom: "44px" }}>
          Go to Page3
        </Link>
        <br />
        <br />
        <Link className="link" to="/" style={{ marginBottom: "44px" }}>
          Go to Home page
        </Link>
      </div>
    </div>
  );
};
export default Page2;
