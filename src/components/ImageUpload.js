import React from 'react';
import { Upload } from 'lucide-react';

const ImageUpload = ({ selectedImage, fileInputRef, onImageUpload }) => {
  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
        {selectedImage ? (
          <div className="space-y-4">
            <img
              src={selectedImage}
              alt="Uploaded food"
              className="mx-auto max-w-full h-64 object-cover rounded-lg"
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="text-blue-600 hover:text-blue-800"
            >
              Change Image
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="w-12 h-12 text-gray-400 mx-auto" />
            <div>
              <p className="text-lg font-medium">Upload Food Image</p>
              <p className="text-gray-500">JPG, PNG up to 10MB</p>
            </div>
            <button
              onClick={() => fileInputRef.current.click()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Choose File
            </button>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUpload;
