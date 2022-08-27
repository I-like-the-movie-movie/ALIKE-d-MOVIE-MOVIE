import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Logo from '../assets/logo.svg';
// import ModalReview from './Modals/ModalReview';
import ModalInput from './Modals/ModalInput';
import List from './List';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className='home_wrap'>
        <img className='logo' src={Logo} alt='로고' />

        <div className='list_button'>
          <button className='now_movie_list' onClick={() => {
            navigate('/list')
          }}>
            지금까지의 영화들
          </button>

          <button className='review_list' onClick={onClickButton}>
            리뷰쓰러 가기
          </button>
          {isOpen && (
            <ModalInput
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
