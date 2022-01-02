import React, { useState, useEffect } from "react";
import "./App.css";
import FileUploadScreen from "./screen/FileUploadScreen";
import { getSingleFiles, getMultipleFiles } from "./data/api";

function App() {
  const [singleFiles, setSingleFiles] = useState([]);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };
  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleFileslist();
    getMultipleFilesList();
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="text-danger font-weight-bolder border-bottom text-center">
          Single & Multiple File Upload Using MERN Stack
        </h3>
        <FileUploadScreen
          getSingle={() => getSingleFileslist()}
          getMultiple={() => getMultipleFilesList()}
        />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-6">
            <h4 className="text-success font-weight-bold">Single Files List</h4>
            <div className="row">
              {singleFiles.map((file, index) => {
                return (
                  <div className="col-6" key={index}>
                    <div className="card mb-2 border-0 p-0">
                      <img
                        src={`http://localhost:8080/${file.filePath}`}
                        height="200"
                        className="card-img-top img-responsive"
                        alt="pic"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <h4 className="text-success font-weight-bold">
              Multiple Files List
            </h4>
            {multipleFiles.map((element, index) => {
              return (
                <div key={element._id}>
                  <h6 className="text-danger font-weight-bold">
                    {element.title}
                  </h6>
                  <div className="row">
                    {element.files.map((file, index) => {
                      return (
                        <div className="col-6" key={index}>
                          <div className="card mb-2 border-0 p-0">
                            <img
                              src={`http://localhost:8080/${file.filePath}`}
                              height="200"
                              className="card-img-top img-responsive"
                              alt="pic"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
