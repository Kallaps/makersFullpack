import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Employees from "./components/Employees";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const App = () => {
  // ===========modal========================
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // modal===========================

  // ? products

  const [products, setProducts] = useState([]);
  // ! create
  function handleAddProduct(newObj) {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);

    console.log(products);
  }

  // ! delete
  function handleDelete(id) {
    let newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  }

  // !edit
  // состояние для манипулирования модальным окном редактирования
  const [showEditModal, setShowEditModal] = useState(false);

  //  функция для закрытия модального окна
  const handleEditClose = () => setShowEditModal(false);

  //  функция для открытия модального окна
  const handleEditShow = () => setShowEditModal(true);

  //  состояние для хранения редактируемого обьекта(в процессе редактирования)
  const [editProduct, setEditProduct] = useState(null);

  // функция для получения редактируемого обьекта из общего массива products
  function handleEdit(id) {
    // фильтруем массив оставляя только редактироемый обьект
    let obj = products.filter((item) => item.id == id);
    // обновляем состояние editProduct и помещаем в него то , что получили выше
    setEditProduct(obj[0]);

    // отображаем модальное окно
    handleEditShow();
  }

  // !saveChanges

  // функция для сохранения при редактировании
  function handleSave(editedObj) {
    // перебираем product при помощи map , если заменяем старый обьект на отредактированный остальные возвращаем без изменений
    let newProducts = products.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      } else {
        return item;
      }
    });
    setProducts(newProducts); //обновляем состояние product
    setShowEditModal(false); // закрываем модальное окно
  }

  return (
    <div>
      <Header handleShow={handleShow} />;
      <AddProduct
        handleAddProduct={handleAddProduct}
        show={show}
        handleClose={handleClose}
      />
      <ProductList
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      ;
      {showEditModal && (
        <EditProduct
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          editProduct={editProduct}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;
