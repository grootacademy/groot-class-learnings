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

    const [mytext, setMytext] = useState("");

    function handleText(e) {
        setMytext(e.target.value);
    }


    return (

        <>
            <section className='d-flex align-items-center flex-column p-4' style={{background:"gray"}}>

              <textarea  cols="80" rows="7" onChange={handleText} value={mytext}></textarea>

                <h3 className='text-dark mt-5 this_is'>Preview</h3>
                <p>{mytext}</p>

                <h2>{mytext}</h2>

            </section>
        </>

    )
}

export default TextMenu