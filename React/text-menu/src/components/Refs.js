import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

// Mutable object that do not re-render
// direct control to dom
const Refs = () => {


    const [first, setFirst] = useState("")
    const ref = useRef(0)
    const ref2 = useRef()

    useEffect(() => {

        console.log("first")

    })

    console.log(ref2)

    return (
        <>
            <input type="text" onChange={e => {
                console.log(ref2)
                setFirst(e.target.value)
            }} value={first} />

            <button onClick={() => ref.current = ref.current + 1}>Click</button>
            <div>Refs: {ref.current}</div>

            <div ref={ref2}>this is ref experiment</div>
        </>
    )
}

export default Refs