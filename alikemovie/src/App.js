import React, { useSelector } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import List from './components/List';
import List2 from './components/List2';
import Post from './components/Post';
import Review from './components/Review';

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
        <Route path='/post' element={<Post />}></Route>
        <Route path='/list2' element={<List2 />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path="/review/:id" element={<Review />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
