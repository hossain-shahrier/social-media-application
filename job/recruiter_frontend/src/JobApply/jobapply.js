import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class jobapply extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    addfile: "",
    errorlist: [],
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  applyJob = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://127.0.0.1:8000/api/jobapply",
      this.state
    );
    if (response.data.status === 200) {
      // console.log(response.data.message);
      swal({
        title: "Apply Success",
        text: response.data.message,
        icon: "success",
        button: "Okay",
      });
      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        addfile: "",
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
                <h4>Apply Here</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.applyJob}>
                  <div className="form-group mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      onChange={this.handleInput}
                      value={this.state.firstname}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      onChange={this.handleInput}
                      value={this.state.lastname}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={this.handleInput}
                      value={this.state.email}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Phone</label>
                    <input
                      type="number"
                      name="phone"
                      onChange={this.handleInput}
                      value={this.state.phone}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={this.handleInput}
                      value={this.state.address}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Attach CV</label>
                    <input
                      type="file"
                      name="addfile"
                      onChange={this.handleInput}
                      value={this.state.addfile}
                      className="form-control"
                    />
                  </div>
                  {/* <div className="form-group mb-3">
                    <label>Upload Documents</label>
                    <input
                      type="file"
                      name="documents"
                      className="form-control"
                    />
                  </div> */}

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

export default jobapply;
