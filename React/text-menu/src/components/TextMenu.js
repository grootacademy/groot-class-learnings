import { useState } from 'react'

function TextMenu(props) {

    const [text, setText] = useState("");
    const [mode, setMode] = useState("light");

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

    function toggleDarkMode(e) {
        if (e.target.checked) {
            setMode("dark");
            document.body.style.background = "#2e132b";
        }
        else {
            setMode("light");
            document.body.style.background = "white";
        }
    }

    return (
        <>

            <div className="custom-control custom-switch d-flex justify-content-center mt-3 ">
                <input type="checkbox" className="custom-control-input" id="customSwitches" onChange={toggleDarkMode} />
                <label className={`custom-control-label ${mode == "dark" && "d_color"}`} htmlFor="customSwitches"> {mode == "dark" && "Enable Light Mode"}  {mode != "dark" && "Enable Dark mode" }  </label>
            </div>

            <div className={`outer ${mode == "dark" && "d_backGround"}`} >
                <section className={`sec1 ${mode == "dark" && "d_backGround"}`}>
                    <div className={`box back_color ${mode == "dark" && "d_backGround"}`}>
                        <h3>Summery</h3>
                        <p>Charactors: {text.length}</p>
                        <p>Words: {text.split(" ").length}</p>
                    </div>
                    <div className='center_box '>
                        <button onClick={toUpperCase} className={`${mode == "dark" && "d_backGround"}`}>UPPERCASE</button>
                        <button onClick={toLowerCase} className={`${mode == "dark" && "d_backGround"}`}>lowercase</button>
                        <button onClick={doClear} className={`${mode == "dark" && "d_backGround"}`}>Clear</button>
                        <button onClick={doCopy} className={`${mode == "dark" && "d_backGround"}`}>Copy</button>
                        <button onClick={doCut} className={`${mode == "dark" && "d_backGround"}`}>Cut</button>
                        <button onClick={doDuplicate} className={`${mode == "dark" && "d_backGround"}`}>Duplicate</button>

                    </div>
                    <textarea className={`box back_color ${mode == "dark" && "d_backGround"}`} placeholder='Type Here' value={text} onChange={handleText} />
                </section>
            </div>



            <div className={`outer ${mode == "dark" && "d_backGround"}`}>
                <section className={`sec1 sec2 ${mode == "dark" && "d_backGround"}`}>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </section>
            </div>
        </>

    )
}

export default TextMenu