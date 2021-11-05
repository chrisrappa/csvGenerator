import { useState } from "react";
import { processCSV } from '../src/components/CsvReader';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from "./components/Table";
import './styles/global.css';
import downloadCsvConverter from "./components/downloadCsvConverter";

function App() {

  const [csvFile, setCsvFile] = useState('');
  const [csvArray, setCsvArray] = useState({});
  const [filterType, setFilterType] = useState('');


  const submit = () => {

    // Gets csvFile and converts it to text format, then creates array of objects from it
    // Uses CsvReader component to process, Sorter.js to sort by name/insurance && remove dupes
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function(e) {
      const text = e.target.result;
      const processedObjects = processCSV(text);

      //If filterType state isn't empty, apply the filter to the data
      if(filterType !== ''){

        const filtered = processedObjects.filter(processedObject => processedObject.Insurance.includes(filterType));
        setCsvArray(filtered);

      } else {

        //No filter then set to processed data
        setCsvArray(processedObjects)
      };
      
    }
      
    reader.readAsText(file);

  }

  //Set filterType to user selection
  const handleChange = (e) => {
    e.preventDefault();
    setFilterType(e.target.value);
  }

  //Use downloadCsvConverter to download filtered and processed CSV
  const downloadCsv = () => {
    var encodedUri = encodeURI(downloadCsvConverter(csvArray));
    window.open(encodedUri);
  }

  return (
    <div className = 'main'>
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
        {/* Material UI dropdown menu, sets filter state */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter By Insurance</InputLabel>
          <Select
            labelId="filterByInsurance"
            id="filterByInsurance"
            value={csvArray.Insurance}
            label="Filter by Insurance Company"
            onChange={handleChange}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='United Health Care'>United HealthCare</MenuItem>
            <MenuItem value='Progressive'>Progressive</MenuItem>
            <MenuItem value='Blue Cross'>Blue Cross</MenuItem>
          </Select>
        </FormControl>
        <button
          onClick = {(e) => {
            e.preventDefault();
            if(csvFile){submit()};
          }}
        >
          submit
        </button>
      </div>

      {/* Takes in state of csvArray so that you can swap out different tables */}
      <Table csvArray = {csvArray}/>

      {/* Download csv button */}
      <button
        className = "download"
        onClick = {(e) => {
          e.preventDefault();
          if(csvFile){downloadCsv()};
        }}
        >
          Download CSV
        </button>
    </div>
  );

}

export default App;
