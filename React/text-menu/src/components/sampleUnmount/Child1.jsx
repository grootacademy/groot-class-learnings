import React, { useEffect, useState } from 'react'

function Child1() {

    const [first, setFirst] = useState(0)

    useEffect(() => {
        console.log("first")
        return () => console.log("in Unmount")
    }, [])

    return (
        <div>
            <h1>
                in first {first}
            </h1>
            <button className='btn btn-outline-success' onClick={() => setFirst(e => e + 1)}>In One</button>
        </div>
    )
}

export default Child1