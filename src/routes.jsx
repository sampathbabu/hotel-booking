import Login from "./common/pages/Login";
import BookRoom from "./common/components/BookRoom";
import Form from "./common/components/Form";
import Logout from "./services/Logout";
import Register from "./common/pages/Register";
import Temp from "./common/components/Temp";
import RoomCard from "./common/components/RoomCard";
import ImageCarousel from "./common/components/ImageCarousel";
import RoomDetails from "./common/components/RoomDetails";
import Temp2 from "./common/components/Temp2";
import RoomList from "./common/pages/Rooms";
import NewComponent from "./common/components/NewComponent";
import FormDialog from "./common/components/FormDialog";
const routes = [
  {
    path: "/",
    element: <Temp />
    // element: <Temp2 />
  },
  {
    path: "/find-room",
    element: <RoomList />
  },
  {
    path: "/book",
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
