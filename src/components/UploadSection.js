import React, { useState } from "react";
import './UploadSection.css';
import { Button } from "./Button.js";

function UploadSection() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-container">
        <h1 className="upload-title">Upload Game File</h1>
        
        <div className="file-upload">
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            className="file-input"
            hidden
          />
          <label htmlFor="file-input" className="file-label">
            {selectedFile ? selectedFile.name : "Choose file"}
          </label>
        </div>

        <h2 className="section-title">Game Details</h2>
        
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Game title*" 
            required 
            className="input-field"
          />
        </div>
        
        <div className="input-group">
          <textarea 
            placeholder="Description*" 
            required 
            className="input-field"
          />
        </div>
        
        <div className="input-group">
          <textarea 
            placeholder="Instructions*" 
            required 
            className="input-field"
          />
        </div>
        
        <button className="upload-btn">Upload</button>
      </div>
    </div>
  );
}

export default UploadSection;