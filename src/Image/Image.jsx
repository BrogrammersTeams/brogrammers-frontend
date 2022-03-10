import { useEffect, useState } from "react";
import { db } from "../firebase";

const ImageUpload = ({}) => {
  let email = localStorage.getItem("email");
  let [fileSize, setFileSize] = useState(10);

  let [photo, setPhoto] = useState("");
  let userdetails;
  let getp = () => {
    db.collection("users")
      .doc(email)
      .get()
      .then((doc) => {
        userdetails = doc.data();
        setImage(userdetails.image);
      });
  };

  let [image, setImage] = useState(photo);

  useEffect(() => {
    setImage(getp());
  }, []);
  const setToBase64 = async (file, setterFunction) => {
    let reader = new FileReader();
    // Convert the file to base64 text
    reader.readAsDataURL(file);
    // on reader load somthing...
    reader.onload = async () => setterFunction(reader.result);
  };
  const handleFileInputChange = async (e) => {
    let file;
    file = e.target.files[0];
    setFileSize(file.size / 1000);
    // if (file.size / 1000 > 700) {
    //   console.log("File size is", file.size / 1000, "kb");
    //   alert("Please Provide image size less than 700kb!");
    //   return;
    // }
    setToBase64(file, setImage);
    setFileSize(e.target.files[0].size);
  };

  const UpdatePhoto = () => {
    db.collection("users")
      .doc(email)
      .update({ image: image })
      .then(
        () => {}
        //   alert("yay")
      );
  };

  const getPhoto = () => {};
  return (
    <>
      <div className="image-upload-container">
        {image && (
          <div className="w-1/2 px-2">
            <img src={image} className="image-upload" />
          </div>
        )}
        <div className="w-full">
          <input type="file" name="file" onChange={handleFileInputChange} />
        </div>
        <button onClick={() => UpdatePhoto()}>Update Photo</button>
      </div>
      {/* {fileSize > 700 && <BigFileSize />} */}
    </>
  );
};
export default ImageUpload;
