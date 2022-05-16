import React from 'react'
import Login from './pages/login'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import SignUp from './pages/signup';

function Main() {
    return(
       <>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/SignUp' element={<SignUp/>}/>
            </Routes>
       </>
    );

}

export default Main