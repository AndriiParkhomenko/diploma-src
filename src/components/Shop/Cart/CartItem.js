import {Badge, ListGroup, Button} from "react-bootstrap";
import { useContext, useState } from "react";
import AppContext from "../../../context/AppContext";
import './Cart.scss';

function CartItem ({product}) {
	const { removeFromCart, changeCount } = useContext(AppContext);

	return <ListGroup.Item>
		<div className="cart-item d-flex align-items-center justify-content-between">
			<div className="d-flex">
				<div className="cart-item__image text-start m-1"><img src={product.image} alt="mini"/></div>
				<div className="cart-item__title">{product.title}<div className="limited"></div></div>
			</div>
			<div className="cart-item__price">(<b>{product.price.toFixed(2)} &#8372;</b>)</div>
		</div>
		<div className={"d-flex align-items-center justify-content-between"}>
			<div>
				<Button variant={'primary'} size={'sm'} disabled={product.count === 1}
				onClick={() => changeCount(product.id, product.count - 1)}>-</Button>
				<span className="mx-1">{product.count}</span>
				<Button variant={'primary'} size={'sm'}
				onClick={() => changeCount(product.id, product.count + 1)}>+</Button>
			</div>
			<div>
				<b>{(product.count * product.price).toFixed(2)} &#8372;</b>
			</div>
				<Badge variant="danger" role='button'
					className={'ml-3 bg-danger text-white'}
					onClick={() => removeFromCart(product.id)}>Remove</Badge>
		</div>
   </ListGroup.Item>
}

export default CartItem