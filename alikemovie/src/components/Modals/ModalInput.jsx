import React from "react";
import "./ModlInput.css";

import Modal from "react-modal";

function ModalInput() {
  return (
    <form className="Form">
      <div className="Divleft">
        <h2> 제목 </h2>
        <input className="Input" type="text" />
        <h2> 별점 </h2>
        <div class="star-rating">
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
            ☆
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
        <h2> 작성자 </h2>
        <input type="text" />
        <h2> 내용 </h2>
        <textarea className="Textarea" />
      </div>
      <div className="Divright">
        <h2> 포스터 </h2>
        <input type="file" accept="image/*"></input>
        <div className="Preimg"></div>
      </div>
      <div className="Divfooter">
        <button> 작성하기 </button>
      </div>
    </form>
  );
}

export default ModalInput;