import React, { useEffect, useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function SampleUnmount() {

    const [tab, setTab] = useState(1)



    return (
        <div>
            <h1>{tab}</h1>
            <button className='btn btn-outline-dark' onClick={() => setTab(1)}>1</button>
            <button className='btn btn-outline-dark' onClick={() => setTab(2)}>2</button>

            {tab === 1 && <Child1 />}
            {tab === 2 && <Child2 />}

        </div >
    )
}

export default SampleUnmount