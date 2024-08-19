import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Jobs from './Components/Main/Jobs/Jobs.jsx';
import Applied_jobs from './Components/Main/Applied_jobs/Applied_jobs.jsx';
import Statistics from './Components/Main/Statistics/Statistics.jsx';
import Blogs from './Components/Main/Blogs/Blogs.jsx';
import ErrorPage from './Components/Main/ErrorPage/ErrorPage.jsx';
import JobDetails from './Components/Main/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/jobs",
        element:<Jobs></Jobs>
      },
      {
        path:"/applied-jobs",
        element:<Applied_jobs></Applied_jobs>,
        loader:()=>fetch('../jobs.json')
      },
      {
        path:"/stat",
        element:<Statistics></Statistics>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"job-details/:id",
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('../jobs.json')
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
