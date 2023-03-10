import Login from "./login/Login";
import Register from "./register/Register";
import Leftbar from "./components/leftbar/Leftbar"
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar"
import Home from "./home/Home"
import Profile from "./profile/Profile"

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const Currentuser = true

  const Layout = () => {
    return(
      <div>
        <Navbar />
        <div style={{display:"flex"}}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    )
  }

  const Protectedroute = ({children}) => {
    if (!Currentuser){
    return <Navigate to="/login" />

    }
    return children

  }

 
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <Protectedroute>
        <Layout />
        </Protectedroute>
      ),
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
