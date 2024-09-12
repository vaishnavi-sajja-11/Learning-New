import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList'

function Posts() {

  
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>

    </>
  );

}

export default Posts;

// export async function loader() {
//   try{
//     const response = await fetch('http://localhost:8080/posts');
//     const resData = await response.json();
//     console.log(resData);
//     const posts = resData[0];
//     console.log(posts);
//     return posts;
//   }catch(error)
//   {
//     console.log("failed to get the posts data ",error);
//     throw error;
//   }

// }