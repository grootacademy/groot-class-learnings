import React from 'react'

const ImageError = () => {
    return (
        <div>
            <img src="https://imes.pels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" onError={(e) => e.target.src = "https://media.istockphoto.com/id/635726330/photo/nahasrh-fort.jpg?s=612x612&w=0&k=20&c=z1hztb9BT6YhxT--G_cW8hBmBHWzrFdwbfM0Pc2jATI="} alt="" />
        </div>
    )
}

export default ImageError