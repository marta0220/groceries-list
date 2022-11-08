import Product from "./Product";
export default function ProductList({ products, handleCheck, handleDelete }) {
  return (
    <ul className="ProductList">
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
