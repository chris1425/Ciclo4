import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";

export const ProductoItem = ({ title, image, category, price, id }) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;



  return (

    <div key={id} className="producto">
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="añadir">Añadir al carrito</button>
      </div>

    </div>
  );
};
