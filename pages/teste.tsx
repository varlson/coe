import axios from "axios";
import React, { useState, useEffect } from "react";

const UPLOAD_ENDPOINT = "http://localhost:3222/api/slide/";

function VendorRegistration() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("name", name);

    console.log("formadata");
    console.log(formData);

    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(resp.status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>React File Upload</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <button type="submit">Upload File</button>
      {/* {resp.status == 200(<h1>ok</h1>)} */}
    </form>
  );
}

export default VendorRegistration;
