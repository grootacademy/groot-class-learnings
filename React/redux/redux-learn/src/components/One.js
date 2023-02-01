import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseNum, increaseNum } from '../redux/actions/increaseNum'

function One() {

   
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(increaseNum())
    }

    const decrease = () => {
        dispatch(decreaseNum())
    }

    return (

        <>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>

        </>
    )
}

export default One