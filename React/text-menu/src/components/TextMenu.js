import { useState } from 'react'

function TextMenu() {

    // let a = "tapan";
    // let b = "mohan"

    // const [c, setc] = useState("sharma");

    // function clickHandle() {
    //     a = "is";
    //     setc("mishra")
    //     console.log(a)
    // }

    // Over

    const [num, setNum] = useState(0);

    function increase() {
        setNum(num + 1);
    }

    function decrease() {
        setNum(num - 1);
    }

    function refresh() {
        window.location.reload();
    }


    return (

        <>
            <div className='text-center'>

                {/* <div>a: {a}</div>

                <div>b: {b}</div>
                <div>c: {c}</div> */}

                <div>num: {num}</div>

            </div>

            <div className='d-flex justify-content-center my-5'>
                {/* <button className='btn btn-info ' onClick={clickHandle}>Click</button> */}
                <button className='btn btn-info mx-2' onClick={decrease}>Decrease</button>
                <button className='btn btn-info mx-2' onClick={increase}>Increase</button>
                <button className='btn btn-info mx-2' onClick={refresh}>Refresh</button>
            </div>
        </>

    )
}

export default TextMenu