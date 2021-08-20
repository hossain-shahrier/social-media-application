import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./css/CoffeeListing.css";
const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, catagory } = product;
    return (
      <div className="card-container" key={id}>
        <NavLink to={`/coffee/${id}`}>
          <div className="product-cards">
            <div className="product-card">
              <div className="image">
                <img src={image} alt={title} style={{ width: "50%" }} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">{price}$</div>
                <div className="meta">{catagory}</div>
              </div>
              <Button
                style={{
                  border: "1px solid gray",
                  marginTop: "20px",
                  width: "100%",
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </NavLink>
      </div>
    );
  });
  return renderList;
};

export default ProductListing;
