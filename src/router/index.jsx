import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ManagementTeam from "../pages/ManagementTeam";
import StudentTable from "../pages/students/StudentsTable";
import Photos from "../pages/Photos";
import Contact from "../pages/Contact";
import Details from "../components/Details";
import SuccessContent from "../components/SuccessContent";
import BlogList from "../pages/BlogList";
import SingleBlogPage from "../pages/SingleBlogPage";
import Admin from "../components/Admin";
import AddBlog from "../pages/Add/AddBlog";
import AddStudent from "../pages/Add/AddStudent";
import AddImages from "../pages/Add/AddImages";
import AllImages from "../pages/List/AllImages";
import AllStudents from "../pages/List/AllStudents";
import AllBlogs from "../pages/List/AllBlogs";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/Login";
import AddVideo from "../pages/Add/AddVideo";
import AllVideos from "../pages/List/AllVideos";
import Videos from "../pages/Videos";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login/> },
      { path: "about-us", element: <AboutUs /> },
      { path: "management-team", element: <ManagementTeam /> },
      { path: "students", element: <StudentTable /> },
      { path: "gallery/photos", element: <Photos /> },
      { path: "gallery/videos", element: <Videos/> },
      { path: "contact-us", element: <Contact /> },
      { path: "details/:name", element: <Details /> },
      { path: "success", element: <SuccessContent /> },
      { path: "blogs", element: <BlogList /> },
      { path: "blogs/:name", element: <SingleBlogPage /> },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        children: [
          { path: "addBlog", element: <AddBlog /> },
          { path: "addStudent", element: <AddStudent /> },
          { path: "updateStudent/:studentId", element: <AddStudent /> },
          { path: "addImages", element: <AddImages /> },
          { path:"addVideo", element: <AddVideo/>} , 
          { path: "allBlogs", element: <AllBlogs/> },
          { path: "allImages", element: <AllImages /> },
          { path: "allStudents", element: <AllStudents /> },
          { path: "allVideos", element: <AllVideos/> }
        ]
      }
    ]
  }
]);

export default router;