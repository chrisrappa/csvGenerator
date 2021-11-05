import Sorter from './Sorters';

export const processCSV = (str, delim = ',') => {
  //creates columns and rows from text sent in by deliminator
  const columns = str.slice(0, str.indexOf('\n') - 1).split(delim);
  const rows = str.slice(str.indexOf('\n' ) + 1).split('\n');
  
  //maps out data in rows and splits by deliminator then converts row in to object
  const dataToArray = rows.map(row => {
    const values = row.split(delim);
    const eachObject = columns.reduce((obj, column, i) => {
      obj[column] = values[i];
      return obj;
    }, {})

    return eachObject;
  })

  //sends out the array of objects to the sorter to be sorted, then returns the sorted value
  const sorted = Sorter(dataToArray);
  return sorted;

}


