import { useState } from "react";
import { processCSV } from '../src/components/CsvReader';
import ErrorMessage from "./components/ErrorMessage";
import Table from "./components/Table";
import './styles/global.css';

function App() {

  const [csvFile, setCsvFile] = useState('');
  const [csvArray, setCsvArray] = useState({});

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    //Need to implement error handling;
    //Error for improper csv layout && for incorrect file type (handle in processor function)

    reader.onload = function(e) {
      const text = e.target.result;
      const processed = processCSV(text);
      setCsvArray(processed);
    }
      
      reader.readAsText(file);

    return true;
 
  }


  return (
    <div>
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

        {/* Need to grab a value from submit to display Error Message when File Format is wrong */}
        {/* { sumbit() === false ? 
          <ErrorMessage />
          :
          null
        } */}

      </div>
      <Table csvArray = {csvArray}/>
    </div>
  );

}

export default App;
