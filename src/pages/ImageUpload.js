import React, {useRef, useState} from "react";
import Button from "../components/btn/Button";

function ImageUpload() {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const handleFileInput = () => {
        if(imageRef.current) {
          imageRef.current.value = ""
          setImage(null)
        }
    }
    const handleImagePreview = (e) => {
      if (e.target.files[0])
      setImage(URL.createObjectURL(e.target.files[0]))
    }

  return (
    <div className="max-w-md mx-auto p-10 relative flex flex-col">
        <Button variant="black" onClick={handleFileInput}>Clear</Button>
      <input
        type="file"
        className=""
        ref={imageRef}
        onChange={handleImagePreview}>
      </input>
      <small>Upload your image</small>
      {image && <img alt="Preview" src={image}/>}
    </div>
  );
}

export default ImageUpload;
