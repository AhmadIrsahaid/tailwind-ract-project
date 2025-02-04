import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import About from "./pages/About/About.jsx";
import Contant from "./pages/contant/Contant.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/contant" element={<Contant/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
