import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage } from '../../store/pageReducer';

function PostsPagination() {  
  const dispatch = useDispatch(); 

  const filteredPosts = useSelector(state => state.posts.filteredPosts);
  const btnNumbers = [];
  
  for(let i = 1; i <= Math.ceil(filteredPosts.length / 10); i++) {
    btnNumbers.push(i);
  }  

  return (
    <Pagination>
      {
        btnNumbers.map((el) =>
          {
            return <Pagination.Item 
                key={el} 
                value={el}                
                onClick={() => dispatch(getCurrentPage(el))}
              >
                {el}              
              </Pagination.Item>
          }  
          )
      }      
    </Pagination>
  );
}

export {PostsPagination};