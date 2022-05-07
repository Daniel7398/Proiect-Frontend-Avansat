import { Layout } from '../react_components/Layout'
import {  
  chakra,
  Container, 
  Heading } from '@chakra-ui/react'
import { useAuth } from '../contexts/AppContexts'

export function Contactpage({ isAuth }: {isAuth: any}) {
  const { currentUser } = useAuth()

  return (
    <Layout>
      <Heading>
        Contact page
      </Heading>
      
      <Container maxW='container.lg' overflowX='auto' py={4}>
      <br></br>
      You can find us on yahoo, gmail or via phone.
      <br></br>
      We'll try to respond to you as soon as possible, from monday to friday between 8 AM and 5 PM.
      <br></br>
      <br></br>
      <br></br>
      Yahoo: daniel.dani7398@yahoo.com
      <br></br>
      <br></br>
      <br></br>
      Gmail: daniel.dani7398@gmail.com
      <br></br>
      <br></br>
      <br></br>
      Phone: (+40) 743 337 943.
      <br></br>
      <br></br>
      <br></br>
      Of course that you can visit us at our location: Bucuresti, Sectorul 3, Str. Aleea Argintului, nr. 8.
      <br></br>
      </Container>
    </Layout>
  )
}