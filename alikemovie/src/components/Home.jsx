import { useState } from "react";
import styled from "styled-components";
// import Modal from "./components/Modal";
import ModalReview from "./Modals/ModalReview";


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <AppWrap>
      <Button onClick={onClickButton}>Click Me !</Button>
      {isOpen && (<ModalReview
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />)}
    </AppWrap>
  );
}

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #fa9f98;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

const AppWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`;






  

  


export default Home