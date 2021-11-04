function downloadCsvConverter(props) {

  var outputData = props.map( Object.values );

  let csvContent = "data:text/csv;charset=utf-8," 
    + outputData.map(e => e.join(",")).join("\n");

  return csvContent;
}

export default downloadCsvConverter
