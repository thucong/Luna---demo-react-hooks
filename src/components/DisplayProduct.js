import React, { useState, useEffect } from "react";

function DisplayProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setName(props.showProduct.name);
    setPrice(props.showProduct.price);
    setContent(props.showProduct.content);
  }, []);

  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <form>
            <span className="close" onClick={props.closeDisplayProduct}>
              &times;
            </span>
            <h2>Thông tin sản phẩm</h2>
            <div className="fomrgroup">
              <b>Tên sản phẩm:</b>
              <input
                type="text"
                name="name"
                placeholder="Tên sản phẩm"
                value={name}
                disabled
              />
            </div>
            <div className="fomrgroup">
              <b>Giá sản phẩm (VNĐ):</b>
              <input
                type="text"
                name="price"
                placeholder="Giá sản phẩm"
                value={price}
                disabled
              />
            </div>
            <div className="fomrgroup">
              <b>Mô tả sản phẩm:</b>
              <textarea
                placeholder="Mô tả sản phẩm"
                value={content}
                disabled
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default DisplayProduct;
