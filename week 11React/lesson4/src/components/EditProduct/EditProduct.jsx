import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditProduct({
  handleEditClose,
  showEditModal,
  editProduct,
  handleSave,
}) {
  // состояние для отредактированного обьекта, в качестве начального значения задаем тот обьект который хотим отредактировать
  const [productToEdit, setProductToEdit] = useState(editProduct);

  // используя хук useeffect следим за состоянием editproduct и когда это состояние меняется  с null на значение редактируемого обьекта мы обновляем  productToEdit на это значение
  useEffect(() => {
    setProductToEdit(editProduct);
  }, [editProduct]);

  // функции для получения актальных данных из инпута и внесение их в producttoedit то едит хранит последне парные данные
  const editTitle = (e) => {
    let newObj = {
      ...productToEdit,
      title: e.target.value,
    };
    setProductToEdit(newObj);
  };

  const editDescr = (e) => {
    let newObj = {
      ...productToEdit,
      desc: e.target.value,
    };
    setProductToEdit(newObj);
  };

  const editPrice = (e) => {
    let newObj = {
      ...productToEdit,
      price: e.target.value,
    };
    setProductToEdit(newObj);
  };

  const editImage = (e) => {
    let newObj = {
      ...productToEdit,
      image: e.target.value,
    };
    setProductToEdit(newObj);
  };

  console.log(productToEdit);

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={productToEdit.title}
              onChange={editTitle}
              className="my-3"
              placeholder="Title"
            />
            <FormControl
              value={productToEdit.desc}
              onChange={editDescr}
              className="my-3"
              placeholder="Description"
            />
            <FormControl
              value={productToEdit.price}
              onChange={editPrice}
              className="my-3"
              placeholder="Price"
            />
            <FormControl
              value={productToEdit.image}
              onChange={editImage}
              className="my-3"
              placeholder="Image"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSave(productToEdit);
            }}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;
