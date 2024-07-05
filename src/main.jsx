import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts, { loader as postLoader } from './routes/Posts'
import './index.css'
import NewPost, { action as newPostAction } from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import PostDetails, { loader as postIdLoader } from './routes/PostDetails'
import { Analytics } from "@vercel/analytics/react"
const routerObj = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          {
            path: "/post",
            element: <NewPost />,
            action: newPostAction,
          }, 
          {
            path: ":id",
            element: <PostDetails />,
            loader: postIdLoader
          }
        ]
      }, 
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerObj} />
    <Analytics />
  </React.StrictMode>
)
