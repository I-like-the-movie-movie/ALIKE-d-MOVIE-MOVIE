import React, { useSelector } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

// const App = () => {
//   return (
//     <div>
//       {' '}
//       <Router />{' '}
//     </div>
//   );
// };

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
