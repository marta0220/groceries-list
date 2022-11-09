import ProductList from "./ProductList";
export default function Content({ products, handleCheck, handleDelete }) {
  return (
    <main>
      {products.length ? (
        <ProductList
          products={products}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <div style={{ marginTop: "15%" }}>Your list is empty</div>
      )}
    </main>
  );
}
