import { useState } from "react";
export default function Content() {
  const [products, setProducts] = useState([
    { id: 1, name: "bread", checked: false },
    { id: 2, name: "milk", checked: false },
    { id: 3, name: "eggs", checked: false },
  ]);
  function handleCheck(id) {
    const listProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(listProducts);
    localStorage.setProduct("shoppinglist", JSON.stringify(listProducts));
  }
  function handleDelete(id) {
    const listProducts = products.filter((product) => product.id !== id);
    setProducts(listProducts);
    localStorage.setProduct("shoppinglist", JSON.stringify(listProducts));
  }
  return (
    <main className="container">
      {products.length ? (
        <ul>
          {products.map((product) => (
            <li className="product row" key={product.id}>
              <input
                onChange={() => handleCheck(product.id)}
                type="checkbox"
                checked={product.checked}
                className="col"
              />
              <label
                onDoubleClick={() => handleCheck(product.id)}
                style={
                  product.checked === true
                    ? { textDecoration: "line-through" }
                    : null
                }
                className="col"
              >
                {product.name}
              </label>{" "}
              <button
                onClick={() => handleDelete(product.id)}
                className="btn col"
              >
                <i class="fa-solid fa-trash-can trash"></i>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ marginTop: "15%" }}>Your list is empty</div>
      )}
    </main>
  );
}
