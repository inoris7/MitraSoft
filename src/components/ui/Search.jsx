import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPosts, searchPosts } from '../../store/postsReducer';
import { Sort } from './Sort';



function Search() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        dispatch(searchPosts(value));
    };

    const resetSearch = () => {
        dispatch(resetPosts());
        setValue('');
    }

    return (
        <>  
            <div className='search-text'>
                <Form.Control
                    type="text"                    
                    placeholder='Search in title'
                    value={value}
                    onChange={(evt) => setValue(evt.target.value)}
                />
                <CloseButton className='search-reset' onClick={resetSearch}/>   
            </div>
            <div className='search-controls'>            
                <Button onClick={handleSubmit}>Search</Button>
                <Sort />          
            </div>          
      </>
    )
}

export {Search};