import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar';

function Home (){
    return(
        <Box>
            <Navbar/>
            <Flex>
                <h1>HOME PAGE</h1>
            </Flex>
        </Box>
    )
}

export default Home;