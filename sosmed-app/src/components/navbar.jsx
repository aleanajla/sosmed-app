import React from "react";
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Stack,
    Center,
    Text
} from '@chakra-ui/react';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  { LOGO } from '../assets'
import {logoutUser} from '../redux/actions/user'

const linkStyle = {
    color :'white'
}

class Navbar extends React.Component {
    render() {
        return(
            <Box px={18} bg='#212938'>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
                <img src={LOGO} width='108px' height='19px'/>
            </Box>
          
            <Flex alignItems={'center'}>
                <Stack direction={'row'} spacing={7}>
                {
                    this.props.userGlobal.username?
                    <>
                        <Text color='white'>Upload</Text>
                        <Menu>
                            <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                                <Text color='white'>{this.props.userGlobal.username}</Text>
                            </MenuButton>
                            <MenuList alignItems={'center'}>
                            <br />
                            <Center>
                                <Avatar
                                size={'2xl'}
                                src={'https://avatars.dicebear.com/api/male/username.svg'}
                                />
                            </Center>
                            <br />
                            <Center>
                                <Text>{this.props.userGlobal.username}</Text>
                            </Center>
                            <br />
                            <MenuDivider />
                            <MenuItem><Link to='/Settings'>Settings</Link></MenuItem>
                            <MenuItem onClick={this.props.logoutUser}>Log Out</MenuItem>
                            </MenuList>
                        </Menu>
                    </>
                    :
                    <>
                        <Link to='/SignUp' style={linkStyle}>Sign Up</Link>
                        <Text style={linkStyle}>|</Text>
                        <Link to='/' style={linkStyle}>Log In</Link>
                    </>
                }
                </Stack>
            </Flex>
            </Flex>
        </Box>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user
    } 
}

const mapDispatchToProps = {
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);