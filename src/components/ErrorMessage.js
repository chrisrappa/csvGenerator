import React from 'react';

function ErrorMessage() {
  return (
    <div className = 'error-container'>
      <thead>
        <tr>
          <h3>Original Document Columns Must Be In the Following Layout</h3>
        </tr>
        <tr>
          <th>UserId</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Version</th>
          <th>Insurance</th>
        </tr>
      </thead>
    </div>
  )
}

export default ErrorMessage
