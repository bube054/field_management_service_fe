import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/authentication/login";
import Signup from "./pages/authentication/signup";
import VerifyEmail from "./pages/authentication/verifyEmail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <></>,
      index: true
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/verifyEmail",
      element: <VerifyEmail/>,
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App;
