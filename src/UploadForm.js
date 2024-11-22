import React, { useState } from "react";
import "./UploadForm.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!file) {
      setStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setStatus("Uploading...");
      const response = await fetch("http://localhost:8000/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setStatus(result.message || "Upload successful!");
    } catch (error) {
      console.error("Error uploading file:", error);
      setStatus("Failed to upload file. Please try again.");
    }
  };

  return (
    <div className="upload-container">
      <form onSubmit={handleUpload} className="upload-form">
        <label className="upload-label">
          Upload Passport Image:
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="upload-input"
          />
        </label>
        <button type="submit" className="upload-button">
          Upload
        </button>
      </form>
      {status && (
        <p
          className={`upload-status ${
            status.includes("Failed") ? "error" : "success"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default UploadForm;
