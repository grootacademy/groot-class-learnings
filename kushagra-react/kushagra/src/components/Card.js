import React from 'react'

function Card(props) {

    console.log(props)

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.discription}</p>
                    <a href={props.data.link} className="btn btn-danger">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Card