import { ListGroup } from "react-bootstrap";
import CartItem from "./CartItem"
import Total from "./Total";
import Info from "../Info";
import { useContext , useState} from "react";
import AppContext from "../../../context/AppContext";
import './Cart.scss';

function Cart({ products, onClickCloseIcon }) {
	const {isOrderComplete, orderId} = useContext(AppContext);

	return <div className='overlay'>
		<div className='cart-block p-3'>
			<div className="cart-top d-flex align-items-center justify-content-between">
				<h2>Cart</h2>
				<img className="mb-2 close" role='button' onClick={onClickCloseIcon} src="images/icons/x-square.svg" alt="close" />
			</div>
			{products.length ? <ListGroup className={'my-1'}>{products.map(product => <CartItem key={product.id} product={product}/>)}
				<Total products={products}/></ListGroup> :
			<Info 
			image={isOrderComplete ? 'images/info/order-confirm.jpg' : 'images/info/empty-cart.jpg'} 
			title={isOrderComplete ? 'Order complete!': 'You have no any products in cart.'} 
			description={isOrderComplete ? `Your order №${orderId} will soon be transferred to the delivery service` : 'Add some products here.'}
			returnBtn={onClickCloseIcon}/>}
		</div>
	</div>
}

export default Cart;