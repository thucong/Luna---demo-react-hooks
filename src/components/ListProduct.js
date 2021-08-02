import React from "react";
import ItemProduct from "./ItemProduct";

function ListProduct(props) {
  let products = props.products;

  function listProduct(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ItemProduct
            key={product.id}
            product={product}
            index={index}
            onDelete={props.onDelete}
            onUpdateForm={props.onUpdateForm}
            onShowProduct={props.onShowProduct}
          />
        );
      });
    }
    return result;
  }

  return (
    <div>
      <table className="content">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá sản phẩm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>{listProduct(products)}</tbody>
      </table>
    </div>
  );
}
export default ListProduct;
