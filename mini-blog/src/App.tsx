import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";
import type { User } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { logout } from "./redux/userSlice";
import { persistor } from "./redux/storeConfig";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header user={user} onLogout={handleLogout} />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
