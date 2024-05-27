import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Modal from "./components/modal/modal";
import Home from "./pages/home";
import LoginForm from "./pages/signIn";
import SignUpForm from "./pages/signUp";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
