import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MembershipPage from "../Pages/MembershipPage/MembershipPage";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import MakeAnnouncements from "../Pages/Dashboard/MakeAnnouncements/MakeAnnouncements";
import Dashboard from "../Layout/Dashboard";
import MyPosts from "../Pages/Dashboard/MyPosts/MyPosts";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddPost from "../Pages/Dashboard/AddPost/AddPost";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import ReportedComments from "../Pages/Dashboard/ReportedComments/ReportedComments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/membership',
        element: <MembershipPage></MembershipPage>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      },
      
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'posts',
        element: <PrivateRoute><MyPosts></MyPosts></PrivateRoute>
      },
      {
        path: 'myProfile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: 'addPost',
        element: <PrivateRoute><AddPost></AddPost></PrivateRoute>
      },

      //admin routes
      {
        path: 'announcements',
        element: <PrivateRoute><MakeAnnouncements></MakeAnnouncements></PrivateRoute>
      },
      {
        path: 'users',
        element: <PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
      },
      {
        path: 'adminProfile',
        element: <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>
      },
      {
        path: 'reportedComments',
        element: <PrivateRoute><ReportedComments></ReportedComments></PrivateRoute>
      }
    ]
  }
]);

