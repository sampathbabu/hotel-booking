import Login from "./common/pages/Login";
import BookRoom from "./common/components/BookRoom";
import Form from "./common/components/Form";
import Logout from "./services/Logout";
import Register from "./common/pages/Register";
import Temp from "./common/components/Temp";
import RoomCard from "./common/components/RoomCard";
import ImageCarousel from "./common/components/ImageCarousel";
import RoomDetails from "./common/components/RoomDetails";
const routes = [
  {
    path: "/",
    element: <RoomDetails />
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
