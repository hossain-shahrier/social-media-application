import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Businesses from "./components/admin/business/Businesses";
import EditBusiness from "./components/admin/business/EditBusiness";
import Communities from "./components/admin/communities/Communities";
import EditCommunities from "./components/admin/communities/EditCommunities";
import EditUser from "./components/admin/EditUser";
import Home from "./components/admin/Home";
import Auth from "./components/Auth";
import Users from "./components/admin/Users";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Task from "./components/admin/Task";
import TaskList from "./components/admin/TaskList";
import EditTask from "./components/admin/EditTask";
import CoffeeRoom from "./components/CoffeeRoom";
import CoffeeDetails from "./components/CoffeeDetails";
import Chat from "./components/admin/chat/Chat";
import Annauncement from "./components/admin/Annauncement";
import AnnouncementList from "./components/admin/AnnouncementList";
import Privacy from "./components/admin/Privacy";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/signin">
              {localStorage.getItem("token") ? <Redirect to="/" /> : <Auth />}
            </Route>
            <ProtectedRoute exact path="/" component={Home}></ProtectedRoute>
            <ProtectedRoute path="/users" component={Users}></ProtectedRoute>
            <ProtectedRoute
              path="/user/edit/:id"
              component={EditUser}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/businesses"
              component={Businesses}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/business/edit/:id"
              component={EditBusiness}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/communities"
              component={Communities}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/community/edit/:id"
              component={EditCommunities}
            ></ProtectedRoute>
            <ProtectedRoute
              exact
              path="/task"
              component={Task}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/tasklist"
              component={TaskList}
            ></ProtectedRoute>
            <ProtectedRoute
              exect
              path="/task/edit/:id"
              component={EditTask}
            ></ProtectedRoute>
            <ProtectedRoute
              exect
              path="/coffeeroom"
              component={CoffeeRoom}
            ></ProtectedRoute>
            <ProtectedRoute
              exect
              path="/coffee/:id"
              component={CoffeeDetails}
            ></ProtectedRoute>
            <ProtectedRoute
              exect
              path="/chat"
              component={Chat}
            ></ProtectedRoute>
            <ProtectedRoute
              exect
              path="/announcement"
              component={Annauncement}
            ></ProtectedRoute>
            <ProtectedRoute
              exect
              path="/announcementlist"
              component={AnnouncementList}
            ></ProtectedRoute>
            <ProtectedRoute
              exect
              path="/privacy"
              component={Privacy}
            ></ProtectedRoute>
            <Route>404 not found</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
