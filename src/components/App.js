import React from 'react';
import Navbar from './Navbar'; // Adjust the path if necessary
import Home from './Home'; // Adjust the path if necessary
import About from './About'; // Import the newly created About component

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
    </div>
  );
}

export default App;

