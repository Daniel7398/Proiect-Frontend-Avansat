import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import { Home } from "../pages/HomePage" 
import { Loginpage } from "../pages/LoginPage"
import { Registerpage } from "../pages/RegisterPage"
import { Contactpage } from "../pages/ContactPage"
import { Pagenotfound } from "../pages/PageNotFound"
import CreateAd from "../pages/CreateAd";
import Adspage from "../pages/AdsPage";

import { useAuth } from "../contexts/AppContexts"
import { Navigate, Outlet } from 'react-router-dom'

import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase_config/firebase";

export default function AllRoutes(props: any) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth("false");
      window.location.pathname = "/login";
    });
  };

  return (
    <>
     <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adspage" element={<Adspage />} />
            <Route path="/createad" element={<CreateAd/>} />
            <Route path="/home" element={<Home  /> }/>
            <Route path="/login" element={<Loginpage setIsAuth={setIsAuth}/>}/>
            <Route path="/register" element={<Registerpage setIsAuth={setIsAuth}/>}/>
            <Route element={<RequireAuth />}>
              <Route path="/contact" element={<Contactpage isAuth={isAuth}/>}/>
            </Route>
            <Route path="*" element={<Pagenotfound/>}/>
          </Routes>
      </Router>
    </>
  )
}



function RequireAuth() {
  let { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
