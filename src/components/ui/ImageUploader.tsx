'use client';
import React, { useState } from 'react';

/**
 * This is a demonstration component for uploading images.
 * In a production environment, this would connect to your backend API
 * for storing images in your file system or cloud storage.
 */
export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  // Handle file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Reset upload state
      setUploadComplete(false);
    }
  };

  // Handle image upload (demonstration only)
  const handleUpload = async () => {
    if (!selectedImage) return;
    
    setIsUploading(true);

    // In a real application, you would:
    // 1. Create a FormData object
    // 2. Append the file to it
    // 3. Send it to your backend API
    
    // This is a simulated upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulating successful upload
    setIsUploading(false);
    setUploadComplete(true);
    
    // In a real application, your backend would:
    // 1. Validate the file
    // 2. Store it on the server or cloud storage
    // 3. Return the URL or file path
    // 4. You would then save this URL to your database
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold text-primary mb-4">Image Upload Demo</h2>
      <p className="mb-4 text-gray-600">
        This demonstrates how image uploads would work in the admin section.
        In a production environment, this would connect to your server.
      </p>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select an image:</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      {previewUrl && (
        <div className="mb-4">
          <p className="text-gray-700 mb-2">Preview:</p>
          <div className="relative h-48 bg-gray-100 rounded">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>
      )}
      
      <button
        onClick={handleUpload}
        disabled={!selectedImage || isUploading}
        className={`w-full py-2 px-4 rounded font-medium ${
          !selectedImage 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : isUploading 
              ? 'bg-primary/70 text-white cursor-wait' 
              : 'bg-primary text-white hover:bg-primary/90'
        }`}
      >
        {isUploading ? 'Uploading...' : 'Upload Image'}
      </button>
      
      {uploadComplete && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
          Upload completed successfully! In a real application, this image would now be 
          stored on your server or cloud storage.
        </div>
      )}
    </div>
  );
} 