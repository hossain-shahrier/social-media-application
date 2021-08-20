import React, { Component } from "react";
import axios from "axios";
import "../jobsearch.css";

class Searchbar extends Component {
  state = {
    //this will store all our data
    list: [],
    loading: true,
  };
  async componentDidMount() {
    const response = await axios.post("http://127.0.0.1:8000/api/jobsearch");
    // console.log(response);
    if (response.data.status === 200) {
      this.setState({
        list: response.data.joblist,
        loading: false,
      });
    }
  }
  onSearchJob = (e) => {
    const searchText = e.target.value;
    console.log(searchText);
  };

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
    //             <button
    //               type="button"
    //               className="job-details-button"
    //               key={item.id}
    //             >
    //               <Link to={`joblist/${item.id}`}>Details</Link>
    //             </button>
    //           </td>
    //         </tr>
    //       </>
    //     );
    //   });
    // }
    return (
      <section className="section-search-job">
        <form className="search-form-job">
          <div className="form-control-job">
            <label htmlFor="name">Type here for job</label>
            <input
              type="text"
              name="searching"
              id="searching"
              onChange={(e) => this.onSearchJob(e)}
            />
          </div>
        </form>
      </section>
    );
  }
}

export default Searchbar;
