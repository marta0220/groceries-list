export default function AddProduct({
  newProduct,
  setNewProduct,
  handleSubmit,
}) {
  return (
    <form className="AddProduct" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add item"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        required
        autoFocus
      />

      <button type="submit"> Add</button>
    </form>
  );
}
