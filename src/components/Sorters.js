
export default function Sorter(props){

  const csvArray = props;
  
  const compareLastName = ((a, b) => {
    if(a.LastName < b.LastName){
      return 1;
    }
  
    if(a.LastName > b.LastName){
      return -1;
    }
  
    return 0;
  })
  
  const compareInsurance = ((a, b) => {
    if(a.Insurance < b.Insurance){
      return 1;
    }
  
    if(a.Insurance > b.Insurance){
      return -1;
    }
  
    return 0;
  })
  
  // Remove duplicates using .reduce method and creating new Map with filtered objects 
  const removeDupes = [...csvArray.reduce((map, obj) => map.set(obj.UserId, obj), new Map()).values()];

  // Sort by last name then insurance company using algorithms above
  const sortedByLastName = removeDupes.sort(compareLastName);
  const sortedByInsurance = sortedByLastName.sort(compareInsurance);

  return sortedByInsurance;

}
