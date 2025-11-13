import React from 'react';

const UploadBox: React.FC = () => {
  return (
    <div className="p-6 border-dashed border-2 border-neutral-800 rounded text-center">
      <p className="text-sm text-neutral-400">Drag & drop your Meralco bill (PDF/JPG) here</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 rounded text-white">Upload & OCR</button>
    </div>
  );
};

export default UploadBox;
