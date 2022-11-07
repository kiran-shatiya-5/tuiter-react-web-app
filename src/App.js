// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1> Welcome to Kiran's Web development Fall 2022 Assignment</h1>
//         <h2> This branch is with regards to Assignment 2</h2>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment6 from "./labs/a6";
import Assignment7 from "./labs/a7";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index
                   element={<Labs/>}/>
            <Route path ="/a6"
                     element={<Assignment6/>}/>
            <Route path ="/a7"
                     element={<Assignment7/>}/>
            <Route path="/hello"
                   element={<HelloWorld/>}/>
            <Route path="/tuiter/*"
                   element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;



