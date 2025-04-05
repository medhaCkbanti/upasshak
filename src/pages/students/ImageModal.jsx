import React from 'react';

const ImageModal = ({ isOpen, imageUrl, onClose }) => (
  <div 
    className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${
      isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
    onClick={onClose}
  >
    <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
      isOpen ? 'opacity-90' : 'opacity-0'
    }`} />
    
    <div 
      className={`relative max-w-4xl max-h-screen transform transition-all duration-300 ${
        isOpen ? 'scale-100' : 'scale-90'
      }`}
      onClick={e => e.stopPropagation()}
    >
      <img 
        src={imageUrl} 
        alt="Full screen" 
        className={`max-w-full max-h-screen object-contain transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-200"
        aria-label="Close image"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-gray-800" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
);

export default ImageModal;