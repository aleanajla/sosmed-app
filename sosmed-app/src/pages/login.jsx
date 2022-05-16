import React from 'react'
import { Box, Center, Flex, Spacer, Text, Image} from "@chakra-ui/react";
import LoginForm from '../components/forms/loginForm'
import { signinIMG } from '../assets';
import { Link } from "react-router-dom";

const linkStyle = {
    color :'#7B61FF',
    fontWeight: 'bold'
}

function Login(){
    return(
        <Flex h='100vh' w='full' flexDirection='row' alignItems='center' justifyContent='center'>
            <Center display='flex' w='45%' alignItems='center' flexDirection='column'>
                <img src={signinIMG} width='416px' height='383px' mb='20px'/>
                <Text fontSize='32px' fontWeight='bold'>WELCOME BACK!</Text>
                <Text fontSize='16px' color='#00000096'>Sign in to explore the changes and updates in Social Media!</Text>
            </Center>
            <Spacer/>
            <Center bg='#333333' overflow='hidden' h='100%' color='white' w='65%' alignItems='center' flexDirection='column'>
                <Flex flexDirection='column'>
                    <Box mb='31px'>
                        <Text fontSize='48px' fontWeight='bold'>Log In</Text>
                        <Text fontSize='16px' color='#FFFFFFB2'>Welcome back! Please enter your details</Text>
                    </Box>
                    <LoginForm/>
                </Flex>
                <Box display='flex' flexDirection='row' mt='20px'>
                    <Text fontSize='16px'  mr='10px'>Don't have an account?</Text>
                    {/* <Text fontSize='16px' color='#7B61FF'>Sign Up</Text> */}
                    <Link to='/SignUp' style={linkStyle}>Sign Up</Link>
                </Box>
            </Center>
        </Flex>
    )
}

export default Login;