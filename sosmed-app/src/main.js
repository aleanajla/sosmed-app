import React from 'react'
import Login from './pages/login'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import SignUp from './pages/signup';
import Settings from './pages/settings';
import Home from './pages/home';
import Header from './components/navbar';
import {connect} from 'react-redux'
import {userKeepLogin, checkStorage} from './redux/actions/user'

class Main extends React.Component {

    componentDidMount= () => {
        const userLocalStorage = localStorage.getItem("userDataSocialMedia")

        if(userLocalStorage){
            const userData = JSON.parse(userLocalStorage)
            this.props.userKeepLogin(userData);
        }
        else{
            this.props.checkStorage();  
        }
    }
    render(){
        if(this.props.userGlobal.storageIsChecked) {
            return(
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login/>} />
                        <Route path='/SignUp' element={<SignUp/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/Home' element={<Home/>} />
                    </Routes>
                </BrowserRouter>
            );
        }
        else{
            <div>Loading...</div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal : state.user,
    }
}

const mapDispatchToProps = {
    userKeepLogin,
    checkStorage
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);