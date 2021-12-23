import React from "react";
import Product from "../product/Product";
import "./productList.css";
import p1 from "../../productImg/amazone.png";
import p2 from "../../productImg/blog.png";
import p3 from "../../productImg/eCommerce.png";

export default function ProductList() {
  return (
    <div className="pl">
      <div className="pl_text">
        <h2 className="pl_title">This is Aklilu's Product</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          recusandae, eos quisquam inventore natus nesciunt iste reiciendis
          consequatur voluptatem beatae vitae ratione aspernatur, et totam,
          dolor optio. Voluptate, libero labore.
        </p>
      </div>
      <div className="pl_list">
        <Product id="1" img={p1} />
        <Product id="2" img={p2} />
        <Product id="3" img={p3} />
      </div>
    </div>
  );
}
