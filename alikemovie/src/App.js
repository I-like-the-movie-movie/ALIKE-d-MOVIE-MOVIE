import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Post from "./components/Post";
import Review from "./components/Review";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/review/:id" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
