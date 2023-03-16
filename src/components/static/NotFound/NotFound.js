import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.scss"

function NotFound () {
	return <Row className="text-white">
		<Col xs={12} className="error-paige">
			<div className="d-flex flex-column m-sm-5 my-4 align-items-center justify-content-around error-info">
			<h6 className="my-sm-3 my-4">Sorry, wrong url</h6>
			<div className="wrapper-error-image my-sm-3 my-5" ><img src="images/NotFound.jpg" className="error-image" alt="Error"/></div>
			<h6 className="my-sm-3 my-4 text-center">Error 404 - paige not found</h6>
			<Button className="my-sm-3 my-4"><Link className="text-white" to={ `/diploma/`}>Return to start paige</Link></Button>
			</div>
		</Col>
	</Row>
}

export default NotFound;