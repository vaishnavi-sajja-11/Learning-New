import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Posts from './routes/Posts.jsx';
import NewPost, {action as newPostAction} from './routes/NewPost.jsx';
import './index.css'
import RootLayout from './routes/RootLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: async () => {
          const response = await fetch('http://localhost:8080/posts');
          const resData = await response.json();
          return resData;
        },
        children: [
          {
            path: '/create-post', element: <NewPost />,
            action: newPostAction
            
          }
        ]
      },
      {path: ':id'}

    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
