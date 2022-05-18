import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import PostPage from "./pages/PostPage";


import './styles/globals.css';

const App = () => {

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} ></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:username" element={<Profile />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/p/:id" element={<PostPage />}></Route>
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
