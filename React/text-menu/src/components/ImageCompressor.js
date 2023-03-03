import React, { useState } from 'react';
import Compressor from 'image-compressor';

function ImageCompressor() {
  const [imageFile, setImageFile] = useState(null);
  const [compressedImageFile, setCompressedImageFile] = useState(null);

  const handleImageUpload = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleImageCompression = async () => {
    const compressedFile = await new Compressor(imageFile, {
      quality: 0.6, // Adjust this value to change the compression level
    }).compress();

    setCompressedImageFile(compressedFile);
  };

  

  return (
    <div>
      <h2>Image Compressor</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleImageCompression}>Compress</button>
      {compressedImageFile && (
        <div>
          <p>Original file size: {imageFile.size} bytes</p>
          <p>Compressed file size: {compressedImageFile.size} bytes</p>
          <img src={URL.createObjectURL(compressedImageFile)} alt="Compressed" />
        </div>
      )}
    </div>
  );
}

export default ImageCompressor;
