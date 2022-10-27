import React from 'react';
import Cat from './Cat.gif';

function App() {
  return (
    <div className="App">
      <div class="jumbotron text-center">
        <h1>Welcome to Swissfappers</h1>
        <p>This Site is still in development, check back later</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-4 col-sm-8 col-10">
          <img src={Cat} class="img-fluid rounded" alt="Gif of a Cat sleeping" />
      </div>
      </div>
    </div>
  );
}

export default App;
