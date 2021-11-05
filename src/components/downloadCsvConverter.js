function downloadCsvConverter(props) {

  // Get array of objects, then iterate through them to join values together using delim for csv export
  var outputData = props.map( Object.values );

  let csvContent = "data:text/csv;charset=utf-8," 
    + outputData.map(e => e.join(",")).join("\n");

  return csvContent;
}

export default downloadCsvConverter
