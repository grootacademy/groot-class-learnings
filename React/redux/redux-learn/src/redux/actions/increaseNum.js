export const increaseNum = () => {

    // console.log("in action", data)

    // // return {
    // //     type: "a",
    // //     payload: {
    // //         num: 7
    // //     }
    // // }


    return async dispatch => {

        const res = await fetch("http://localhost:3003/api/notes/63d604db26c93cf46f65f7c7")

        const data = await res.json()

        dispatch(reduxThunk(data))

    }

}


export const decreaseNum = () => {
    return {
        type: "a",
        payload: {
            num: 3
        }
    }
}


function reduxThunk(data) {
    return {
        type: "a",
        payload: data
    }
}
