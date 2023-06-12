import Login from "./common/pages/Login";
import BookRoom from "./common/components/BookRoom";
import Form from "./common/components/Form";
import Logout from "./services/Logout";
import Register from "./common/pages/Register";
import Temp from "./common/components/Temp";
const routes = [
  {
    path: "/",
    element: <Temp />
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
