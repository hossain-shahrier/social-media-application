/* eslint-disable no-lone-blocks */
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Businesses.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { NavLink } from "react-router-dom";
import Sidebar from "../../Sidebar";
const Businesses = () => {
  const [userBusinesses, setBusinesses] = useState({
    businesses: [],
    loading: true,
  });

  const deleteAction = async (id) => {
    const res = await axios.delete(
      `http://localhost:8000/api/business/delete/${id}`
    );
    setBusinesses({ businesses: res.data.businesses, loading: false });
  };

  useEffect(() => {
    async function data() {
      const res = await axios.get("http://localhost:8000/api/businesses");
      if (res.data.statusCode === 200) {
        setBusinesses({
          businesses: res.data.businesses,
          loading: false,
        });
      }
    }
    data();
  }, []);

  let business_table;
  if (userBusinesses.loading) {
    business_table = (
      <tbody>
        <tr>
          <td>Loading....</td>
        </tr>
      </tbody>
    );
  } else {
    business_table = userBusinesses.businesses.map((business) => (
      <tbody key={business.business_email}>
        <tr>
          <td>{business.business_name}</td>
          <td>{business.business_email}</td>
          <td>{business.business_type}</td>
          <td>{business.phone}</td>
          <td>{business.location}</td>
          <td>{business.profit}</td>
          <td>
            <NavLink to={`/business/edit/${business.id}`}>
              <EditIcon className="table__icon" />
            </NavLink>
          </td>
          <td>
            <DeleteIcon
              className="table__icon"
              onClick={() => {
                deleteAction(business.id);
              }}
            />
          </td>
        </tr>
      </tbody>
    ));
  }

  return (
    <div className="users">
      <Sidebar />
      <div className="container">
        <div className="left__container">
          <table className="table">
            <thead>
              <tr className="table_header">
                <th>Business name</th>
                <th>Business email</th>
                <th>Business type</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Profit</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {business_table}
          </table>
        </div>
        <div className="right__container"></div>
      </div>
    </div>
  );
};

export default Businesses;
