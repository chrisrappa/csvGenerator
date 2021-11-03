import React, { useState } from 'react';

//Last thing to do is to export users to different tables based on Insurance Company

export default function CsvReader(){
  const [csvFile, setCsvFile] = useState('');
  const [csvArray, setCsvArray] = useState([]);

  const processCSV = (str, delim = ',') => {
    const columns = str.slice(0, str.indexOf('\n') - 1).split(delim);
    const rows = str.slice(str.indexOf('\n' ) + 1).split('\n');
    
    const dataToArray = rows.map(row => {
      const values = row.split(delim);
      const eachObject = columns.reduce((obj, column, i) => {
        obj[column] = values[i];
        return obj;
      }, {})

      return eachObject;
    })

    const compareLastName = ((a, b) => {
      if(a.LastName < b.LastName){
        return 1;
      }

      if(a.LastName > b.LastName){
        return -1;
      }

      return 0;
    })

    const removeDupes = [...dataToArray.reduce((map, obj) => map.set(obj.UserId, obj), new Map()).values()];
    const sortedByLastName = removeDupes.sort(compareLastName);
    setCsvArray(sortedByLastName);

  }

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function(e) {
      const text = e.target.result;
      processCSV(text);
    }

    reader.readAsText(file);

  }

  return(
    <form id='csv-form'>
      <div className = 'inputSubmit'>
        <input
          type='file'
          accept='.csv'
          id='csvFile'
          onChange={(e) => (
            setCsvFile(e.target.files[0])
          )}
        >
        </input>
        <br />
        <button
          onClick = {(e) => {
            e.preventDefault();
            if(csvFile){submit()};
          }}
        >
          submit
        </button>
      </div>
      { csvArray.length > 0 ? 
      
      <>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Version</th>
              <th>Insurance Company</th>
            </tr>
          </thead>
          <tbody>

            {
              csvArray.map((item, i) => (
                <tr key = {i}>
                  <td>{item.UserId}</td>
                  <td>{item.FirstName}</td>
                  <td>{item.LastName}</td>
                  <td>{item.Version}</td>
                  <td>{item.Version2}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </>
      
      : null }

    </form>
  )
}
