import { useState } from "react";
export default function Content() {
  const [products, setProducts] = useState([
    { id: 1, name: "bread", checked: false },
    { id: 2, name: "milk", checked: false },
    { id: 3, name: "eggs", checked: false },
  ]);
  return (
    <main className="container">
      <ul>
        {products.map((product) => (
          <li className="product row" key={product.id}>
            <input type="checkbox" checked={product.checked} className="col" />
            <label className="col">{product.name}</label>{" "}
            <button className="btn col">
              <i class="fa-solid fa-trash-can trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
