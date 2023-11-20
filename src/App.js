import React, {useState} from "react";
import './App.css';
import NavBar from "./components/navegation/navegation_bar";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import * as PropTypes from "prop-types";
import SingUp from "./pages/singUp/singUp";
import SingIn from "./pages/singIn/singIn";
import Language from "./pages/language/language";
import NotFound from "./pages/notFound/notfound";
import Logo from "./assets/Logo.jpg";
import {Navigate, Route, Routes, Router} from "react-router-dom";

function App() {
  const [player, setPlayer] = useState('');
  const isSingUp = true;
  return (
      <>
        <NavBar
            image={Logo}
            singUp = {"Register"}
            singIn = {"LogIn"}
            language = {"Language"}
        />

        <Footer/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/singup" element={<SingUp/>}/>
          <Route path="/singin" element={isSingUp === true ? <SingIn/> : <Navigate to="/singup"/>}/>
          <Route path="/language" element={<Language/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </>
  );
}

export default App;
