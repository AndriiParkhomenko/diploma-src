import './Orders.scss';
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import SkeletonOrders from './SkeletonOrders';
import OrdersItem from "./OrdersItem";
import axios from 'axios';

function Orders () {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
			(async () => {
				try {
					const {data} = await axios.get(`https://6405d857eed195a99f8e5f3a.mockapi.io/orders`);
					setOrders(data);
				} catch (error) {
					alert(`The server didn't answer`)
				}
				setIsLoading(false);
			})();
	}, [])

	console.log(orders);

	return <>
		<h2 className='my-4'>My orders</h2>
		<Table >
		<thead ><tr><th>№</th><th className='text-center'>Description</th></tr></thead>
		<tbody>
			{ orders.map(order => <OrdersItem key = {order.id}  order={order}/> )}
		</tbody>
		</Table>
		{isLoading && <>
				{[...Array(10)].map((item, index) => <SkeletonOrders key={index} />)}
				<div className={"shadow text-center"}>
					<div className={"spinner-block w-100"}>
						<Spinner className='spinner' animation="border" variant="info" />
					</div>
				</div>
			</>}
	</>
}

export default Orders;

