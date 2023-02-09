import React from "react";
import { Link, useParams } from "react-router-dom";

import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  return (
    <section className="section product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <Link to="/" className="btn">
        Home
      </Link>
    </section>
  );
};

export default SingleProduct;
