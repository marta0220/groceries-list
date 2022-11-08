import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
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
    <div className="App">
      <Header />
      <Content
        products={products}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
