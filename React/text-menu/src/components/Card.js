import React from 'react'

function Card(props) {

    console.log(props);

    return (
        <>
            <div className="card m-3" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.data.subtitle}</h6>
                    <p className="card-text">{props.data.discription}</p>
                    <a href="/" className="card-link">Card link</a>
                    <a href="/" className="card-link">Another link</a>
                </div>
            </div>
        </>
    )
}

export default Card