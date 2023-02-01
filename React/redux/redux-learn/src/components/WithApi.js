import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAction } from '../redux/actions/getDataAction'

function WithApi() {

    const data = useSelector(e => e)

    console.log("in APP component", data)

    const dispatch = useDispatch()

    function getDataWithRedux() {
        dispatch(getDataAction())
    }

    return (
        <>
            <button onClick={getDataWithRedux}>Get data with redux</button>
        </>
    )
}

export default WithApi