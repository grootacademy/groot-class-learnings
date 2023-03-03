import React, { useState, useRef } from 'react';

function RotateImage() {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [brightness, setBrightness] = useState(100);
  const canvasRef = useRef(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setCrop({ x: 0, y: 0, width: 0, height: 0 });
      setBrightness(100);
    };
  };

  const handleCrop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const croppedImage = ctx.getImageData(crop.x, crop.y, crop.width, crop.height);
    canvas.width = crop.width;
    canvas.height = crop.height;
    ctx.putImageData(croppedImage, 0, 0);
    setCrop({ x: 0, y: 0, width: 0, height: 0 });
  };

  const handleBrightness = e => {
    setBrightness(e.target.value);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleCanvasClick = e => {
    if (image && !crop.width && !crop.height) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = document.createElement('img');
      img.onload = () => {
        const scale = canvas.width / img.width;
        const x = e.nativeEvent.offsetX / scale;
        const y = e.nativeEvent.offsetY / scale;
        setCrop({ x, y, width: 0, height: 0 });
      };
      img.src = image;
    } else if (crop.width && crop.height) {
      setCrop({ x: 0, y: 0, width: 0, height: 0 });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <>
          <canvas ref={canvasRef} onClick={handleCanvasClick} />
          <div>
            <label htmlFor="brightness">Brightness:</label>
            <input
              id="brightness"
              type="range"
              min="0"
              max="200"
              value={brightness}
              onChange={handleBrightness}
            />
          </div>
          {crop.width && crop.height ? (
            <button onClick={handleCrop}>Crop</button>
          ) : (
            <p>Click on the image to set the crop area</p>
          )}
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
}

export default RotateImage;
