const initialState = 0

export const reducer = (state = initialState, action) => {

    if (action.type == "increase") {
        state += 5
    }

    if (action.type == "decrease") {
        state -= 5
    }
    
    console.log(state)

    return state
}