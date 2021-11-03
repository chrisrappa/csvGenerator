import Sorter from './Sorters';

export const processCSV = (str, delim = ',') => {
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

  const sorted = Sorter(dataToArray);
  return sorted;

}


