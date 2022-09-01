import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
<<<<<<< HEAD
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
=======
import List from "./components/List";
import Post from "./components/Post";
import Review from "./components/Review";
import Put from "./components/Put";
>>>>>>> 19d3394ce136104f56033bbf09422ad8acc8913e

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/review" element={<Review />}></Route>
=======
        <Route path='/' element={<Home />}></Route>
        <Route path='/post' element={<Post2 />}></Route>
        <Route path='/list' element={<List2 />}></Route>
        <Route path='/review' element={<Review />}></Route>
>>>>>>> 517e5c972437189ce8d5df653a099996af467b90
        <Route path="/review/:id" element={<Review />} />
        <Route path="/put/:id" element={<Put />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
