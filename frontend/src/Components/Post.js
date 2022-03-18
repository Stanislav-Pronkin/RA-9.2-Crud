import moment from 'moment';
import image from '../img/image.jpg';

export default function Post(props) {
    const { post } = props;
    const date = post.created;
    const upgDate = moment(date).fromNow();

    return (
        <div className="post">
            <div className="post-header">
                <img className="user-img" src={image} alt="img" />
                <div className="post-info">
                    <p className="user-name">Пользователь</p>
                    <p className="post-date">{upgDate}</p>
                </div>
            </div>
            <div className="post-content">{post.content}</div>
            <div className="post-footer">
                <button className="btn like-btn">Нравится</button>
                <button className="btn comment-btn">Комментировать</button>
            </div>
            {props.children}
        </div>
    )
}