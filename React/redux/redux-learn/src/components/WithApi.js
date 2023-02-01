import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearApiDataAction, getDataAction } from '../redux/actions/getDataAction'

function WithApi() {

    const data = useSelector(e => e)

    const dispatch = useDispatch()

    function getDataWithRedux() {
        dispatch(getDataAction())
    }

    function clearWithRedux() {
        dispatch(clearApiDataAction())
    }



    return (
        <>
            <button onClick={getDataWithRedux}>Get data with redux</button>
            <button onClick={clearWithRedux}>Clear data</button>
            <br /><br />
            {JSON.stringify(data.reducer.userdata)}
        </>
    )
}

export default WithApi