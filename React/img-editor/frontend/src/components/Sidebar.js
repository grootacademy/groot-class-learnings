import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import "../styles/sidebar.css"

export default function Sidebar() {

    const [countValues, setCountValues] = useState({
        saturation: null,
        brightness: null,
        grayscale: null,
        hue: null,
        blur: null,
        contrast: null,
        sepia: null,
        invert: false
    });

    const [filterStringState, setfilterStringState] = useState("")
    function handleEdit(e) {

        let value = (e.target.value / 100 * 3).toFixed(3);
        let element = document.getElementById('image').style;
        let element2 = document.getElementById('image');

        // for canvas
        if (e.target.name === "saturation") {

            // element.filter = `saturate(${value})`;
            setCountValues({ ...countValues, saturation: value });

        } else if (e.target.name === "brightness") {

            // element.filter = `brightness(${value})`;
            setCountValues({ ...countValues, brightness: value });

        }
        else if (e.target.name === "grayscale") {

            let value = (e.target.value / 100).toFixed(3);
            // element.filter = `grayscale(${value})`;
            setCountValues({ ...countValues, grayscale: value });

        }
        else if (e.target.name === "hue") {

            let value = (e.target.value / 100 * 360).toFixed(0);
            // element.filter = `hue-rotate(${value}deg)`;
            setCountValues({ ...countValues, hue: value });

        }
        else if (e.target.name === "blur") {

            let value = (e.target.value / 100 * 10).toFixed(2);
            // element.filter = `blur(${value}px)`;
            setCountValues({ ...countValues, blur: value });

        }
        else if (e.target.name === "contrast") {

            let value = (e.target.value / 100 * 3).toFixed(2);
            // element.filter = `contrast(${value})`;
            setCountValues({ ...countValues, contrast: value });

        }
        else if (e.target.name === "sepia") {

            let value = (e.target.value / 100).toFixed(2);
            // element.filter = `sepia(${value})`;
            setCountValues({ ...countValues, sepia: value });

        }
        else if (e.target.name === "invert") {

            if (countValues.invert) {
                // element.filter = `invert(0)`;
                setCountValues({ ...countValues, invert: false, invertValue: 0 });
            } else {
                // element.filter = `invert(1)`;
                setCountValues({ ...countValues, invert: true, invertValue: 1 });
            }

        }

        const finalFilter = getFinalFilterString()
        setfilterStringState(finalFilter);
        element.filter = finalFilter

    }

    function getFinalFilterString() {
        let { saturation, brightness, grayscale, hue, blur, contrast, sepia, invertValue } = countValues

        let finalFilter = `${saturation ? `saturate(${saturation})` : ``} 
                           ${brightness ? `brightness(${brightness})` : ``}
                           ${blur ? `blur(${blur}px)` : ``}
                           ${grayscale ? `grayscale(${grayscale})` : ``}
                           ${hue ? `hue-rotate(${hue}deg)` : ``}
                           ${contrast ? `contrast(${contrast})` : ``}
                           ${sepia ? `sepia(${sepia})` : ``}
                           ${invertValue ? `invert(${invertValue})` : ``}
                            `
        return finalFilter
    }

    function download() {
        let element = document.getElementById('image');
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');

        // console.log(filterStringState)
        ctx.canvas.width = (element.offsetWidth * 3)
        ctx.canvas.height = (element.offsetHeight * 3)

        ctx.filter = filterStringState;
        ctx.drawImage(element, 0, 0, canvas.width, canvas.height);

        var link = document.createElement('a');
        link.download = 'edited-image.png';
        link.href = document.getElementById('canvas').toDataURL()
        link.click();
        notify()

    };
    const notify = () => toast("Downloaded successfully", { containerId: 'TOP_RIGHT', autoClose: 5000, type: toast.TYPE.SUCCESS });;

    return (
        <>
            <section className="app">
                <aside className="sidebar">
                    <header>
                        <h2 className='text-center m-3 heading' style={{ fontFamily: "'Monoton', cursive" }}>Editor</h2>
                    </header>
                    <nav className="sidebar-nav">

                        <ul>
                            <li>
                                <a href="#" className='icon-s-prt'>
                                    <i className="ion-bag"></i>
                                    <img src="/images/icons/icons8-paint-palette-94.png" alt="" />
                                    <span>Filters</span>
                                    <img style={{ float: "right", marginTop: "5px" }} src="/images/icons/icons8-right-94.png" alt="" />
                                </a>
                                <ul className="nav-flyout overflow-auto">
                                    <li>
                                        <div className='btn my-filters-btn mx-2 d-flex justify-content-between'>
                                            <div>
                                                <p> <img src="images/icons/icons8-saturation-48.png" height="25px" alt="" /> Saturation</p>
                                                <input type="range" name='saturation' defaultValue="33.33" onChange={handleEdit} />
                                            </div>
                                            <div className='d-flex align-items-center ml-3 sec'>
                                                <p>{countValues.saturation}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>

                                        <div className='btn my-filters-btn mx-2 d-flex justify-content-between'>
                                            <div>

                                                <p> <img src="images/icons/icons8-sun-48.png" height="25px" alt="" />Brightness</p>
                                                <input type="range" name='brightness' defaultValue="33.33" onChange={handleEdit} />
                                            </div>
                                            <div className='d-flex align-items-center ml-3 sec'>
                                                <p>{countValues.brightness}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='btn my-filters-btn mx-2 d-flex justify-content-between'>
                                            <div>

                                                <p><img src="images/icons/grayscale.png" height="25px" alt="" /> Grayscale</p>
                                                <input type="range" name='grayscale' defaultValue="0" onChange={handleEdit} />
                                            </div>
                                            <div className='d-flex align-items-center ml-3 sec'>

                                                <p>{countValues.grayscale}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='btn my-filters-btn mx-2 d-flex justify-content-between'>
                                            <div>
                                                <p> <img src="images/icons/icons8-color-palette-48.png" height="25px" alt="" /> Hue</p>
                                                <input type="range" name='hue' defaultValue="0" onChange={handleEdit} />
                                            </div>
                                            <div className='d-flex align-items-center ml-3 sec'>
                                                {countValues.hue && <p>{countValues.hue} deg</p>}
                                            </div>
                                        </div>
                                    </li>
                                    <div className='btn my-filters-btn mx-2 d-flex justify-content-between'>
                                        <div>
                                            <p> <img src="images/icons/icons8-blur-48.png" height="25px" alt="" />Blur</p>
                                            <input type="range" name='blur' defaultValue="0" onChange={handleEdit} />
                                        </div>
                                        <div className='d-flex align-items-center ml-3 sec'>
                                            <p>{countValues.blur} </p>
                                        </div>
                                    </div>
                                    <li>
                                        <div className='btn my-filters-btn mx-2 d-flex justify-content-between'>
                                            <div>

                                                <p><img src="images/icons/icons8-contrast-64.png" height="25px" alt="" />Contrast</p>
                                                <input type="range" name='contrast' defaultValue="33.33" onChange={handleEdit} />
                                            </div>
                                            <div className='d-flex align-items-center ml-3 sec'>
                                                <p>{countValues.contrast} </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='btn my-filters-btn mx-2 d-flex justify-content-between'>
                                            <div>

                                                <p><img src="images/icons/icons8-old-fashioned-family-photo-48.png" height="25px" alt="" /> Sepia</p>
                                                <input type="range" name='sepia' defaultValue="0" onChange={handleEdit} />
                                            </div>
                                            <div className='d-flex align-items-center ml-3 sec'>
                                                <p>{countValues.sepia} </p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </li>
                            {/* <li>
                                <a href="#"><i className="ion-ios-settings"></i> <span className="">Controls</span></a>
                                <ul className="nav-flyout">
                                    <li>
                                        <div className='btn btn-light mx-3'>
                                            <img src="images/icons/icons8-invert-selection-48.png" height="25px" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-camera-outline"></i>Creeper</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-chatboxes-outline"></i>Hate</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-cog-outline"></i>Grinder</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="ion-ios-briefcase-outline"></i> <span className="">Folio</span></a>
                                <ul className="nav-flyout">
                                    <li>
                                        <a href="#"><i className="ion-ios-flame-outline"></i>Burn</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-lightbulb-outline"></i>Bulbs</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-location-outline"></i>Where You</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-locked-outline"></i>On Lock</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-navigate-outline"></i>Ghostface</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="ion-ios-analytics-outline"></i> <span className="">Graphicals</span></a>
                                <ul className="nav-flyout">
                                    <li>
                                        <a href="#"><i className="ion-ios-timer-outline"></i>Timers</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-arrow-graph-down-left"></i>You Lose</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-partlysunny-outline"></i>Stormy</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-timer-outline"></i>Lookie Look</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-game-controller-a-outline"></i>Dork Mfer</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="ion-ios-paper-outline"></i> <span className="">Papers</span></a>
                                <ul className="nav-flyout">
                                    <li>
                                        <a href="#"><i className="ion-ios-filing-outline"></i>File Cab</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-information-outline"></i>Infos</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-paperplane-outline"></i>Planes</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-android-star-outline"></i>Shop</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="ion-ios-navigate-outline"></i> <span className="">Ass Finder</span></a>
                                <ul className="nav-flyout">
                                    <li>
                                        <a href="#"><i className="ion-ios-flame-outline"></i>Burn</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-lightbulb-outline"></i>Bulbs</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-location-outline"></i>Where You</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-locked-outline"></i>On Lock</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="ion-ios-navigate-outline"></i>Ghostface</a>
                                    </li>
                                </ul>
                            </li> */}
                            <li>
                                <a onClick={download} className="download-btn mt-5 icon-s-prt shadow-lg" > <span className=""><img src="images/icons/icons8-download-94.png" alt="" />Download image</span></a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </section>
        </>
    )
}
