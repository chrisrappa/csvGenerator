import { useState } from "react";
import { processCSV } from '../src/components/CsvReader';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
    <div className = 'main'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By Insurance</InputLabel>
        <Select
          labelId="filterByInsurance"
          id="filterByInsurance"
          value={csvArray.Insurance}
          label="Filter by Insurance Company"
          // onChange={handleChange}
        >
          <MenuItem value='United HealthCare'>United HealthCare</MenuItem>
          <MenuItem value='Progressive'>Progressive</MenuItem>
          <MenuItem value='Blue Cross'>Blue Cross</MenuItem>
        </Select>
      </FormControl>
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
