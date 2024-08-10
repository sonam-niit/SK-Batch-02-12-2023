import { useState } from "react";
import Comments from "./Comments";

function Posts() {
    const [posts,setPosts]=useState([]);
    const [postId,setPostId]=useState(null);
    const fetchData = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await resp.json();
            setPosts(json);
        } catch (error) {
            console.log(error);
        }
    }
    const handleClick=(id)=>{
        setPostId(id);
    }
    return (
        <div>
            <button onClick={fetchData} className="btn btn-primary">Get All Posts</button>
            <div className="row">
                {
                    posts.map(post=>(
                        <div key={post.id} className="col-12 my-2 p-2">
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                            <button className="btn btn-success" 
                            onClick={()=>handleClick(post.id)}>Show Comments</button>
                            {postId && <Comments postId={postId} />}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Posts;