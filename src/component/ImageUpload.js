import  {useRef, useState} from 'react';

 const ImageUpload = ({ onImageUpload, uploadedImage }) => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFileSelect = (event)=>{
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);

      // preview of the image
      const reader = new FileReader();
      reader.onloadend = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);

      const reader = new FileReader();
      reader.onloadend = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    // event.stopPropagation();
  };
  return (
    <div className="image-upload-container">
      <h2>Upload Food Image</h2>
      <div className='upload-area'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current.click()}
      >
        {preview ? (
          <div className='image-preview'>
            <img src={preview} alt="Preview" />
            <p>Click to change image</p>
          </div>
        ) : (
          <div className='upload-placeholder'>
            <p>Drag and drop an image here, or click to select</p>
            <small>Support: JPEG, PNG, GIF</small>
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>    
  );
}

export default ImageUpload;