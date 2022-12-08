import React from 'react'
import { useState } from 'react';

function Calculator() {
    const [num, setNum] = useState();
    const [result, setResult] = useState(0);

    function add() {
        setResult(result + num);
        setNum('');
    }

    return (
        <>
            <input type="number" className='mx-3' value={num} onChange={(e) => setNum(parseInt(e.target.value))} />
            <button onClick={add}>+</button>
            <b>Result: {result}</b>
        </>
    )
}

export default Calculator