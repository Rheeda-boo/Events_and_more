// importing react & various components
import React from 'react';
import Welcome from "./Components/Welcome";
import Form from'./Components/Form';

function App() {
  return (
    <div className="App">
      {/* calling welcome.js and form.js */}
        <Welcome/>      
        <Form/>
  

    </div>
  );
}

export default App;
