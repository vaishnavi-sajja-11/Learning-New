import { useLoaderData } from 'react-router-dom';
import Post from './Post.jsx'
import classes from './PostsList.module.css'


function PostsList() {

    // fetch('http://localhost:8080/getPost').then(
    //     (response)=>response.json()).then(
    //         data=> {setPosts(data.posts);
    //     }); this code doesnt work how we wanted becuase , whenever a state change happens react rerenders the component again 
    // here react couldnt make up the posts length 
    const posts = useLoaderData();
    console.log(posts);
    // useEffect(() =>{//useEffeect is another hook which helps to render or execute the defined function only when there is a change in its
    //                 // arguments passed via array , it has two parts function and an array (function is IFFE immediatley)
    //      async function fetchPosts(){
           
    //         setPosts(resData);
    //      };
    //      fetchPosts();
    // },[]);
    


    return (
        <>
           
            {posts.length > 0 ? (
            <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
            </ul>
            ) : <div style={{textAlign: "center", backgroundColor: "plum"}}>
                <h2>there are no posts yet</h2>
                <p style ={{backgroundColor: "plum"}}>Start Adding Some!</p>
                </div>}
            
        </>

    );
}

export default PostsList;