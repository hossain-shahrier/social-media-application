import Users from "./components/admin/Users";
import EditUser from "./components/admin/EditUser";
import Businesses from "./components/admin/business/Businesses";
import EditBusiness from "./components/admin/business/EditBusiness";
import Communities from "./components/admin/communities/Communities";
import EditCommunities from "./components/admin/communities/EditCommunities";

const routes = [
  { path: "/users", exect: true, name: "Users", component: Users },
  {
    path: "/user/edit/:id",
    exect: true,
    name: "EditUser",
    component: EditUser,
  },
  {
    path: "/businesses",
    exect: true,
    name: "Businesses",
    component: Businesses,
  },
  {
    path: "/business/edit/:id",
    exect: true,
    name: "EditBusiness",
    component: EditBusiness,
  },
  {
    path: "/communities",
    exect: true,
    name: "Communities",
    component: Communities,
  },
  {
    path: "/community/edit/:id",
    exect: true,
    name: "EditCommunities",
    component: EditCommunities,
  },
];

export default routes;
