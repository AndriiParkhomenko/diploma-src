import { Card } from "react-bootstrap";

function OrdersItem ({order}) {

	return <tr>
		<td><b>{order.id}</b></td>
		<td>
			<div className="d-flex justify-content-end flex-wrap">
				{order.goods.map(good => <Card key={good.id} className={'good d-flex flex-column p-2 align-items-center'} >
					<div className="good__image-wrapper text-center position-relative">
						<img src={good.image} alt="good"/>
					</div>
					<div className="good__info">
					<p className="good__title mb-0">{good.title}</p>
					</div>
				</Card>)}
			</div>
		</td>
	</tr>
}

export default OrdersItem;