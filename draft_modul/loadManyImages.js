import React, { useEffect, useState } from "react";

function LoadManuImages() {
  const [dataIm, setDataIm] = useState({});
  const [dataImB, setDataImB] = useState([]);

  useEffect(() => {
    if (dataIm.hasOwnProperty("name")) setDataImB([...dataImB, dataIm]);
  }, [dataIm]);

  function handleInputForAva(event) {
    let file = event.currentTarget.files;

    for (let i in file) {
      if (i < file.length) {
        let reader = new FileReader();
        reader.readAsDataURL(file.item(i));

        reader.onload = function () {
          setDataIm({ name: file[i]["name"], data: reader.result });
        };

        reader.onerror = function () {
          console.log(reader.error);
        };
      }
    }
  }

  return (
    <div>
      <div>
        {dataImB.map((item, index) => {
          return (
            <div>
              <p key={item.name}>{`const img${index} = "${item.data}";`}</p>
              <br />
            </div>
          );
        })}
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        encType="multipart/form-data"
      >
        <input multiple type="file" onChange={handleInputForAva}></input>
      </form>
    </div>
  );
}

export default LoadManuImages;
