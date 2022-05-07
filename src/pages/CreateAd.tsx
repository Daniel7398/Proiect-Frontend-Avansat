import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase_config/firebase";
import { useNavigate } from "react-router-dom";
import AllRoutes from "../react_components/AppRouters"
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast
} from '@chakra-ui/react'

import { Layout } from '../react_components/Layout'
import { Card } from '../react_components/Card' 
import { useAuth } from '../contexts/AppContexts'
import { signOut } from 'firebase/auth'
import { signInWithPopup } from "firebase/auth";


function CreateAd() {
  const [title, setTitle] = useState("");
  const [adText, setAdText] = useState("");

  const adsCollectionRef = collection(db, "ads");
  let navigate = useNavigate();

  const createAd = async () => {
    await addDoc(adsCollectionRef, {
      title,
      adText,
    });
    navigate('/contact');   
  }

  

  return (
    <Layout>

  
    <div className="createAdPage">
      <div className="cpContainer">
        <h1>Create An Ad</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Ad:</label>
          <textarea
            placeholder="Ad..."
            onChange={(event) => {
              setAdText(event.target.value);
            }}
          />
        </div>
        <button onClick={createAd}> Submit </button>
      </div>
    </div>
    </Layout>
  );
  
}

export default CreateAd;