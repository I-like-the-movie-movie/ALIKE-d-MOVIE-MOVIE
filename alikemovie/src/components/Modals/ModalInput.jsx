import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Form>
      <Divleft>
        <h1> 제목 </h1>
        <Input type="text" />
        <h1> 별점 </h1>
        <div class="star-rating space-x-4 mx-auto">
          <input
            type="radio"
            id="5-stars"
            name="rating"
            value="5"
            v-model="ratings"
          />
          <label for="5-stars" class="star pr-4">
            ★
          </label>
          <input
            type="radio"
            id="4-stars"
            name="rating"
            value="4"
            v-model="ratings"
          />
          <label for="4-stars" class="star">
            ★
          </label>
          <input
            type="radio"
            id="3-stars"
            name="rating"
            value="3"
            v-model="ratings"
          />
          <label for="3-stars" class="star">
            ★
          </label>
          <input
            type="radio"
            id="2-stars"
            name="rating"
            value="2"
            v-model="ratings"
          />
          <label for="2-stars" class="star">
            ★
          </label>
          <input
            type="radio"
            id="1-star"
            name="rating"
            value="1"
            v-model="ratings"
          />
          <label for="1-star" class="star">
            ★
          </label>
        </div>
        <h1> 작성자 </h1>
        <input type="text" />
        <h1> 내용 </h1>
        <Textarea />
      </Divleft>
      <Divright>
        <h1> 포스터 </h1>
        <input type="file" accept="image/*"></input>
        <Preimg></Preimg>
      </Divright>
      <p>
        <button> 작성하기 </button>
      </p>
    </Form>
  );
}

const Form = styled.form`
  border: 1px solid;

  display: inline-block;
  width: 80%;
  height: 400px;
  margin: 30px;
  padding: 10px;
`;

const Divleft = styled.div`
  /* border: 1px dashed; */

  float: left;
  height: 90%;
  width: 45%;
`;

const Divright = styled.div`
  /* border: 1px dashed; */

  display: inline-block;
  margin: 0px 10px;
  height: 90%;
  width: 45%;
`;

const Preimg = styled.div`
  border: 1px solid;
  margin: 10px 0px;
  height: 200px;
  width: 170px;
`;

const Input = styled.input`
  /* width: 200px; */
`;

const Textarea = styled.textarea`
  height: 60px;
  width: 150px;
`;

export default App;
