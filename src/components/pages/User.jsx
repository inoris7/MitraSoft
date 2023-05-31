import { useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Preloader } from "../ui/Preloader";
import { PostsList } from "../PostsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchUserPosts } from "../../store/userReducer";

function User() {
const navigate = useNavigate();    
const {id} = useParams();
const dispatch = useDispatch();
const user = useSelector(state => state.user.user)
const userPosts = useSelector(state => state.user.userPosts);


useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchUserPosts(id));
},[id]);

    return (
        <>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <h2>User Info</h2>
            {!user ? <Preloader /> : 
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Name: {user.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">email: {user.email}</Card.Subtitle>
                           
                    </Card.Body>
                </Card>}
            {!userPosts.length ? <Preloader /> : <PostsList posts={userPosts} />}  
        </>
    )
}

export {User};