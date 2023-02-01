const initialState = {

    num: 0

}

export const reducer = (state = initialState, action) => {


    return { ...state, ...action.payload }
}