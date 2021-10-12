import React, { useState } from "react";
import * as XLSX from "xlsx";

//components
import ConfigItems from "../client/src/components/Configuration/FromFile/ConfigItems";

function ReadExcell() {
  const [items, setItems] = useState([]);
  const [file, setFile] = useState('');
  const [shNames, setShNames] = useState([]);

  const readSheetNames = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        resolve(wb.SheetNames);
        reject('Error-sam');
      };
    });
    promise.then((d) => {
      setShNames(d);
    })
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          setFile(file);
          readSheetNames(file);
        }}
      />
      <ConfigItems file={file} shNames={shNames}/>
    </div>
  );
}

export default ReadExcell;