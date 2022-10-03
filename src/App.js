import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
// this is from the module "Let's add our own component to the App component. First, get rid of the starter JSX in App() and replace it with an empty <div>, as shown in the following example code:"

// return (
//   <div>
//   </div>
// );

// export default App;
