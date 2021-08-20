import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../addjob.css";
import "../second.css";
import swal from "sweetalert";

class DeleteJob extends Component {
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

  deleteJob = async (e, id) => {
    const thisClick = e.currentTarget;
    thisClick.innerText = "Deleting";
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/removejob/${id}`
    );
    if (response.data.status === 200) {
      thisClick.closest("tr").remove();
      // console.log(response.data.message);
      swal({
        title: "Job Deleted",
        text: response.data.message,
        icon: "warning",
        button: "Okay",
        dangerMode: true,
      });
    }
  };

  render() {
    var listofjob = "";
    if (this.state.loading) {
      listofjob = (
        <tr>
          <td colSpan="8">
            <h2>Loading...</h2>
          </td>
        </tr>
      );
    } else {
      listofjob = this.state.list.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.info}</td>
            <td>{item.category}</td>
            <td>{item.type}</td>
            <td>{item.location}</td>
            <td>{item.vacancy}</td>
            <td>{item.applicants}</td>
            <td>
              <button
                type="button"
                onClick={(e) => this.deleteJob(e, item.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
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
                  Delete Job
                  <Link
                    to={"/jobpost"}
                    className="btn btn-primary btn-sm float-end"
                  >
                    Go Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-light table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Details</th>
                      <th>Category</th>
                      <th>Type</th>
                      <th>Location</th>
                      <th>Vacancy</th>
                      <th>Applicant</th>
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

export default DeleteJob;
