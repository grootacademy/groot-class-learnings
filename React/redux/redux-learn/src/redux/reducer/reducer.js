const initialState = {
    num: 0,
    age: 12
}

export const reducer = (state = initialState, action) => {

    if (action.type == "increase") {
        return {
            ...state,
            num: state.num + 5,
            age: state.age + 1
        }
    }

    if (action.type == "decrease") {
        return {
            ...state,
            num: state.num - 5,
            age: state.age - 1
        }
    }

    return state
}