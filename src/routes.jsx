import Login from "./common/pages/Login";
import BookRoom from "./common/components/BookRoom";
import Form from "./common/components/Form";
import Logout from "./services/Logout";
import Register from "./common/pages/Register";
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
    path: '/register',
    element: <Register />
  },
  {
    path: "/logout",
    element: <Logout />
  }
];

export default routes;
