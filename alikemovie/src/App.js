import React, { useSelector } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      {' '}
      <Router />{' '}
    </div>
  );
};

const Router = () => {
  // const todos = useSelector(state => state.todos.todos);
  // console.log(todos);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;