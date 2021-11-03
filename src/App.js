import { useState } from "react";
import { processCSV } from '../src/components/CsvReader';
import Table from "./components/Table";
import './styles/global.css';

function App() {

  const [csvFile, setCsvFile] = useState('');
  const [csvArray, setCsvArray] = useState({});

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function(e) {
      const text = e.target.result;
      const processed = processCSV(text);
      setCsvArray(processed);
    }

    reader.readAsText(file);
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
      </div>
      <Table csvArray = {csvArray}/>
    </div>
  );

}

export default App;
