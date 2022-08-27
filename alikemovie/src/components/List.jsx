import React, { useState } from 'react';
import ModalInput from './Post';
import './List.css';

const List = () => {
  return (
    <>
      <div className='list_wrap'>
        <h2 className='list_title'>안녕하세여 영화리스트에여</h2>
        <div className='movie_list'>
          <div className='movies'>범죄도시2</div>
          <div className='movies'>반지의 제왕1</div>
          <div className='movies'>어쩌구저쩌구</div>
          <div className='movies'>숭구리당당숭당당</div>
        </div>
      </div>
    </>
  );
};

export default List;
