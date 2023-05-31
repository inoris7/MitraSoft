import { Nav } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import my_avatar from '../img/my_avatar.webp'
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { setClosed } from "../store/openedReducer";

function NavMenu() {    
    const dispatch = useDispatch();

    return (        
        <Nav defaultActiveKey="/" className="flex-column nav-menu">            
            <div className="menu-data">
                <Image className="my-avatar" src={my_avatar} fluid="true" ></Image>
                <div className="name-wrapper">
                    <h3>Nikolay Chernikov</h3>
                    <a href="mailto:inoris@yandex.ru">inoris@yandex.ru</a>           
                </div>
            </div>
            <Link className="nav-link" to="/about" onClick={() => dispatch(setClosed())} >About me</Link>
            <Link className="nav-link" to="/" onClick={() => dispatch(setClosed())}>Posts list</Link>                
        </Nav>        
      );
};

export {NavMenu};