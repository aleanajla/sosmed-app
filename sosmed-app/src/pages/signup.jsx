import { Box, Center, Flex, Spacer, Text} from "@chakra-ui/react";
import React from "react";
import SignUpForm from "../components/forms/signupForm";
import { signupIMG } from "../assets";


function SignUp(){
    return (
        <Flex h='100vh' w='full' flexDirection='row' alignItems='center' justifyContent='center'>
            <Center display='flex' w='45%' alignItems='center' flexDirection='column'>
                <img src={signupIMG} width='416px' height='383px' mb='20px'/>
                <Text fontSize='32px' fontWeight='bold'>WELCOME TO SOCIAL MEDIA!</Text>
                <Text fontSize='16px' color='#00000096'>To access all the feature in Social Media, please sign up your personal account</Text>
            </Center>
            <Spacer/>
            <Center bg='#333333' overflow='hidden' h='100%' color='white' w='65%' alignItems='center'>
                <Flex flexDirection='column'>
                    <Box mb='31px'>
                        <Text fontSize='48px' fontWeight='bold'>Create Account</Text>
                        <Text fontSize='16px' color='#FFFFFFB2'>Please fill every fields with your personal data</Text>
                    </Box>
                    <SignUpForm/>
                </Flex>
            </Center>
        </Flex>
    )
}

export default SignUp;