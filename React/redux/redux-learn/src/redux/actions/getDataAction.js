export const getDataAction = () => {
    return async (dispatch) => {

        const res = await fetch("http://localhost:3003/api/notes/63d604db26c93cf46f65f7c7")

        const data = await res.json()

        dispatch(reduxThunk({ userdata: data }))

    }
}

export const clearApiDataAction = () => {
    return async (dispatch) => {

        dispatch(reduxThunk({ userdata: [] }))
        
    }
}

function reduxThunk(data) {
    return {
        type: "a",
        payload: data
    }
}
