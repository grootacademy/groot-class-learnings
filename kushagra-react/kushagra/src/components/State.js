import React, { useState } from 'react'

function State() {

    const [first, setFirst] = useState(12)
    const [forInput, setForInput] = useState("")

    let a = 34

    const clickHandler = () => {
        a++
        setFirst(first + 1)
    }

    const handleChange = (e) => {
        setForInput(e.target.value)
    }

    return (
        <>
            <div className='m-5'>
                <p>variable:  {a}</p>
                <p>state: {first}</p>
            </div>

            <button onClick={clickHandler}>Click</button>

            <p>
                <input type="text" onChange={handleChange} />
            </p>

            <p className='btn btn-info'>{forInput}</p>
        </>
    )
}

export default State