import React, { useState } from "react";

function AddProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangePrice(e) {
    setPrice(e.target.value);
  }

  function onChangeContent(e) {
    setContent(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!props.onSubmit) return;
    const data = {
      name: name,
      price: price,
      content: content,
    };
    props.onSubmit(data);
    setName("");
    setPrice("");
    setContent("");
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <form>
          <span className="close" onClick={props.CloseForm}>
            &times;
          </span>
          <h2>Thêm sản phẩm</h2>
          <div className="fomrgroup">
            <b>Tên sản phẩm:</b>
            <input
              type="text"
              name="name"
              placeholder="Tên sản phẩm"
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div className="fomrgroup">
            <b>Giá sản phẩm (VNĐ):</b>
            <input
              type="text"
              name="price"
              placeholder="Giá sản phẩm"
              value={price}
              onChange={onChangePrice}
            />
          </div>
          <div className="fomrgroup">
            <b>Mô tả sản phẩm:</b>
            <textarea
              placeholder="Mô tả sản phẩm"
              value={content}
              onChange={onChangeContent}
            ></textarea>
          </div>
          <div className="fomrgroup">
            <button className="add-button" onClick={onSubmit}>
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddProduct;
