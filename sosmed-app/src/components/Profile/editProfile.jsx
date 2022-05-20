import { Flex, FormControl, FormLabel, Input, Center, Avatar, VStack, Text, FormHelperText, Button} from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux'
import {updateProfile} from '../../redux/actions/user'

class EditProfile extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            fullname: "",
            bio: "",
            profile_picture: "",
            formError:{username:''},
            usernameValid: false
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

    validateFields = (name, value) => {
        let fieldValidationErrors = this.state.formError;
        let usernameValid = this.state.usernameValid;

        switch(name) {
            case 'username':
                usernameValid = this.checkUsername(value)
                fieldValidationErrors.username = usernameValid ? '' : 'Usernames should be unique.'
                break;
        }

        this.setState({
            formErros : fieldValidationErrors,
            usernameValid : usernameValid,
        })
    }

    render(){
        return(
            <Flex flexDirection='column' p='25px'>
                <Center>
                    <Flex>
                        <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                        <Flex flexDirection='column' ml='15px' justifyContent='center'>
                            <Text color='#212938' fontSize='28px' fontWeight='semibold'>{this.props.userGlobal.username}</Text>
                            <Text color='#7B61FF'>Change Profile Picture</Text>
                        </Flex>
                    </Flex>
                </Center>
                <Center mt='48px'>
                    <form>
                        <VStack spacing='15px'>
                            <FormControl>
                                <FormLabel>Fullname</FormLabel>
                                <Input
                                    id='fullname'
                                    name='fullname'
                                    type='fullname'
                                    width='550px'
                                    placeholder={this.props.userGlobal.fullname}
                                    onChange={this.inputHandler}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Bio</FormLabel>
                                <Input
                                    id='bio'
                                    name='bio'
                                    type='text'
                                    width='550px'
                                    placeholder={this.props.userGlobal.bio}
                                    onChange={this.inputHandler}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input
                                    id='username'
                                    name='username'
                                    type='username'
                                    width='550px'
                                    placeholder={this.props.userGlobal.username}
                                    onChange={this.inputHandler}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    disabled='true'
                                    placeholder={this.props.userGlobal.email}
                                    width='550px'
                                />
                                <FormHelperText>
                                    Cannot be edited
                                </FormHelperText>
                            </FormControl>
                            <Flex alignItems='center' justifyContent='center' flexDirection='row'>
                                <Button colorScheme='blue' w='300px' borderRadius='20' fontWeight='bold' mt='20px' onClick={() => updateProfile(this.props.userGlobal.id,this.state.username, this.state.bio, this.state.fullname, this.state.profile_picture)}>
                                    Save Changes
                                </Button>
                            </Flex>
                        </VStack>
                    </form>
                </Center>
            </Flex>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user
    } 
}

const mapDispatchToProps = {
    updateProfile
}

export default connect(mapStateToProps)(EditProfile);