import React, { useState, useEffect } from "react";

function UpdateProduct(props) {
  const [id, setId] = useState("");
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

  useEffect(() => {
    setId(props.productUpdate.id);
    setName(props.productUpdate.name);
    setPrice(props.productUpdate.price);
    setContent(props.productUpdate.content);
  }, []);

  function onSubmitUpdate(e) {
    e.preventDefault();
    props.onSubmitUpdate(id, name, price, content);
  }

  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <form>
            <span className="close" onClick={props.closeFormUpdate}>
              &times;
            </span>
            <h2>Sửa sản phẩm</h2>
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
              <button className="add-button" onClick={onSubmitUpdate}>
                Sửa
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default UpdateProduct;
