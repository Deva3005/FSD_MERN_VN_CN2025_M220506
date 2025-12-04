// 6. Display an array of product objects (id, name, price) in a `<table>` using `.map()`.
// 'https://dummyjson.com/products'

import React, { useState, useEffect } from "react";
import axios from "axios";
import style from './T06.module.css'

const T06 = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setResult(
        await axios
          .get("https://dummyjson.com/products")
          .then((e) => e.data.products)
      );
    };
    loadData();
  }, []);
  return (
    <div className={style.products}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {result.slice(0, 10).map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default T06;
