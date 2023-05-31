import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { Comment } from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../store/commentsReducer";


function Comments(props) {  
  const commentsList = useSelector(state => state.comments.comments)
  const dispatch = useDispatch();
  const {postId} = props;

  const uploadComments = () => {
    dispatch(fetchComments(postId));    
  }

    return (
        <OverlayTrigger
          trigger="click"          
          placement="bottom"
          overlay={
            <Popover id={postId}>
              {commentsList.map(
                el => {
                  return <Comment key={el.id} {...el} />
                }
              )}
            </Popover>
          }
        >
          <Button variant="secondary" onClick={uploadComments}>Comments</Button>
        </OverlayTrigger>
    )
};

export {Comments};