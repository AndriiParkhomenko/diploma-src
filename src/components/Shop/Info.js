import { Button } from "react-bootstrap";

function Info ({image ,title, description, returnBtn}) {

	return <div className="info d-flex align-items-center justify-content-center flex-column mt-5 text-center">
		<img src={image} style={{width: '15rem'}} alt="info"/>
		<h3 className="mb-4">{title}</h3>
		<p className="mb-4">{description}</p>
		<Button variant="success" onClick={returnBtn} >Return to shop</Button>
	</div>
}

export default Info; 