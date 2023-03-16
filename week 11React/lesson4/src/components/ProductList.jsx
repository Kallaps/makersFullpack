import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const ProductList = ({ products, handleDelete, handleEdit }) => {
  return (
    <div>
      <center style={{ fontSize: "30px", margin: "20px" }}>Products</center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        {products.map((item) => (
          <ProductCard
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
