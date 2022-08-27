import React, { useSelector } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';

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
        <Route path='/' element={<Home />}></Route>
        <Route path='/list' element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
