import { Link } from "react-router-dom";

function Navbar(props) {

    function toggleDarkMode(e) {
        
        if (e.target.checked) {
            props.setMode("dark")
        }
        else {
            props.setMode("light")
        }
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light ${props.mode == "dark" && "bg-dark navbar-dark"}`}>
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto d-flex align-items-center">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/loop">Loop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/backend">Backend</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calculator">Calculator</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/imagePreview">Image Preview</Link>
                        </li>

                        <div className="custom-control custom-switch d-flex justify-content-center ml-5 ">
                            <input type="checkbox" className="custom-control-input" id="customSwitches" onChange={toggleDarkMode} />
                            <label className={`custom-control-label ${props.mode == "dark" && "d_color"}`} htmlFor="customSwitches"> {props.mode == "dark" && "Enable Light Mode"}  {props.mode != "dark" && "Enable Dark mode"}  </label>
                        </div>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </>

    )
}


export default Navbar;