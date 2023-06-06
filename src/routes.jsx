import Login from "./common/pages/Login";
import BookRoom from "./common/components/BookRoom";
import Form from "./common/components/Form";
const routes = [
  {
    path: "/",
    element: <BookRoom />
  },
  {
    path:"/login",
    element: <Login />
  }
];

export default routes;
