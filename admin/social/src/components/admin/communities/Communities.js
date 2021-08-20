/* eslint-disable no-lone-blocks */
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Communities.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { NavLink } from "react-router-dom";
import Sidebar from "../../Sidebar";
const Communities = () => {
  const [communities, setCommunities] = useState({
    communities: [],
    loading: true,
  });

  const deleteAction = async (id) => {
    const res = await axios.delete(
      `http://localhost:8000/api/community/delete/${id}`
    );
    setCommunities({ communities: res.data.communities, loading: false });
  };

  useEffect(() => {
    async function data() {
      const res = await axios.get("http://localhost:8000/api/communities");
      if (res.data.statusCode === 200) {
        setCommunities({
          communities: res.data.communities,
          loading: false,
        });
      }
    }
    data();
  }, []);

  let community_table;
  if (communities.loading) {
    community_table = (
      <tbody>
        <tr>
          <td>Loading....</td>
        </tr>
      </tbody>
    );
  } else {
    community_table = communities.communities.map((community) => (
      <tbody key={community.community_name}>
        <tr>
          <td>{community.community_name}</td>
          <td>{community.community_type}</td>
          <td>{community.status}</td>
          <td>
            <NavLink to={`/community/edit/${community.id}`}>
              <EditIcon className="table__icon" />
            </NavLink>
          </td>
          <td>
            <DeleteIcon
              className="table__icon"
              onClick={() => {
                deleteAction(community.id);
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
                <th>Community name</th>
                <th>Community type</th>
                <th>Satus</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {community_table}
          </table>
        </div>
        <div className="right__container"></div>
      </div>
    </div>
  );
};

export default Communities;
