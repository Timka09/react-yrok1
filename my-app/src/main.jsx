import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById("root"))
  .render
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  ();

// Створити елемент

const elem = React.createElement("p", { x: 2, y: 4 }, "lorem");

console.log(elem);

// Render elem

createRoot(document.getElementById("root")).render(elem);

// JSX
// 1
const jsxElem = <p>Hello world!</p> // <----;
createRoot(document.getElementById("root")).render(jsxElem);
// 2
const jsxElemts = (
  <div>
    {elem}
    {jsxElem}
  </div>
);  
createRoot(document.getElementById("root")).render(jsxElemts);
// 3
const root = createRoot(document.getElementById("root"))
  
  root.render(jsxElemts);

const isLogged = true;

const isWelcome = isLogged ? (<p>Hello</p>) : <p>Go back sorry!</p>
root.render(isWelcome)


// 4
const products = [
  { id: 1, name: "Ноутбук", price: 25000 },
  { id: 2, name: "Смартфон", price: 15000 },
  { id: 3, name: "Навушники", price: 2000 },
];

const productsList = (
  <ul>
    {products.map((product) => (
      <li key={product.id}>
        {product.name} - {product.price} грн.
      </li>
    ))}
  </ul>
);

root.render(productsList)
