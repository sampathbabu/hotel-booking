import Login from "./common/pages/Login";
import BookRoom from "./common/components/BookRoom";
import Form from "./common/components/Form";
import Logout from "./services/Logout";
const routes = [
  {
    path: "/",
    element: <BookRoom />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  }
];

export default routes;
