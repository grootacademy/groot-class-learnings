import { loginService, signupService } from "../services/auth.service"

// Action for login
export const authActionLogin = (data) => {
    return dispatch => {
        loginService(data).then((loginErr) => {
            dispatch(dispatchFunction({loginErr}))
        })
    }
}

// Action for signup
export const authActionSignup = (data) => {
    return dispatch => {
        signupService(data).then((signupErr) => {
            dispatch(dispatchFunction({signupErr}))
        })
    }
}


function dispatchFunction(data) {
    return {
        type: "a",
        payload: data
    }
}