// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import Messages from "./Pages/Messages";

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
    
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/messages" element={<Messages />} />
//         </Routes>
//       </Router>
    
//   );
// };

// export default App;


import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
  
function App() {
return (
    <Router>
      <h2>Hello bhaya
      </h2>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/messages' element={<Messages/>} />
    </Routes>
    </Router>
);
}
  
export default App;