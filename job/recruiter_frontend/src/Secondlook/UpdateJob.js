import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../addjob.css";
import "../second.css";

class UpdateJob extends Component {
  state = {
    jobtitle: "",
    jobinfo: "",
    jobcategory: "",
    jobtype: "",
    joblocation: "",
    jobvacancy: "",
    jobapplicants: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    const jobId = this.props.match.params.id;
    // console.log(jobId);
    const response = await axios.get(
      `http://127.0.0.1:8000/api/updatejob/${jobId}`
    );
    if (response.data.status === 200) {
      this.setState({
        jobtitle: response.data.updatejob.title,
        jobinfo: response.data.updatejob.info,
        jobcategory: response.data.updatejob.category,
        jobtype: response.data.updatejob.type,
        joblocation: response.data.updatejob.location,
        jobvacancy: response.data.updatejob.vacancy,
        jobapplicants: response.data.updatejob.applicants,
      });
    }
  }

  updateJob = async (e) => {
    e.preventDefault();
    const jobId = this.props.match.params.id;
    const response = await axios.post(
      `http://127.0.0.1:8000/api/updatejob/${jobId}`,
      this.state
    );
    if (response.data.status === 200) {
      console.log(response.data.message);
      this.setState({
        jobtitle: "",
        jobinfo: "",
        jobcategory: "",
        jobtype: "",
        joblocation: "",
        jobvacancy: "",
        jobapplicants: "",
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
                  Update Job
                  <Link
                    to={"/editjob"}
                    className="btn btn-primary btn-sm float-end"
                  >
                    Go Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.updateJob}>
                  <div className="form-group mb-3">
                    <label>Job Title</label>
                    <input
                      type="text"
                      name="jobtitle"
                      onChange={this.handleInput}
                      value={this.state.jobtitle}
                      className="form-control"
                    />
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
                  <button type="submit" className="filter-btn">
                    Update
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

export default UpdateJob;
