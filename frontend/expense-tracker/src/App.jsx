import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import UserProvider from './context/userContext'
import Login from './pages/Auth/Login';
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import {Toaster} from "react-hot-toast";
import Loader from './components/Loader';

const App = () => {
  const [backendReady, setBackendReady] = useState(false);
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL || 'https://expense-tracker-1-p35i.onrender.com'}/api/v1/health`
        );
        const data = await res.json();
        if (data.status === 'ok') setBackendReady(true);
      } catch {
        setBackendReady(false);
      }
    };
    checkHealth();
  }, []);

  if (!backendReady) return <Loader />;

  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
        </Router>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px"
          },
        }}
      />
    </UserProvider>
  );
}

export default App

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  )
}