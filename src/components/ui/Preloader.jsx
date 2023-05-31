import { Spinner } from "react-bootstrap";

function Preloader() {
    return (
        <Spinner animation="border" role="status" className="preloader">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
}

export {Preloader};