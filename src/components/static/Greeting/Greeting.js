import './Greeting.scss'
import { Row, Col } from "react-bootstrap";

function Greeting () {
	return <><section className="playcourt justify-content-center row  ">
	<div className="playcourt__image">
		<p>Your time is now</p>
		<img className="img-fluid" src="images/court.webp" alt="playcourt"/>
	</div>
</section>
<Row className="d-flex flex-lg-row flex-column text-white advantages p-4 justify-content-between align-items-center text-justify">
	<Col sm={12} lg={3} className="my-3">
		<h4 className='mb-4'>Reliably</h4>
		<p>The quality of our goods is guaranteed. We cooperate only with original brands. Registration and processing of orders seven days a week.</p>
	</Col>
	<Col sm={12} lg={3} className="my-3">
		<h4 className='mb-4'>Professionally</h4>
		<p>When you order from us, you can be sure that there will be no delays or damage to the product in transit. Our staff is very attentive to details.</p>
	</Col>
	<Col sm={12} lg={3} className="my-3">
		<h4 className='mb-4'>Quickly</h4>
		<p>We deliver our goods within three days, after ordering, anywhere in Ukraine, without force majeure. Sending the order within an hour after picking.</p>
	</Col>
</Row>
<div className="animation-block ">
	<div className="animation-block__run p-0"></div>
</div>
	</>
}

export default Greeting;