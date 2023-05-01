import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegistrationForm from "src/pages/UserRegistrationForm";
import UsersList from "src/pages/UsersList";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<UserRegistrationForm/>} />
        <Route path="/users" element={<UsersList/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
