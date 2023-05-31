import { Button } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import { NavMenu } from "../NavMenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpened } from "../../store/openedReducer";


function Header() {    
    const opened = useSelector(state => state.opened.opened);
    const dispatch = useDispatch();

    return (
        <Navbar bg="light" expand="lg">
            <Container className="navbar-container">                
                <Button className="menu-button" variant="light" onClick={() => dispatch(toggleOpened())}>
                    <i className="material-icons menu-icon" style={{lineHeight: 24 + 'px'}}>
                        menu
                    </i>
                </Button>
                {opened ? <NavMenu /> : null}
                <Link to='/'>                    
                    <Navbar.Brand>MitraSoft Test Task</Navbar.Brand>                
                </Link>               
            </Container>
        </Navbar>        
    )
};

export {Header};