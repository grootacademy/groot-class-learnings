import React from 'react'

function About(props) {
    return (
        <>
            <div style={{height:"100vh"}} className={` ${props.mode == "dark" && "d_backGround"}`}>

                <div className='my_slider text-center '>
                    This is about page
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://cdn.wallpapersafari.com/48/94/TDn6qN.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://media.istockphoto.com/id/1159778533/photo/stairway-to-heaven.jpg?s=170667a&w=0&k=20&c=naoJddQrpr-TX2U0evf736IRaAVA-or38KpudqFmZUs=" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About