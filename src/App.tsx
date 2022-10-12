import React from 'react';

const FROM_FILE = process.env.REACT_APP_ENV_FROM_FILE || "No variable found";
const FROM_ENV = process.env.REACT_APP_ENV_FROM_ENV || "No variable found";


function App() {
  return (
    <>
      <h1>Env from file</h1>
      <p>{FROM_FILE}</p>
      <h1>Env set only in environment</h1>
      <p>{FROM_ENV}</p>
    </>

  );
}

export default App;
