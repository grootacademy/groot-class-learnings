import { useState } from 'react'

function TextMenu() {

    const [text, setText] = useState("");

    function handleText(e) {
        setText(e.target.value);
    }

    function toUpperCase() {
        setText(text.toUpperCase());
    }

    function toLowerCase() {
        setText(text.toLowerCase());
    }

    function doClear() {
        setText("");
    }

    function doCopy() {
        navigator.clipboard.writeText(text);
    }

    function doCut() {
        navigator.clipboard.writeText(text);
        setText("");
    }

    function doDuplicate() {
        setText(text + text);
    }

    return (

        <>
            <div className='outer'>
                <section className='sec1'>
                    <div className='box back_color'>
                        <h3>Summery</h3>
                        <p>Charactors: {text.length}</p>
                        <p>Words: {text.split(" ").length}</p>
                    </div>
                    <div className='center_box'>
                        <button onClick={toUpperCase}>UPPERCASE</button>
                        <button onClick={toLowerCase}>lowercase</button>
                        <button onClick={doClear}>Clear</button>
                        <button onClick={doCopy}>Copy</button>
                        <button onClick={doCut}>Cut</button>
                        <button onClick={doDuplicate}>Duplicate</button>
                     
                    </div>
                    <textarea className='box back_color' placeholder='Type Here' value={text} onChange={handleText} />
                </section>
            </div>

            <div className='outer'>
                <section className='sec1 sec2 '>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </section>
            </div>
        </>

    )
}

export default TextMenu