import React, { useState, useEffect } from "react";
import ListProduct from "./ListProduct";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import DisplayProduct from "./DisplayProduct";
import { Link, useHistory } from "react-router-dom";

function IndexProduct(props) {
  const [products, setProducts] = useState([]);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [productUpdate, setProductUpdate] = useState("");
  const [displayProduct, setDisplayProduct] = useState(false);
  const [showProduct, setShowProduct] = useState("");
  const history = useHistory();
  function AddForm() {
    setDisplayAddForm(true);
  }

  function CloseForm() {
    setDisplayAddForm(false);
    history.push("/");
  }

  function randomId() {
    const min = 1;
    const max = 100;
    return min + Math.random() * (max - min);
  }

  function onSubmit(data) {
    const newData = {
      id: randomId(),
      ...data,
    };
    const newProduct = [...products];
    newProduct.push(newData);
    setProducts(newProduct);
    localStorage.setItem("products", JSON.stringify(newProduct));
    CloseForm();
  }

  useEffect(() => {
    if (localStorage && localStorage.getItem("products")) {
      let products = JSON.parse(localStorage.getItem("products"));
      setProducts(products);
    }
  }, []);

  function onDelete(data) {
    const index = products.findIndex((x) => x.id === data);
    const newData = [...products];
    if (index !== -1) {
      newData.splice(index, 1);
      setProducts(newData);
    }
    localStorage.setItem("products", JSON.stringify(newData));
    history.push("/");
  }

  function showFormUpdate() {
    setDisplayUpdateForm(true);
  }

  function closeFormUpdate() {
    setDisplayUpdateForm(false);
    history.push("/");
  }

  function onUpdateForm(id) {
    const index = products.findIndex((x) => x.id === id);
    const newProduct = [...products];
    const productUpdate = newProduct[index];
    setProductUpdate(productUpdate);
    showFormUpdate();
  }

  function onSubmitUpdate(id, name, price, content) {
    if (id) {
      const index = products.findIndex((x) => x.id === id);
      products[index] = { id, name, price, content };
      setProductUpdate("");
    }
    setProducts(products);
    localStorage.setItem("products", JSON.stringify(products));
    closeFormUpdate();
  }

  function showDisplayProduct() {
    setDisplayProduct(true);
  }

  function closeDisplayProduct() {
    setDisplayProduct(false);
    history.push("/");
  }

  function onShowProduct(id) {
    const index = products.findIndex((x) => x.id === id);
    const newProduct = [...products];
    const showProduct = newProduct[index];
    setShowProduct(showProduct);
    showDisplayProduct();
  }

  return (
    <div className="container">
      <div>
        <h1>Thông tin sản phẩm</h1>
      </div>
      <hr />
      <div>
        <Link to="/them">
          <button className="add-button" onClick={AddForm}>
            Thêm sản phẩm
          </button>
        </Link>
      </div>
      {displayAddForm ? (
        <div>
          <AddProduct CloseForm={CloseForm} onSubmit={onSubmit} />
        </div>
      ) : (
        ""
      )}
      {displayUpdateForm ? (
        <div>
          <UpdateProduct
            productUpdate={productUpdate}
            closeFormUpdate={closeFormUpdate}
            onSubmitUpdate={onSubmitUpdate}
          />
        </div>
      ) : (
        ""
      )}
      {displayProduct ? (
        <div>
          <DisplayProduct
            showProduct={showProduct}
            closeDisplayProduct={closeDisplayProduct}
          />
        </div>
      ) : (
        ""
      )}
      <div>
        <ListProduct
          products={products}
          onDelete={onDelete}
          onUpdateForm={onUpdateForm}
          onShowProduct={onShowProduct}
        />
      </div>
    </div>
  );
}
export default IndexProduct;
