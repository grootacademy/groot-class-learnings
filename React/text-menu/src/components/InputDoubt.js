import React from 'react'
import { useState } from 'react'

function InputDoubt() {
    const [data, setData] = useState({})

    function handleInput(e) {
        setData({
            title: e.target.value,
            description: data.descption
        })
    }

    function handleDesc(e) {
        setData({
            title: data.title,
            description: e.target.value
        })
    }

    return (
        <>

            <input type="text" onChange={handleInput} value={data?.title} />
            <input type="text" onChange={handleDesc} value={data?.description} />

            <p>{data?.title}</p>
            <p>{data?.description}</p>

            <button onClick={() => setData({})}>Click</button>

        </>
    )
}

export default InputDoubt