import Sidebar from "../Sidebar";
import { Button } from "@material-ui/core";
import "./css/Task.css";
import { TextArea } from "semantic-ui-react";
const Privacy = () => {
  return (
    <div className="users">
      <Sidebar />
      <div className="create_task">
        <form style={{ marginLeft: "30px" }}>
          <h2 style={{ marginBottom: "20px" }}>Update privacy</h2>
          <textArea rows="30" cols="100"></textArea>
          <Button type="submit" variant="outlined" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Privacy;
