import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../addjob.css";
import "../second.css";

class jobdetails extends Component {
  state = {
    jobid: "",
    jobinfo: "",
    jobtype: "",
    joblocation: "",
    jobvacancy: "",
    jobapplicants: "",
    list: [],
    loading: true,
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
      `http://127.0.0.1:8000/api/joblist/${jobId}`
    );
    if (response.data.status === 200) {
      this.setState({
        jobid: response.data.updatejob.id,
        jobinfo: response.data.updatejob.info,
        jobtype: response.data.updatejob.type,
        joblocation: response.data.updatejob.location,
        jobvacancy: response.data.updatejob.vacancy,
        jobapplicants: response.data.updatejob.applicants,
      });
    }
  }
  //   goNext = (e) => {
  //     e.preventDefault();
  //     <Link to={`/jobapply/${jobId}`}></Link>;
  //   };
  render() {
    // var listofjob = "";
    // if (this.state.loading) {
    //   listofjob = (
    //     <tr>
    //       <td colSpan="3">
    //         <h2>Loading...</h2>
    //       </td>
    //     </tr>
    //   );
    // } else {
    //   listofjob = this.state.list.map((item) => {
    //     return (
    //       <>
    //         <tr key={item.id}>
    //           {/* <td>{item.id}</td> */}
    //           <td>{item.title}</td>
    //           <td>{item.category}</td>
    //           <td>
    //             {/* <button
    //               type="button"
    //               className="job-details-button"
    //               key={item.id}
    //             >
    //               <Link to={`joblist/${item.id}`}>Details</Link>
    //             </button> */}
    //           </td>
    //         </tr>
    //       </>
    //     );
    //   });
    // }
    return (
      <div className="container">
        <div className="row" className="py-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Job Details
                  <Link
                    to={"/editjob"}
                    className="btn btn-primary btn-sm float-end"
                  >
                    Go Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form>
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
                  <div>
                    <button
                      type="button"
                      className="job-details-button"
                      //   onClick={(e) => goNext(e)}
                    >
                      <Link to={`/jobapply`}>Apply Now</Link>
                    </button>
                    {/* {this.state.list.map((item) => {
                      return (
                        <div>
                          <Link to={`/jobapply/${item.id}`}>Apply</Link>
                        </div>
                      );
                    })} */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default jobdetails;
