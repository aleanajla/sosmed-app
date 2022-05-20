import { 
    FormControl, 
    FormHelperText,
    FormLabel, 
    Input, 
    Box, 
    Flex,
    Text,
    Button, 
    VStack,
    Alert,
    AlertIcon,
    AlertTitle
} from "@chakra-ui/react";
import React from "react";
import { loginUserUsername, loginUserEmail } from '../../redux/actions/user'
import { connect } from 'react-redux'
import { Link, Navigate} from 'react-router-dom'

class LoginForm extends React.Component{
    constructor(){
        super();
        this.state = {
            username_email: "",
            password: "",
            username_emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    inputHandler = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({[name] : value}, () => {this.validationFields(name,value)})
    }

    validationFields = (name,value) => {
        let username_emailValid = this.state.username_emailValid
        let passwordValid = this.state.passwordValid

        switch(name) {
            case 'username_email':
                username_emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                break;
        }

        this.setState({
            username_emailValid: username_emailValid,
            passwordValid: passwordValid
        })
    }

    render(){
        if(this.props.userGlobal.id){
            return <Navigate replace to='/Home'/>
        }
        return (
            <form>
                <VStack spacing='15px'>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Email or Username">Username/Email</FormLabel>
                        <Input id="username"
                            type="text"
                            width='550px'
                            onChange={this.inputHandler}
                            value={this.state.username_email}
                            name="username_email"
                        />
                        <FormHelperText>
                            Please enter username/email that has been registered
                        </FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input id="password"
                            type="password"
                            onChange={this.inputHandler}
                            value={this.state.password}
                            name="password"
                        />
                        <FormHelperText>
                            Please enter password that has been registered
                        </FormHelperText>
                    </FormControl>
                    {
                        this.props.userGlobal.errMsg ? 
                        <Alert status='error'>
                            <AlertIcon />
                            <AlertTitle color='#212938'>{this.props.userGlobal.errMsg}</AlertTitle>
                        </Alert>
                        : null
                    }
                </VStack>
                <Box display='flex' flexDirection='row' mt='20px'>
                    <Text fontSize='16px' mr='10px'>Forgot Password?</Text>
                    <Text fontSize='16px' color='#7B61FF'>Reset Password</Text>
                    {/* <Link to='/'>Reset Password</Link> */}
                </Box>
                <Flex alignItems='center' justifyContent='center' flexDirection='column' mt='50px'>
                    <Button bg='white' color='#333333' w='300px' borderRadius='20' fontWeight='bold' mt='20px' onClick={() => this.state.username_emailValid ? this.props.loginUserEmail(this.state.username_email,this.state.password) : this.props.loginUserUsername(this.state.username_email,this.state.password)}>
                        Log In
                    </Button>
                </Flex>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user,
    };
}

const mapDispatchToProps = {
    loginUserEmail,
    loginUserUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);