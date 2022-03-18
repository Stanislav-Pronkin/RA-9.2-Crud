import { useState, useEffect } from "react";
import PostsContext from "./PostsContext";

export default function PostsProvider(props) {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch("http://localhost:7777/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    const handleChange = (data) => setPosts(data);

    return (
        <PostsContext.Provider value={{ posts: posts, handleChange: handleChange }} >
            {props.children}
        </PostsContext.Provider>
    )
}