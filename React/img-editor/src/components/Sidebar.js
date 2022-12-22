import React, { useState } from 'react'
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

    function handleEdit(e) {

        let value = (e.target.value / 100 * 3).toFixed(3);
        let element = document.getElementById('image').style;

        if (e.target.name === "saturation") {

            element.filter = `saturate(${value})`;
            setCountValues({ ...countValues, saturation: value });

        } else if (e.target.name === "brightness") {

            element.filter = `brightness(${value})`;
            setCountValues({ ...countValues, brightness: value });

        }
        else if (e.target.name === "grayscale") {

            let value = (e.target.value / 100).toFixed(3);
            element.filter = `grayscale(${value})`;
            setCountValues({ ...countValues, grayscale: value });

        }
        else if (e.target.name === "hue") {

            let value = (e.target.value / 100 * 360).toFixed(0);
            element.filter = `hue-rotate(${value}deg)`;
            setCountValues({ ...countValues, hue: value });

        }
        else if (e.target.name === "blur") {

            let value = (e.target.value / 100 * 10).toFixed(2);
            element.filter = `blur(${value}px)`;
            setCountValues({ ...countValues, blur: value });

        }
        else if (e.target.name === "contrast") {

            let value = (e.target.value / 100 * 3).toFixed(2);
            element.filter = `contrast(${value})`;
            setCountValues({ ...countValues, contrast: value });

        }
        else if (e.target.name === "sepia") {

            let value = (e.target.value / 100).toFixed(2);
            element.filter = `sepia(${value})`;
            setCountValues({ ...countValues, sepia: value });

        }
        else if (e.target.name === "invert") {

            if (countValues.invert) {
                element.filter = `invert(0)`;
                setCountValues({ ...countValues, invert: false });
            } else {
                element.filter = `invert(1)`;
                setCountValues({ ...countValues, invert: true });
            }

        }

    }

    return (
        <>
            <section class="app">
                <aside class="sidebar">
                    <header>
                        <h2 className='text-center m-3 heading' style={{ fontFamily: "'Monoton', cursive" }}>Editor</h2>
                    </header>
                    <nav class="sidebar-nav">

                        <ul>
                            <li>
                                <a href="#"><i class="ion-bag"></i> <span>Shop</span></a>
                                <ul class="nav-flyout">
                                    <li>
                                        <div className='btn btn-light mx-3'>
                                            <p> <img src="images/icons/icons8-saturation-48.png" height="25px" alt="" /> Saturation</p>
                                            <input type="range" name='saturation' defaultValue="33.33" onChange={handleEdit} />
                                            <p>{countValues.saturation}</p>
                                        </div>
                                        <div className='btn btn-light mx-3'>
                                            <p> <img src="images/icons/icons8-sun-48.png" height="25px" alt="" />Brightness</p>
                                            <input type="range" name='brightness' defaultValue="33.33" onChange={handleEdit} />
                                            <p>{countValues.brightness}</p>
                                        </div>
                                        <div className='btn btn-light mx-3'>

                                            <p><img src="images/icons/grayscale.png" height="25px" alt="" /> Grayscale</p>
                                            <input type="range" name='grayscale' defaultValue="0" onChange={handleEdit} />
                                            <p>{countValues.grayscale}</p>
                                        </div>
                                        <div className='btn btn-light mx-3'>
                                            <p> <img src="images/icons/icons8-color-palette-48.png" height="25px" alt="" /> Hue</p>
                                            <input type="range" name='hue' defaultValue="0" onChange={handleEdit} />
                                            {countValues.hue && <p>{countValues.hue} deg</p>}
                                        </div>
                                        <div className='btn btn-light mx-3'>
                                            <p> <img src="images/icons/icons8-blur-48.png" height="25px" alt="" />Blur</p>
                                            <input type="range" name='blur' defaultValue="0" onChange={handleEdit} />
                                            <p>{countValues.blur} </p>
                                        </div>
                                        <div className='btn btn-light mx-3'>
                                            <p><img src="images/icons/icons8-contrast-64.png" height="25px" alt="" />Contrast</p>
                                            <input type="range" name='contrast' defaultValue="33.33" onChange={handleEdit} />
                                            <p>{countValues.contrast} </p>
                                        </div>
                                        <div className='btn btn-light mx-3'>
                                            <p><img src="images/icons/icons8-old-fashioned-family-photo-48.png" height="25px" alt="" /> Sepia</p>
                                            <input type="range" name='sepia' defaultValue="0" onChange={handleEdit} />
                                            <p>{countValues.sepia} </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-clock-outline"></i>Times</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-android-star-outline"></i>Hates</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-heart-broken"></i>Beat</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="ion-ios-settings"></i> <span class="">Controls</span></a>
                                <ul class="nav-flyout">
                                    <li>
                                        <div className='btn btn-light mx-3'>
                                            <img src="images/icons/icons8-invert-selection-48.png" height="25px" alt="" />
                                            <input type="button" name='invert' className='btn' value={countValues.invert ? "Off Invert" : "On Invert"} onClick={handleEdit} />
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-camera-outline"></i>Creeper</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-chatboxes-outline"></i>Hate</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-cog-outline"></i>Grinder</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="ion-ios-briefcase-outline"></i> <span class="">Folio</span></a>
                                <ul class="nav-flyout">
                                    <li>
                                        <a href="#"><i class="ion-ios-flame-outline"></i>Burn</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-lightbulb-outline"></i>Bulbs</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-location-outline"></i>Where You</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-locked-outline"></i>On Lock</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-navigate-outline"></i>Ghostface</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="ion-ios-analytics-outline"></i> <span class="">Graphicals</span></a>
                                <ul class="nav-flyout">
                                    <li>
                                        <a href="#"><i class="ion-ios-timer-outline"></i>Timers</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-arrow-graph-down-left"></i>You Lose</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-partlysunny-outline"></i>Stormy</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-timer-outline"></i>Lookie Look</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-game-controller-a-outline"></i>Dork Mfer</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="ion-ios-paper-outline"></i> <span class="">Papers</span></a>
                                <ul class="nav-flyout">
                                    <li>
                                        <a href="#"><i class="ion-ios-filing-outline"></i>File Cab</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-information-outline"></i>Infos</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-paperplane-outline"></i>Planes</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-android-star-outline"></i>Shop</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="ion-ios-navigate-outline"></i> <span class="">Ass Finder</span></a>
                                <ul class="nav-flyout">
                                    <li>
                                        <a href="#"><i class="ion-ios-flame-outline"></i>Burn</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-lightbulb-outline"></i>Bulbs</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-location-outline"></i>Where You</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-locked-outline"></i>On Lock</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="ion-ios-navigate-outline"></i>Ghostface</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="ion-ios-medical-outline"></i> <span class="">Cocaine</span></a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </section>
        </>
    )
}
