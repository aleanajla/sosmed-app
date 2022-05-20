const init_state = {
    username: "",
    email: "",
    password: "",
    fullname: "",
    bio : "", 
    profile_picture : "",
    verifiedStatus: false,
    id: 0,
    errMsg: "",
    storageIsChecked: false,
}

export default (state = init_state, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {...state, ...action.payload, storageIsChecked: true}
        case "USER_ERROR":
            return {...state, errMsg: action.payload}
        case "USER_LOGOUT":
            return {...init_state, storageIsChecked: true}
        case "CHECK_STORAGE":
            return {...state, storageIsChecked: true}
        case "USER_UPDATE":
            return{...state, storageIsChecked:true}
        default: 
            return state;
    }
}