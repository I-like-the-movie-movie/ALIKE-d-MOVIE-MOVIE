import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List2 from "./components/List2";
import Post2 from "./components/Post2";
import Review from "./components/Review";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post2" element={<Post2 />}></Route>
        <Route path="/list2" element={<List2 />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/review/:id" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
