import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddProduct({ show, handleClose, handleAddProduct }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleAdd() {
    if (!title || !desc || !price || !image) {
      alert("fill the blank");
      return;
    }

    let newObj = {
      title,
      desc,
      price,
      image,
      id: Date.now(),
    };
    handleAddProduct(newObj);

    setTitle("");
    setDesc("");
    setPrice("");
    setImage("");
    handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="my-3"
              placeholder="Title"
            />
            <FormControl
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="my-3"
              placeholder="Description"
            />
            <FormControl
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="my-3"
              placeholder="Price"
            />
            <FormControl
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="my-3"
              placeholder="Image"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;
