
function Card() {
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Jitin</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Card