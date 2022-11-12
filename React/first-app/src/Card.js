
function Card(e) {

    // console.log(e.war.class);

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>

                <div style={{ height: "250px", overflow: "auto" }}>
                    <img src={e.war.imgUrl} className="card-img-top" alt="..." />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{e.war.myName}</h5>
                    <p className="card-text">{e.war.class}</p>
                    <p className="card-text">{e.war.school}</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Card