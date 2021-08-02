import React from "react";
import { Link } from "react-router-dom";

function ItemProduct(props) {
  let { product, index } = props;

  function onDelete() {
    props.onDelete(product.id);
  }

  function onUpdateForm() {
    props.onUpdateForm(product.id);
  }

  function onShowProduct() {
    props.onShowProduct(product.id);
  }

  return (
    <tr key={product.id}>
      <td>{index + 1}</td>
      <td className="display" onClick={onShowProduct}>
        <Link to="/chi-tiet">{product.name}</Link>
      </td>
      <td>{product.price}</td>
      <td>
        <Link to="/sua">
          <button className="edit-button" onClick={onUpdateForm}>
            Sửa
          </button>
        </Link>
        <button className="delete-button" onClick={onDelete}>
          Xóa
        </button>
      </td>
    </tr>
  );
}
export default ItemProduct;
