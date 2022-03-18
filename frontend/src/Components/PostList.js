import { Link } from 'react-router-dom';
import Post from './Post';
import { useContext } from 'react';
import PostsContext from './PostsContext';

export default function PostList() {
    const { posts } = useContext(PostsContext);

    return (
        <div className='post-list'>
            {posts.map((item) => <Link to={`/posts/${item.id}`} key={item.id}><Post post={item} /></Link>)}
        </div>
    )
}