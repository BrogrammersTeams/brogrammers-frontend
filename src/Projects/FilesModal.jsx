import axios from "axios";
import { useState, useEffect } from "react";

const FileContainer = ({ FileContent, FileName, projectName  }) => {
  let [fileName, setfileName] = useState("");

  let [content, setcontent] = useState("");

  const onChange = (e, setter) => setter(e.target.value);

  const handleCommit = () => {
    const obj = {
      email: localStorage.getItem("email"),
      project: {
        projectName: projectName,
      },
      file: {
        type: fileName,
        name: fileName,
        content: content,
      },
    };

    console.log(obj);
    axios.post(`https://brogrammers-backend.herokuapp.com/file`, obj);
    
  };

  const handleCancel = () => {
    setfileName("");
    setcontent("");
  };

  useEffect(() => {
    setfileName(FileName);
    setcontent(FileContent);
  }, []);

  return (
    <div className="flex bg-ed-50 w-full h-screen items-center justify-center">
      <div className="bg-yelow-300  w-5/6 h-auto flex flex-col">
        <div className="relative w-full bg-ray-500 flex  bg-gray-50">
          <div className="w-auto p-1">
            <input
              className="w-full bg-gray-200 p-2 rounded-lg font-extrabold text-gray-600 outline-none"
              type="text"
              name="fileName"
              value={fileName}
              onChange={(e) => onChange(e, setfileName)}
              placeholder="Add File Name"
            />
          </div>
          <div className="">
            <img
              className="w-4 absolute z-50   right-0 -translate-y-6"
              src="https://www.freeiconspng.com/thumbs/close-button-png/silver-close-button-png-15.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <textarea
            className="w-full bg-gray-100 rounded-lg mt-2 outline-none p-2 font-bold text-gray-600 resize-none"
            name="description"
            rows="10"
            value={content}
            onChange={(e) => onChange(e, setcontent)}
            placeholder="Add File Content"
          ></textarea>
        </div>
        <div className="flex ">
          <div className="w-full">
            <button
              onClick={handleCancel}
              className="rounded-lg bg-red-400 text-teal-50 animate-puls px-8 py-1 font-extrabold"
            >
              Cancel
            </button>
          </div>
          <div className="w-full text-right">
            <button
              onClick={handleCommit}
              className="rounded-lg text-teal-50 bg-green-400 animate-pulse px-8 py-1 font-extrabold"
            >
              Commit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileContainer;
