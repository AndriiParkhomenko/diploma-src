import './Product.scss';
import {Button, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from '../../context/AppContext';

function Product ({product}) {
	const { addToCart, removeFromCart, addToFavorites, removeFromFavorites} = useContext(AppContext);

	return <Col sm={6} md={4} lg={3} className={'d-flex my-3'}>
		<Card className={'product d-flex flex-column p-3 align-items-center'} >
		<div className="product__heart align-self-end" 
		onClick={ product.addedToFavorites ? () =>{removeFromFavorites(product.id)} : () =>{addToFavorites(product.id)}}>
			<img src={product.addedToFavorites ? "images/icons/liked.svg" : "images/icons/unliked.svg"} alt="favorite"/>
		</div>
		<div className="product__image-wrapper text-center position-relative">
			<img src={product.image} alt="product"/>
		</div>
		<div className="product__info">
		<p className="product__title">{product.title}</p>
		<p className="product__category">Category: {product.category}</p>
		<p className="product__price">Price: {product.price} &#8372;</p>
		{product.addedToCart ? 
			<Button variant="danger" onClick = {() =>{removeFromCart(product.id)}}>Remove</Button> : 
			<Button variant="success" onClick = {() =>{addToCart(product.id)}}>Add to Cart</Button>}
		</div>
		</Card>
	</Col>
}

export default Product;