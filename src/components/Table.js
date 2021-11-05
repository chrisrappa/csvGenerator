import ErrorMessage from "./ErrorMessage";

// Take in object array props, map, then display
export default function Table(props) {

  const csvArray = props.csvArray;

  return (
    <form id='csv-form'>
      
      { csvArray.length > 0 ? 
      
      <>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Version</th>
              <th>Insurance</th>
            </tr>
          </thead>
          <tbody>
            {
              csvArray.map((item, i) => (
                <tr key = {i}>
                  <td>{item.UserId}</td>
                  <td>{item.FirstName}</td>
                  <td>{item.LastName}</td>
                  <td>{item.Version}</td>
                  <td>{item.Insurance}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </>
      
      :  
        <ErrorMessage />
      }

    </form>
  )
}
