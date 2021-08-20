import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
const CoffeeDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, decription } = product;
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(product);
  const fetchProductDetail = async () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => dispatch(selectedProduct(json)));
  };
  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              style={{ width: "40%", marginRight: "80px" }}
            ></img>
          </div>

          <div
            style={{ marginTop: "40px", marginRight: "40px", float: "left" }}
          >
            <NavLink to="/coffeeroom">
              <Button
                style={{ border: "1px solid gray", marginBottom: "10px" }}
              >
                Back
              </Button>
            </NavLink>

            <h1 style={{ marginBottom: "10px" }}>{title}</h1>
            <h2 style={{ marginBottom: "10px" }}>${price}</h2>
            <p style={{ marginBottom: "10px" }}>{category}</p>
            <Button variant="outlined" color="primary">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
