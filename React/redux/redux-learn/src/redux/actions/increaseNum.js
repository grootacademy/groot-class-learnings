export const increaseNum = () => {

    return async (dispatch, getState) => {

        let store = getState()
        let num = store.reducer.num


        dispatch(reduxThunk({ num: num + 5 }))
    }

}


export const decreaseNum = () => {

    return async (dispatch, getState) => {
        let store = getState()
        let num = store.reducer.num

        dispatch(reduxThunk({ num: num - 5 }))
    }

}



function reduxThunk(data) {
    return {
        type: "a",
        payload: data
    }
}
