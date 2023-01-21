
const initialState = {
    loginErr: {
        errors: []
    },
    signupErr: {
        errors: []
    }
}
export const myreducer = (state = initialState, { payload }) => {
    console.log("reducer")
    return { ...state, ...payload }
}
