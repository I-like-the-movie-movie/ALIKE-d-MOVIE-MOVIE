import React, { useSelector } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import List from './components/List';
<<<<<<< HEAD
import List2 from "./components/List2";
import Post2 from "./components/Post2";
import Review from "./components/Review";
=======
import List2 from './components/List2';
import Post from './components/Post';
import Post2 from './components/Post2';
import Review from './components/Review';
import List from './components/List';
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90

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
<<<<<<< HEAD
        <Route path="/" element={<Home />}></Route>
        <Route path="/post2" element={<Post2 />}></Route>
        <Route path="/list2" element={<List2 />}></Route>
        <Route path="/review" element={<Review />}></Route>
=======
        <Route path='/' element={<Home />}></Route>
        <Route path='/post' element={<Post2 />}></Route>
        <Route path='/list' element={<List2 />}></Route>
        <Route path='/review' element={<Review />}></Route>
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
        <Route path="/review/:id" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
