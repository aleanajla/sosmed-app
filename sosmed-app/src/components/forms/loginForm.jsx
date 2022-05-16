import { FormControl, FormHelperText, FormLabel, Input, Box, Flex,Text,Button, VStack, Spacer } from "@chakra-ui/react";
import React from "react";


function LoginForm(){

    return (
        <form>
            <VStack spacing='15px'>
                <FormControl isRequired>
                    <FormLabel htmlFor="Email or Username">Username/Email</FormLabel>
                    <Input id="username"
                        type="text"
                        width='550px'
                    />
                    <FormHelperText>
                        Please enter username/email that has been registered
                    </FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input id="password"
                        type="password"
                    />
                    <FormHelperText>
                        Please enter password that has been registered
                    </FormHelperText>
                </FormControl>
            </VStack>
            <Box display='flex' flexDirection='row' mt='20px'>
                <Text fontSize='16px' mr='10px'>Forgot Password?</Text>
                <Text fontSize='16px' color='#7B61FF'>Reset Password</Text>
                {/* <Link to='/'>Reset Password</Link> */}
            </Box>
            <Flex alignItems='center' justifyContent='center' flexDirection='column' mt='50px'>
                <Button type='submit' bg='white' color='#333333' w='300px' borderRadius='20' fontWeight='bold' mt='20px'>
                    Log In
                </Button>
            </Flex>
        </form>
    )
}

export default LoginForm;