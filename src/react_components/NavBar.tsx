import {
  Box,
  HStack,
  Spacer,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../contexts/AppContexts'
import Navlink from './NavLink'

export function Navbar() {
  const { currentUser, logout } = useAuth()

  return (
    <Box
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
    >
      <HStack py={4} justifyContent='flex-end' maxW='container.lg' mx='auto'>
        <Navlink to='/' name='Home' />
        <Spacer />
        { !currentUser ? 
            <>
            <Navlink to='/login' name='Login' />
            <Navlink to='/register' name='Register' />
            <Navlink to='/contact' name='Contact' />
            <Navlink to='/adspage' name='Ads' />
            </>
          :
            <>
            <Navlink to='/contact' name='Contact' />
            <Navlink to='/createad' name='CreateAd' />
            <Navlink to='/adspage' name='Ads' />
              <Button
                variant='ghost'
                onClick={(e: any) => {
                  e.preventDefault()
                  // handle logout
                  logout()
                }
                }
              >
                Logout
              </Button>
            </>
        }
    
      </HStack>

    </Box>
  )
}
