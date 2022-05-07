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
  import { useNavigate } from 'react-router-dom'
  import { useState } from 'react'
  import { auth } from "../firebase_config/firebase";
  import { signOut } from 'firebase/auth'
  import React from "react";
  import { signInWithPopup } from "firebase/auth";
  import AllRoutes from "../react_components/AppRouters"
  
  export function Loginpage({ setIsAuth} : {setIsAuth: any} ) {
    const navigate = useNavigate()
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const toast = useToast()
  
    const { login, signInWithGoogle } = useAuth()


    
  
  
    return (
      <Layout>
        <Heading textAlign='center' my={14}>
          Login
        </Heading>
  
        <Card maxW='md' mx='auto' mt={4}>
          <chakra.form
            onSubmit={async e => {
              e.preventDefault()
              localStorage.setItem("isAuth", "true")
              setIsAuth(true)
              login(email, password)
              .then((response: any) => 
              {navigate('/');
              
              })
              .catch((error: any) => 
                      {
                      toast(
                        { description: error.message, 
                          status: 'error',
                          duration: 6000,
                          isClosable: true
                        })
                      }
                      )
            }}
          >
            <Stack spacing='6'>
              <FormControl id='email'>
                <FormLabel>Email address</FormLabel>
                <Input 
                  value={email} 
                  onChange={e=> setEmail(e.target.value)}
                  name='email' 
                  type='email' 
                  autoComplete='email' 
                  required />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  name='password'
                  type='password'
                  autoComplete='password'
                  required
                />
              </FormControl>
              <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
                Sign in
              </Button>
  
            </Stack>
          </chakra.form>
  
          <Button variant='solid'  
                  colorScheme='primary' 
                  isFullWidth 
                  my={6}
                  fontSize='md' 
                  onClick={() => navigate('/register')}>
              Register
          </Button>
      
          <Button
            variant='outline'
            isFullWidth
            colorScheme='primary'
            onClick={() => {
              signInWithGoogle()
              
              .then((response: any) => {
              navigate('/');
              localStorage.setItem("isAuth", "true");
              setIsAuth(true);})
              .catch((error:any) => console.log(error))
            
              }}
          >
            Sign in with Google
          </Button>
        </Card>
      </Layout>
    )
  
  }