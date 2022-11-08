import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddProduct from "./AddProduct";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "bread", checked: false },
    { id: 2, name: "milk", checked: false },
    { id: 3, name: "eggs", checked: false },
  ]);
  const [newProduct, setNewProduct] = useState("");
  function setAndSaveProducts(listProducts) {
    setProducts(listProducts);
    localStorage.setProduct("shoppinglist", JSON.stringify(listProducts));
  }
  function addProduct(product) {
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const myNewItem = { id, name: product, checked: false };
    const listProducts = [...products, myNewItem];
    setAndSaveProducts(listProducts);
  }

  function handleCheck(id) {
    const listProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setAndSaveProducts(listProducts);
  }
  function handleDelete(id) {
    const listProducts = products.filter((product) => product.id !== id);
    setAndSaveProducts(listProducts);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!newProduct) return;
    addProduct(newProduct);
    setNewProduct("");
  }
  return (
    <div className="App">
      <Header />
      <AddProduct
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        handleSubmit={handleSubmit}
      />
      <Content
        products={products}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={products.length} />
    </div>
  );
}

export default App;
