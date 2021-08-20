import { useEffect } from "react";
import CoffeeListing from "./CofeeListing";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import "./css/CoffeeListing.css";
const CoffeeRoom = () => {
  //   const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch(setProducts(json)));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="room">
      <CoffeeListing />
    </div>
  );
};

export default CoffeeRoom;
