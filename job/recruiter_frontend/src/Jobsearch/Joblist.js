import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../addjob.css";
import "../second.css";
import "../jobsearch.css";

class Joblist extends Component {
  state = {
    //this will store all our data
    list: [],
    loading: true,
  };
  async componentDidMount() {
    const response = await axios.get("http://127.0.0.1:8000/api/joblist");
    // console.log(response);
    if (response.data.status === 200) {
      this.setState({
        list: response.data.joblist,
        loading: false,
      });
    }
  }

  render() {
    var listofjob = "";
    if (this.state.loading) {
      listofjob = (
        <tr>
          <td colSpan="3">
            <h2>Loading...</h2>
          </td>
        </tr>
      );
    } else {
      listofjob = this.state.list.map((item) => {
        return (
          <>
            <tr key={item.id}>
              {/* <td>{item.id}</td> */}
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>
                <button
                  type="button"
                  className="job-details-button"
                  key={item.id}
                >
                  <Link to={`joblist/${item.id}`}>Details</Link>
                </button>
              </td>
            </tr>
          </>
        );
      });
    }
    return (
      <div className="container">
        <div className="row" className="py-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Job List
                  <Link
                    to={"jobpost"}
                    className="btn btn-primary btn-sm float-end"
                  >
                    Go Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      {/* <th>Id</th> */}
                      <th>Title</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{listofjob}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Joblist;
