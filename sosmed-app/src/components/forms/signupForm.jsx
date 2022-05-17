import React from 'react';
import { Button, Flex, FormControl, FormHelperText, FormLabel, Input, Text, VStack, toasts, useToast} from '@chakra-ui/react';
import Axios from 'axios'
import {API_URL} from '../../constants/API'

class SignUpForm extends React.Component{
    
    state = {
        username:"",
        email: "",
        password:"",
        confirm_password: "",
        usernameValid: false,
        emailValid: false,
        passwordValid: false,
        confirm_passwordValid: false,
        formValid: false,
        formError:{username:'', email:'', password:'',confirm_password:''}
        
    }

    inputHandler = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({[name] : value}, () => {this.validateFields(name,value)})
    }

    checkEmail = (value) => {

    }

    validateFields = (name, value) => {
        let fieldValidationErrors = this.state.formError;
        let usernameValid = this.state.usernameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirm_passwordValid = this.state.confirm_passwordValid;

        switch(name) {
            case 'username':
                
                break;
            case 'email':
                break;
            case 'password':
                break;
            case 'confirm_password':
                break;
        }
    }

    onButtonSubmit= (e) => {
        e.preventDefault();
        // if(validation) {
            const {username, email, password} = this.state;

            // POST AXIOS
            Axios.post(`${API_URL}/users`, {
                username,
                email,
                password
            })
            .then((respond) => {
               alert("Sucessfully Registered!")
            })
            .catch((error) => {
                alert("Failed to Registered!")
            })
        // }

    }

    render() {
        return(
            <form>
                <VStack spacing='15px'>
                    <FormControl isRequired>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input id='username'
                            name='username' 
                            type='username'
                            onChange={this.inputHandler}
                            width='550px'
                            // pattern='^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$'
                        />
                        <FormHelperText>
                            Please enter the username you'd like to register
                        </FormHelperText>
                    </FormControl>
    
                    <FormControl isRequired>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input id='email' 
                            name='email'
                            type='email'
                            onChange={this.inputHandler}
                            // pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
                        />
                        <FormHelperText>
                            Please enter the email you'd like to register
                        </FormHelperText>
                    </FormControl>
    
    
                    <FormControl isRequired>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input id='password'
                            name='password'
                            type='password'
                            onChange={this.inputHandler}
                            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                            errorMessage=''
                        />
                        <FormHelperText>
                            Please enter the password
                        </FormHelperText>
                    </FormControl>
    
                    <FormControl isRequired>
                        <FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
                        <Input id='confirm-password'
                            name='confirm_password' 
                            type='password'
                            onChange={this.inputHandler}
                            // pattern={this.state.password}
                        />
                        <FormHelperText>
                            Please enter password as same as before
                        </FormHelperText>
                    </FormControl>
                    <Flex alignItems='center' justifyContent='center' flexDirection='row'>
                        <Button type='submit' bg='white' color='#333333' w='300px' borderRadius='20' fontWeight='bold' mt='20px' onClick={this.onButtonSubmit}>
                            Sign Up
                        </Button>
                    </Flex>
                </VStack>
            </form>
        )
    }
}

export default SignUpForm;


// CODE
// const [username, setUsername] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confPassword, setConfPassword] = useState("")
//     const toast = useToast()
//     const verified = false

//     const usernameError = ""
//     const emailError = ""
//     const passwordError = ""
//     const unmatchPassword = ""

//     // event

//     const validation = () => {
//         const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
//         if( username == "" || email == "" || password == "" || confPassword == ""){
//             return toast({
//                 title: 'There\'s Empty Fields.',
//                 description: "Please Fill Every Fields.",
//                 status: 'error',
//                 duration: 9000,
//                 isClosable: true
//             })
//         }
        
//         if(!patternEmail.test(email)){
//             return toast({
//                 title: 'Invalid Email',
//                 description: "Please Fill with Valid Email Address",
//                 status: 'error',
//                 duration: 9000,
//                 isClosable: true
//             })
//         }
//     }