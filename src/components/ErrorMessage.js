import React from 'react';

function ErrorMessage() {
  return (
    <div>
      <thead>
        <tr>
          Table Columns Must Be In the Following Layout
        </tr>
        <tr>
          <th>UserId</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Version</th>
          <th>Insurance Company</th>
        </tr>
      </thead>
    </div>
  )
}

export default ErrorMessage
