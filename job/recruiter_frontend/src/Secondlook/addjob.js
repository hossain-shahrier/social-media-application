import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../addjob.css";
import "../second.css";

export const AddJob = ({ status, callback }) => {
  const { id: jobid } = useParams();
  const [user, setUser] = useState({
    jobtitle: "",
    jobinfo: "",
    jobcategory: "",
    jobtype: "",
    joblocation: "",
    jobvacancy: "",
    jobapplicants: "",
  });

  const history = useHistory();
  const change = (e) => {
    const attr = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [attr]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    callback(user);
    history.push("/addjob");
  };
  return (
    <>
      <div className="addjob-form">
        <h4>ADD JOB</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="jobtitle"
            value={user.jobtitle}
            onChange={change}
            placeholder="title"
          />
          <br />
          <input
            type="text"
            name="jobinfo"
            value={user.jobinfo}
            onChange={change}
            placeholder="information"
          />
          <br />
          <input
            type="text"
            name="jobcategory"
            value={user.jobcategorye}
            onChange={change}
            placeholder="category"
          />
          <br />
          <input
            type="text"
            name="jobtype"
            value={user.jobtype}
            onChange={change}
            placeholder="type"
          />
          <br />
          <input
            type="text"
            name="joblocation"
            value={user.joblocation}
            onChange={change}
            placeholder="location"
          />
          <br />
          <input
            type="number"
            name="jobvacancy"
            value={user.jobvacancy}
            onChange={change}
            placeholder="vacancy"
          />
          <br />
          <input
            type="number"
            name="jobapplicants"
            value={user.jobapplicants}
            onChange={change}
            placeholder="applicants"
          />
          <br />
          <button type="submit" className="filter-btn" value={status}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
