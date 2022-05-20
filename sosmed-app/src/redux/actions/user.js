import Axios from "axios";
import {API_URL} from '../../constants/API'

export const registerUser = (username, email, password) => {
    return (dispatch) => {
        Axios.post(`${API_URL}/users`, {
            username,
            email,
            password,
            fullname: "",
            bio : "", 
            profile_picture : "",
            verifiedStatus: false
        })
        .then((result) => {
            delete result.data.password
            
            dispatch({
                type : "USER_LOGIN",
                payload: result.data
            })
            alert("Sucessfully Registered!")
        })
        .catch((error) => {
            alert("Failed to Registered!")
        })
    }
}

export const loginUserUsername = (username_email, password) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
                username : username_email,
            }
        })
        .then((result) => {
            if(result.data.length){
                if(result.data[0].password === password){
                    delete result.data[0].password
                    localStorage.setItem("userDataSocialMedia", JSON.stringify(result.data[0]))
                    dispatch({
                        type: "USER_LOGIN",
                        payload: result.data[0]
                    })
                }
                else{
                    dispatch({
                        type: "USER_ERROR",
                        payload: "Wrong Password! Please enter the correct password"
                    })
                }
            }
            else {
                dispatch({
                    type: "USER_ERROR",
                    payload: "User Not Found! Please enter correct user data"
                })

            }
        })
        .catch((err) => {
            alert("Invalid Data to Log In")
        })
    }
}

export const loginUserEmail = (username_email, password) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
                email : username_email,
            }
        })
        .then((result) => {
            if(result.data.length){
                if(result.data[0].password === password){
                    delete result.data[0].password
                    localStorage.setItem("userDataSocialMedia", JSON.stringify(result.data[0]))
                    dispatch({
                        type: "USER_LOGIN",
                        payload: result.data[0]
                    })
                }
                else{
                    dispatch({
                        type: "USER_ERROR",
                        payload: "Wrong Password! Please enter the correct password"
                    })
                }
            }
            else {
                dispatch({
                    type: "USER_ERROR",
                    payload: "User Not Found! Please enter correct user data"
                })
            }
        })
        .catch((err) => {
            alert("Terjadi kesalahan di server")
        })
    }
}

export const logoutUser = () => {
    localStorage.removeItem("userDataSocialMedia");
    
    return {
        type: "USER_LOGOUT"
    }
}

export const userKeepLogin = (userData) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
                id: userData.id
            }
        })
        .then((result) => {
            delete result.data[0].password
            localStorage.setItem("userDataSocialMedia", JSON.stringify(result.data[0]))
            dispatch({
                type: "USER_LOGIN",
                payload: result.data[0]
            })
        })
        .catch(()=>{
            alert("Terjadi kesalahan di server")
        })
    }
}

export const checkStorage = () => {
    return {
        type: "CHECK_STORAGE",
    }
}

export const updateProfile = (id, username, bio, fullname, profile_picture) => {
    return (dispatch) => [
        Axios.put(`${API_URL}/users`, {
            params: {
                id: id
            }
        }, 
        {
            username: username,
            bio: bio,
            fullname: fullname,
            profile_picture: profile_picture
        }
        )
        .then((result) => {
            dispatch({
                type: "username",
                payload: result.data
            })
        })
        .catch((err) => {
            alert("Adanya kesalahan")
        })
    ]
}

