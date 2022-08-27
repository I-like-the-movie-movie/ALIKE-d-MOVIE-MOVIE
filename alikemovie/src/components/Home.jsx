import Reacts from 'react';
import './Home.css';
import Logo from '../assets/logo.svg';
import OrangeArrow from '../assets/arrow_orange.svg';

const Home = () => {
  return (
    <>
      <div className='home_wrap'>
        <img className='logo' src={Logo} alt='로고' />
        <div className="list_button">
          <button onClick="" className='movie_list'>지금까지의 영화들</button>
          <button onClick="" className='review_list'>리뷰쓰러 가기</button>
        </div>
      </div>
    </>
  );
};

export default Home;
