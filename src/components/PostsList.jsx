import { useSelector } from "react-redux";
import { PostsItem } from "./PostsItem";

function PostsList() {    
    const currentPage = useSelector(state => state.page.currentPage)
    const filteredPosts = useSelector(state => state.posts.filteredPosts);
    const startSlice = (currentPage - 1) * 10;

    return (   
        <div className="posts-list">
            { 
                filteredPosts.length ? filteredPosts.slice(startSlice, startSlice + 10).map(el => {return (<PostsItem key={el.id} {...el}/>)})
                : <h2>Nothing found</h2>                
            }            
        </div>     
    )
};

export {PostsList};