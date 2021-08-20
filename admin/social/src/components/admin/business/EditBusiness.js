import Sidebar from "../../Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import ReceiptIcon from "@material-ui/icons/Receipt";
import "../css/EditBusiness.css";
import { Button } from "@material-ui/core";
const EditBusiness = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState({
    business_name: "",
    business_email: "",
    business_type: "",
    phone: "",
    location: "",
    profit: "",
  });
  useEffect(() => {
    async function data() {
      const res = await axios.get(
        `http://localhost:8000/api/business/edit/${id}`
      );
      if (res.data.statusCode === 200) {
        setBusiness({
          business_name: res.data.business.business_name,
          business_email: res.data.business.business_email,
          business_type: res.data.business.business_type,
          phone: res.data.business.phone,
          location: res.data.business.location,
          profit: res.data.business.profit,
        });
      } else {
        console.log("Error");
      }
    }
    data();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/business/edit/${id}`, business);
  };
  const handleChange = (e) => {
    setBusiness({ ...business, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit__user">
      <Sidebar />
      <div className="container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="edit_user_info">
            <PersonIcon />
            <input
              placeholder="Enter business name"
              type="text"
              name="business_name"
              value={business.business_name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="edit_user_info">
            <EmailIcon />
            <input
              placeholder="Enter business email"
              type="text"
              name="business_email"
              value={business.business_email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="edit_user_info">
            <ReceiptIcon />
            <input
              placeholder="Enter business type"
              type="text"
              name="business_type"
              value={business.business_type}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="edit_user_info">
            <ReceiptIcon />
            <input
              placeholder="Enter business phone"
              type="number"
              name="phone"
              value={business.phone}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="edit_user_info">
            <ReceiptIcon />
            <input
              placeholder="Enter business type"
              type="text"
              name="location"
              value={business.location}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="edit_user_info">
            <ReceiptIcon />
            <input
              placeholder="Enter business profit"
              type="number"
              name="profit"
              value={business.profit}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <Button type="submit" variant="outlined" color="primary">
            Edit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditBusiness;
