import React from 'react';
import { Button, Flex, FormControl, FormHelperText, FormLabel, Input, Text, VStack, toasts, useToast, FormErrorMessage} from '@chakra-ui/react';
import Axios from 'axios'
import {API_URL} from '../../constants/API'
import {registerUser} from '../../redux/actions/user'
import {connect} from 'react-redux'

class SignUpForm extends React.Component{
    constructor(){
        super();
        this.state = {
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
    }


    inputHandler = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({[name] : value}, () => {this.validateFields(name,value)})
    }

    checkUsername = (value) => {
        if(value.match(/^[a-zA-Z0-9]+$/) && value.length > 0){
            return true;
        }
        return false;
    }

    checkEmail = (value) => {
        if(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length > 0){
            return true;
        }
        return false;
    }

    checkPassword = (value) => {
        if(value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/) && value.length > 0){
            return true;
        }
        return false
    }

    checkConfirmPassword = (value) => {
        if(value == this.state.password) {
            return true;
        }
        return false;
    }

    validateFields = (name, value) => {
        let fieldValidationErrors = this.state.formError;
        let usernameValid = this.state.usernameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirm_passwordValid = this.state.confirm_passwordValid;


        switch(name) {
            case 'username':
                usernameValid = this.checkUsername(value)
                fieldValidationErrors.username = usernameValid ? '' : 'Usernames should be unique.'
                break;
            case 'email':
                emailValid = this.checkEmail(value)
                fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
                break;
            case 'password':
                passwordValid =this.checkPassword(value)
                fieldValidationErrors.password = passwordValid ? '' : 'Contain at least 8 characters including an uppercase letter, a symbol, and a number.'

                break;
            case 'confirm_password':
                confirm_passwordValid = this.checkConfirmPassword(value)
                fieldValidationErrors.confirm_password = confirm_passwordValid ? '' : 'Password doesn\'t match'
                break;
        }

        this.setState({
            formErros : fieldValidationErrors,
            usernameValid : usernameValid,
            emailValid : emailValid,
            passwordValid: passwordValid,
            confirm_passwordValid : confirm_passwordValid
        }, this.validateForm)
    }

    validateForm = () => {
        this.setState({formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid && this.state.confirm_passwordValid})
    }

    onButtonSubmit= (e) => {
        e.preventDefault();
        const {username, email, password} = this.state;

        // POST AXIOS
        Axios.post(`${API_URL}/users`, {
            username,
            email,
            password,
            fullname: "",
            bio : "", 
            profile_picture : "",
            verifiedStatus: false
        })
        .then((respond) => {
            alert("Sucessfully Registered!")
        })
        .catch((error) => {
            alert("Failed to Registered!")
        })

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
                            value={this.state.username}
                            onChange={this.inputHandler}
                            width='550px'
                            
                        />
                        <FormHelperText>
                            Please enter the username you'd like to register
                        </FormHelperText>
                        <FormHelperText color='red.300' fontSize='12px'>
                            {this.state.formError.username}
                        </FormHelperText>
                    </FormControl>
    
                    <FormControl isRequired>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input id='email' 
                            name='email'
                            type='email'
                            value={this.state.email}
                            onChange={this.inputHandler}
                            
                        />
                        <FormHelperText>
                            Please enter the email you'd like to register
                        </FormHelperText>
                        <FormHelperText color='red.300' fontSize='12px'>
                            {this.state.formError.email}
                        </FormHelperText>
                    </FormControl>
    
    
                    <FormControl isRequired>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input id='password'
                            name='password'
                            type='password'
                            value={this.state.password}
                            onChange={this.inputHandler}
                        />
                        <FormHelperText>
                            Please enter the password
                        </FormHelperText>
                        <FormHelperText color='red.300' fontSize='12px'>
                            {this.state.formError.password}
                        </FormHelperText>
                    </FormControl>
    
                    <FormControl isRequired>
                        <FormLabel htmlFor='confirm_password'>Confirm Password</FormLabel>
                        <Input id='confirm_password'
                            name='confirm_password' 
                            type='password'
                            value={this.state.confirm_password}
                            onChange={this.inputHandler}
                        />
                        <FormHelperText>
                            Please enter password as same as before
                        </FormHelperText>
                        <FormHelperText color='red.300' fontSize='12px'>
                            {this.state.formError.confirm_password}
                        </FormHelperText>
                    </FormControl>
                    <Flex alignItems='center' justifyContent='center' flexDirection='row'>
                        <Button bg='white' color='#333333' w='300px' borderRadius='20' fontWeight='bold' mt='20px' onClick={() => this.props.registerUser(this.state.username, this.state.email, this.state.password)} disabled={!this.state.formValid}>
                            Sign Up
                        </Button>
                    </Flex>
                </VStack>
            </form>
        )
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = {
    registerUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
