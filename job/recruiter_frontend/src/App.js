import Navbar from "./Firstlook/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Jobpost } from "./Secondlook/jobpost";
// import { AddJob } from "./Secondlook/addjob";
import JobAdd from "./Secondlook/JobAdd";
import ViewAll from "./Secondlook/ViewAll";
import DeleteJob from "./Secondlook/DeleteJob";
import EditJob from "./Secondlook/EditJob";
import UpdateJob from "./Secondlook/UpdateJob";
import Jobsearch from "./Jobsearch/jobsearch";
import Jobdetails from "./Jobsearch/jobdetails";
import Jobapply from "./JobApply/jobapply";
import Profile from "./People/profile";
import Shop from "./Reviews/shop";
import { useFetch, createJob } from "./Secondlook/useFetch";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/jobpost">
            <Jobpost />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/jobsearch">
            <Jobsearch />
          </Route>
          <Route path="/jobapply">
            <Jobapply />
          </Route>
          <Route path="/joblist/:id" component={Jobdetails}>
            {/* <Details /> */}
          </Route>
          <Route path="/addjob" component={JobAdd}>
            {/* <JobAdd /> */}
          </Route>
          <Route path="/joblist" component={ViewAll}>
            {/* <ViewAll /> */}
          </Route>
          <Route path="/editjob" component={EditJob}></Route>

          <Route path="/updatejob/:id" component={UpdateJob}></Route>
          <Route path="/deletejob" component={DeleteJob}></Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
