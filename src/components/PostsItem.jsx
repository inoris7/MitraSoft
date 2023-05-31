import Card from 'react-bootstrap/Card';
import avatar from "../img/avatar.webp"
import { Link } from 'react-router-dom';
import { Comments } from './Comments';



function PostsItem(props) {
    const {title, body, id, userId} = props;    

    return (
        <Card style={{ width: '18rem' }}>
            <Link to={`/user/${userId}`}><Card.Img variant="top" src={avatar} /></Link>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                     {body}
                </Card.Text>                
                <Comments postId={id} />
            </Card.Body>

        </Card>
    )
};

export {PostsItem};