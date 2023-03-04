import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Itemcard from "./Itemcard";

function Products(){

    const [products, setProducts] = useState([]);

    useEffect(function () {
        axios
            .get("http://localhost:8045/cradle/products")
            .then((response) => setProducts(response.data))
    }, []);

    return (
      <div>
        <div class="container text-center">
          <div>
            <div class="row">
              {products
                .map((item, index) => {
                  return (
                    <Itemcard
                      id={item.productId}
                      productName={item.productName}
                      price={item.price}
                      imagePath={item.imagePath}
                      item={item}
                      key={index}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Products;