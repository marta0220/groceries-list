export default function Content({ products, handleCheck, handleDelete }) {
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
