import { useState } from 'react';
import './Home.css';
import Logo from '../assets/logo.svg';
import ModalReview from './Modals/ModalReview';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className='home_wrap'>
        <img className='logo' src={Logo} alt='로고' />
        <div className='list_button'>
          <button className='movie_list'>지금까지의 영화들</button>
          <button className='review_list' onClick={onClickButton}>
            리뷰쓰러 가기
          </button>
          {isOpen && (
            <ModalReview
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
