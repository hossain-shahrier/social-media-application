import Sidebar from "../../Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import ReceiptIcon from "@material-ui/icons/Receipt";
import "../css/EditCommunities.css";
import { Button } from "@material-ui/core";
const EditCommunities = () => {
  const { id } = useParams();
  const [community, setCommunities] = useState({
    community_name: "",
    community_type: "",
    status: "",
  });
  useEffect(() => {
    async function data() {
      const res = await axios.get(
        `http://localhost:8000/api/community/edit/${id}`
      );
      if (res.data.statusCode === 200) {
        setCommunities({
          community_name: res.data.community.community_name,
          community_type: res.data.community.community_type,
          status: res.data.community.status,
        });
      } else {
        console.log("Error");
      }
    }
    data();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8000/api/community/edit/${id}`,
      community
    );
  };
  const handleChange = (e) => {
    setCommunities({ ...community, [e.target.name]: e.target.value });
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
              placeholder="Enter community name"
              type="text"
              name="community_name"
              value={community.community_name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="edit_user_info">
            <EmailIcon />
            <input
              placeholder="Enter community type"
              type="text"
              name="community_type"
              value={community.community_type}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="edit_user_info">
            <ReceiptIcon />
            <input
              placeholder="Enter community status"
              type="text"
              name="status"
              value={community.status}
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

export default EditCommunities;
