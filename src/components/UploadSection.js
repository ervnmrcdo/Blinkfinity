import React from "react";
import './UploadSection.css'
import '../App.js'
import { Button } from "./Button.js";

function UploadSection() {
  return (
    <div class="container">
    <h1>Upload Game File</h1>
    <div class="file-upload">
      <button>Choose file</button>
    </div>
    <h2>Game Details</h2>
    <div class="input-group">
      <input type="text" placeholder="Game title*" required />
    </div>
    <div class="input-group">
      <textarea placeholder="Description*" required></textarea>
    </div>
    <div class="input-group">
      <textarea placeholder="Instructions*" required></textarea>
    </div>
    <button class="upload-btn">Upload</button>
  </div>
  );
}

export default UploadSection
