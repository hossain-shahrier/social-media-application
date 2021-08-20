import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../addjob.css";
import "../second.css";
import swal from "sweetalert";

class JobAdd extends Component {
  state = {
    jobtitle: "",
    jobinfo: "",
    jobcategory: "",
    jobtype: "",
    joblocation: "",
    jobvacancy: "",
    jobapplicants: "",
    errorlist: [],
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveJob = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://127.0.0.1:8000/api/addjob",
      this.state
    );
    if (response.data.status === 200) {
      // console.log(response.data.message);
      swal({
        title: "Job Added",
        text: response.data.message,
        icon: "success",
        button: "Okay",
      });
      this.setState({
        jobtitle: "",
        jobinfo: "",
        jobcategory: "",
        jobtype: "",
        joblocation: "",
        jobvacancy: "",
        jobapplicants: "",
      });
    } else {
      this.setState({
        errorlist: response.data.status_error,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row" className="py-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Job Details
                  <Link
                    to={"jobpost"}
                    className="btn btn-primary btn-sm float-end"
                  >
                    Go Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.saveJob}>
                  <div className="form-group mb-3">
                    <label>Job Title</label>
                    <input
                      type="text"
                      name="jobtitle"
                      onChange={this.handleInput}
                      value={this.state.jobtitle}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {this.state.errorlist.jobtitle}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Job Information</label>
                    <input
                      type="text"
                      name="jobinfo"
                      onChange={this.handleInput}
                      value={this.state.jobinfo}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {this.state.errorlist.jobinfo}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Job Category</label>
                    <input
                      type="text"
                      name="jobcategory"
                      onChange={this.handleInput}
                      value={this.state.jobcategory}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {this.state.errorlist.jobcategory}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Job Type</label>
                    <input
                      type="text"
                      name="jobtype"
                      onChange={this.handleInput}
                      value={this.state.jobtype}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {this.state.errorlist.jobtype}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Job Location</label>
                    <input
                      type="text"
                      name="joblocation"
                      onChange={this.handleInput}
                      value={this.state.joblocation}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {this.state.errorlist.joblocation}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Job Vacancy</label>
                    <input
                      type="number"
                      name="jobvacancy"
                      onChange={this.handleInput}
                      value={this.state.jobvacancy}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {this.state.errorlist.jobvacancy}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Applicant</label>
                    <input
                      type="number"
                      name="jobapplicants"
                      onChange={this.handleInput}
                      value={this.state.jobapplicants}
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="filter-btn" value={status}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobAdd;
