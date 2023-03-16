import { ListGroup } from "react-bootstrap";
import Confirmation from "./Confirmation";

function Total ({products}) {
	return <>
		<ListGroup.Item active>
		<b>Total:{products.reduce((acc, product) => acc + (product.count * product.price), 0).toFixed(2)} &#8372;</b>
		</ListGroup.Item>
		<ListGroup.Item style={{background: '#0146ad'}} >
			<Confirmation/>
		</ListGroup.Item>
	</>
}

export default Total;