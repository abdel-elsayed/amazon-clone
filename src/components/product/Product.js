import React from "react";
import "./Product.css";

import { useStateValue } from "../../context/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      {/* <img src="https://images.squarespace-cdn.com/content/50d7e2ade4b015296cce82ae/1558239651944-7PIGU3SZ6O15XN6K4R6X/2019_112.png?content-type=image%2Fpng"></img> */}

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
