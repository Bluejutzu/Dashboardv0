/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header from "./components/Header";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Verification from "./pages/Verification";
import Projects from "./pages/Projects";
import "./styles/App.css";

function App() {
  const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    zIndex: "2",
    background: ""
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.classList.add("loading");
    } else {
      document.body.classList.remove("loading");
    }
  }, [loading]);

  return (
    <Router>
      <div className='App'>
        {loading ? (
          <ClimbingBoxLoader
            cssOverride={override}
            color='#a7763e'
            size={30}
          />
        ) : (
          <header>
            <Header />
            <Routes>
              <Route path='/news' element={<News />} />
              <Route path='/verification' element={<Verification />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </header>
        )}
      </div>
    </Router>
  );
}

export default App;
