import { useDispatch } from "react-redux";
import { sortPosts } from "../../store/postsReducer";
import { Button } from "react-bootstrap";

function Sort() {
    const dispatch = useDispatch();     
    
    const sortByTitle = () => {
        dispatch(sortPosts());
    };

    return (
        <Button onClick={sortByTitle}>Sort by title</Button>            
    )
}

export {Sort};