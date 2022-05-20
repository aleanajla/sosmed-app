import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar';
import EditProfile from '../components/Profile/editProfile';

function Settings() {
    return (
        <Box>
            <Navbar/>
            <EditProfile/>
        </Box>
    )
}

export default Settings;