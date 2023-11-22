import React from "react";
import { Container } from "react-bootstrap";
//import AuthProvider from "./Context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User.jsx"
import Login from "./components/Login";
import Votepage from "./components/Votepage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <div className="w-100">
            <Routes>
              <Route exact path="/" element={<User />} />
              <Route path="/login" element={<Login />} />
              <Route path="/votepage" element={<Votepage />} />
            </Routes>
          </div>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
