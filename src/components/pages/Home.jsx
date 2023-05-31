import { useEffect} from "react";
import { PostsList } from "../PostsList";
import { Preloader } from "../ui/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/postsReducer";
import { Search } from "../ui/Search";
import {PostsPagination} from "../ui/PostsPagination";

function Home() {   
    const filteredPosts = useSelector(state => state.posts.filteredPosts);      
    const dispatch = useDispatch();    

    useEffect(() => {
        dispatch(fetchPosts());      
    }, []);    

    return (
        <>            
            <Search />                                 
            {
                !filteredPosts.length ? <Preloader /> : <PostsList /> 
            }
            <PostsPagination />            
            
        </>
    )
};

export {Home};