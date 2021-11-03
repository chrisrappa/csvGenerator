// import React, { useState } from 'react';
// import CsvReader from './CsvReader';

// function Table() {


//   // const [csvArray, setCsvArray] = useState([]);
//   const [csvFile, setCsvFile] = useState('');
//   const [csvArray, setCsvArray] = useState({});

//   const submit = () => {
//     const file = csvFile;
//     const reader = new FileReader();

//     reader.onload = function(e) {
//       const text = e.target.result;
//       // setCsvArray(CsvReader(text));
//       console.log(CsvReader(text))
//       setCsvArray([1, 1, 1]);
//     }

//     reader.readAsText(file);

//   }

//   return (
//     <form id='csv-form'>
//       <div className = 'inputSubmit'>
//         <input
//           type='file'
//           accept='.csv'
//           id='csvFile'
//           onChange={(e) => (
//             setCsvFile(e.target.files[0])
//           )}
//         >
//         </input>
//         <br />
//         <button
//           onClick = {(e) => {
//             e.preventDefault();
//             if(csvFile){submit()};
//           }}
//         >
//           submit
//         </button>
//       </div>
//       { csvArray.length > 0 ? 
      
//       <>
//         <table>
//           <thead>
//             <tr>
//               <th>UserId</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Version</th>
//               <th>Insurance Company</th>
//             </tr>
//           </thead>
//           <tbody>

//             {
//               csvArray.map((item, i) => (
//                 <tr key = {i}>
//                   <td>{item.UserId}</td>
//                   <td>{item.FirstName}</td>
//                   <td>{item.LastName}</td>
//                   <td>{item.Version}</td>
//                   <td>{item.Insurance}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>

//       </>
      
//       : null }

//     </form>
//   )
// }

// export default Table
