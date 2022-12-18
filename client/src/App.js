import React from "react";
import Home from "./Components/Home";
import Messages from "./Pages/Messages";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
        <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
    </>
  );
}

export default App;
