import { useState } from 'react'

function TextMenu(props) {

    const [text, setText] = useState("");

    function handleText(e) {
        setText(e.target.value);
    }

    function toUpperCase() {
        setText(text.toUpperCase());
        props.setMessage("🙂Hurre!! Successfully converted to UPPERCASE");
        props.foralert();
    }

    function toLowerCase() {
        setText(text.toLowerCase());
        props.setMessage("🙂Hurre!! Successfully converted to lowercase");
        props.foralert();
    }

    function doClear() {
        setText("");
        props.setMessage("🙂Hurre!! Successfully cleared");
        props.foralert();
    }

    function doCopy() {
        navigator.clipboard.writeText(text);
        props.setMessage("🙂Hurre!! Successfully coppied");
        props.foralert();
    }

    function doCut() {
        navigator.clipboard.writeText(text);
        setText("");
        props.setMessage("🙂Hurre!! Successfully cut");
        props.foralert();
    }

    function doDuplicate() {
        setText(text + text);
        props.setMessage("🙂Hurre!! Successfully duplicated");
        props.foralert();
    }

    function test() {

        // console.log(text.split(" "));
        console.log(text.split(" ").filter(e => e !== '').length);

        // let arr = [1, 584, 18, 18, 12, 4, 18, 42]

        // console.log(arr)
        // console.log(arr.filter(e => e < 15));

    }


    return (
        <>
            <div className={`pt-3 ${props.mode == "dark" && "d_backGround"}`}>

                <div className={`outer ${props.mode == "dark" && "d_backGround"}`} >
                    <section className={`sec1 ${props.mode == "dark" && "d_backGround"}`}>
                        <div className={`box back_color ${props.mode == "dark" && "d_backGround"}`}>
                            <h3>Summery</h3>
                            <p>Charactors: {text.length}</p>
                            <p>Words: {text.split(" ").filter(e => e !== '').length}</p>
                        </div>
                        <div className='center_box '>
                            <button onClick={toUpperCase} className={`${props.mode == "dark" && "d_backGround"}`}>UPPERCASE</button>
                            <button onClick={toLowerCase} className={`${props.mode == "dark" && "d_backGround"}`}>lowercase</button>
                            <button onClick={doClear} className={`${props.mode == "dark" && "d_backGround"}`}>Clear</button>
                            <button onClick={doCopy} className={`${props.mode == "dark" && "d_backGround"}`}>Copy</button>
                            <button onClick={doCut} className={`${props.mode == "dark" && "d_backGround"}`}>Cut</button>
                            <button onClick={doDuplicate} className={`${props.mode == "dark" && "d_backGround"}`}>Duplicate</button>
                            <button onClick={test} className={`${props.mode == "dark" && "d_backGround"}`}>Test</button>
                        </div>
                        <textarea className={`box back_color ${props.mode == "dark" && "d_backGround"}`} placeholder='Type Here' value={text} onChange={handleText} />
                    </section>
                </div>



                <div className={`outer ${props.mode == "dark" && "d_backGround"}`}>
                    <section className={`sec1 sec2 ${props.mode == "dark" && "d_backGround"}`}>
                        <h3>Preview</h3>
                        <p>{text}</p>
                    </section>
                </div>
            </div>

        </>

    )
}

export default TextMenu