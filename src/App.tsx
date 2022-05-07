import React, { useState } from 'react'
import AllRoutes from "./react_components/AppRouters"
import { AuthContextProvider } from './contexts/AppContexts';
import { signOut } from 'firebase/auth';
import { auth } from './firebase_config/firebase';

function App() {

  
  return (
      <AuthContextProvider>
        <AllRoutes/>
      </AuthContextProvider>
  );
}

export default App;
