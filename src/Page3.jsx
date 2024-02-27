import React from "react";
import "./App.css";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";
const Page3 = () => {
    const { name , theme} = useContext(DataContext);
  return (
    <>
      <div className={`App ${theme}`}>
        <h1> Welcome to page3</h1>
        <Link className="link" to="/Page2" style={{ marginBottom: "44px" }}>
          Go to page2
        </Link>
      </div>
    </>
  );
};

export default Page3;
