import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
function Home() {
    return (
        <>
            {/* <div className="home">

                <Link to="/notes">
                    <span>
                        Notes
                    </span>
                </Link>
                <Link to="/images">
                    <span>
                        Images
                    </span>
                </Link>
            </div> */}
            <div className="myhome">

                <div class="container">
                    <ul class="character-collection">
                        <Link to="/notes">
                            <li class="person fahkumram">
                                <span>Notes</span>
                                <div class="hover-person"></div>
                                <img src="images/toppng.com-aper-png-background-paper-note-1000x1320.png" alt="fahkumram" />
                                <p class="text-name">Notes</p>
                            </li>
                        </Link>
                        <Link to="/images">
                            <li class="person kunimitsu">
                                <span>Images</span>
                                <div class="hover-person"></div>
                                <img src="images/pngwing.com.png" alt="kunimitsu" />
                                <p class="text-name">Images</p>
                            </li>
                        </Link>
                        {/* <li class="person leroy">
                            <div class="hover-person"></div>
                            <img src="https://fadelun.github.io/hosted-assets/tekken-property/leroy.png" alt="leroy" />
                            <p class="text-name">leroy</p>
                        </li>
                        <li class="person lidia">
                            <div class="hover-person"></div>
                            <img src="https://fadelun.github.io/hosted-assets/tekken-property/lidia.png" alt="lidia" />
                            <p class="text-name">lidia</p>
                        </li>
                        <li class="person zafina">
                            <div class="hover-person"></div>
                            <img src="https://fadelun.github.io/hosted-assets/tekken-property/zafina.png" alt="zafina" />
                            <p class="text-name">zafina</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home