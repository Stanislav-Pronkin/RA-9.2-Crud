import { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import PostList from "../Components/PostList";
import PostsContext from "../Components/PostsContext";

export default function HomePage() {
    const { posts, handleChange } = useContext(PostsContext);
    
    useEffect(() => {
        fetch("http://localhost:7777/posts")
        .then((response) => response.json())
        .then((data) => handleChange(data))
    }, [])

    return (
        <div >
            {posts &&
			<div className="page home-page">
				<div className="add-block">
					<Link to="posts/new">
						<button className="btn add-btn">Создать пост</button>
					</Link>
				</div>
				<PostList />
			</div>}
        </div>
    )
}