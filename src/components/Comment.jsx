import { Popover } from "react-bootstrap";

function Comment(props) {
    const {email, body} = props;
    
    return (
        <>
            <Popover.Header as="h3">{email}</Popover.Header>
            <Popover.Body>{body}</Popover.Body>
        </>
    )
}

export {Comment};