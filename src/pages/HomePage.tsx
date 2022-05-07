import {
  Heading, 
  Icon,
  IconButton,
  Button,
  VStack, 
  Stack,
  Spacer,
  Box,
  Flex,
  Text
} from '@chakra-ui/react'

import { Layout } from '../react_components/Layout'

import { FaCarAlt} from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaAirFreshener } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { FaWeightHanging } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";

export function Home() {

  return (
    <Layout>
      <Heading textAlign='center' my={14} fontWeight='semibold'>
        <Stack>
            <Flex alignSelf="center">
              
                <Text fontWeight='bold' bgGradient="linear(to-r, red.500, yellow.300, green.200)" bgClip="text">Hi everyone, <br/>Welcome to our website!</Text>

            </Flex>
        </Stack>
      </Heading>


      <br></br>
      <br></br>
      <br></br>

      <VStack>
        <Text className = "texts">
          Here you can find all kind of ads from many people. Do you want to buy a new car?
          <br></br>
          Here you can do it!
          <br></br>
          Do you want a new wash machine?
          <br></br>
          Guess what, definetly someone on this site wants to sell one!
        </Text>
        <br></br>
        <br></br>
        <br></br>

        
        
        <Text className = "texts1">
          There are some of the categories of items that you buy on our website:
        </Text>

        <Flex w="100%">
        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaCarAlt} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Cars
            </Text>
            </div>
          </Flex>
        </Box>

        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaPlaystation} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Playstations
            </Text>
            </div>
          </Flex>
        </Box>

        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaAirFreshener} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Frangrance
            </Text>
            </div>
          </Flex>
        </Box>

        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaBicycle} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Bicycles
            </Text>
            </div>
          </Flex>
        </Box>

        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaBasketballBall} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Sport Items
            </Text>
            </div>
          </Flex>
        </Box>
        </Flex>
        <Flex w="100%">

        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaChessKing} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Board games
            </Text>
            </div>
          </Flex>
        </Box>
        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaWeightHanging} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Gym weights
            </Text>
            </div>
          </Flex>
        </Box>
        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaCat} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Pet stuff
            </Text>
            </div>
          </Flex>
        </Box>

        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaBeer} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Alcohol
            </Text>
            </div>
          </Flex>
        </Box>

        <Box alignSelf="center" w="20%" px="3" py="12">
          <Flex rounded="xl" direction="column" mt={4} bg="red.500" h="30vh" justify="flex-end">
            <div className = "categories">
            <Icon color="white" p="4" as={FaBabyCarriage} w="24" h="24" />
            <Text color="white" p="4" fontSize="s" fontWeight="semibold">
            Baby stuff
            </Text>
            </div>
          </Flex>
        </Box>

        </Flex>

        <br></br>
        <br></br>

        <Text className='texts'>
        Of course that you can sell your own stuff on our website!
        </Text>

        <br></br>
      </VStack>


      <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="20" px={{ base: '4', md: '8' }}>
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Icon color="white" p="4" as={FaCarAlt} w="24" h="24" />
        </Stack>
        <Text alignSelf={{ base: 'center', sm: 'start' }} > We recommend you to create an account so you can add your own ads! </Text>
      </Stack>
    </Box>

    </Layout>
  )
}