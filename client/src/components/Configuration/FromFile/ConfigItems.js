import React, { Fragment, useState } from "react";
import * as XLSX from "xlsx";

const ConfigItems = () => {
  const [file, setFile] = useState('');
  const [shNames, setShNames] = useState([]);
  const [data, setData] = useState([]);
  const [cols, setCols] = useState([]);

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

  const readExcel = (shName) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const ws = wb.Sheets[shName];

        resolve(ws);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((ws) => {
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const cols = make_cols(ws["!ref"]);

      //update state
      setData(data);
      setCols(cols);
    });
  };

  /* generate an array of column objects */
  const make_cols = refstr => {
    let o = [],
      C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
    return o;
  };

  const buildConfig = (element, index) => {
    const ConfigItem = {
      id: index,
      name: element
    }
    return ConfigItem;
  }

  //mapping 
  const ConfigItems = shNames.map(buildConfig);
    
  return (
    <Fragment>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          setFile(file);
          readSheetNames(file);
        }}
      />
      
      {/**Build dropdown sheet names */}
      <div class="dropdown">
        <button class="btn btn-success dropdown-toggle"
          type="button" id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Config Items
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          {ConfigItems.map((item) => (
            <button key={item.id}
                class="dropdown-item"
                type="button"
                onClick={() => readExcel(item.name)}
                >{item.name}
            </button>
          ))}
        </div>
      </div>

      {/**Build table excell data worksheet*/}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {cols.map(c => (
                <th key={c.key}>{c.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i}>
                {cols.map(c => (
                  <td key={c.key}>{r[c.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </Fragment>
  );    
}

export default ConfigItems;
