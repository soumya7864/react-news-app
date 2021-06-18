import "./App.css";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData } from "./store/cart-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
