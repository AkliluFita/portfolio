import React from "react";
import "./product.css";

export default function Product({ id, img }) {
  return (
    <div className="p">
      <img src={img} key={id} alt="" className="p_img" />
    </div>
  );
}
