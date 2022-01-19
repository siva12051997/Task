import React from "react";
import User from "./Components/User";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetailsPage from "./Components/UserDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route exact path="/details" element={<UserDetailsPage/>} />

        {/* <User /> */}
        {/* <UserDetails /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
