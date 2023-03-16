import { Badge, ListGroup } from "react-bootstrap";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import './Favorites.scss';

function FavoritesItem({ product }) {
	const { addToCart, removeFromCart, removeFromFavorites } = useContext(AppContext);
	return <ListGroup.Item>
		<div className="favorires-item d-flex align-items-center justify-content-between">
			<div className="d-flex">
				<div className="favorires-item__image text-start m-1"><img src={product.image} alt="mini" /></div>
				<div className="favorires-item__title">{product.title}<div className="limited"></div></div>
			</div>
			<div className="favorires-item__price">(<b>{product.price.toFixed(2)} &#8372;</b>)</div>
		</div>
		<div className={"d-flex align-items-center justify-content-between"}>
			{product.addedToCart ?
				<Badge variant="danger" role='button' className={'bg-danger text-white'} onClick={() => { removeFromCart(product.id) }}>Remove</Badge> :
				<Badge variant="success" role='button' className={'bg-success text-white'} onClick={() => { addToCart(product.id) }}>Add to Cart</Badge>}
			<Badge variant="warning" role='button'
				className={'ml-3 bg-warning text-white'}
				onClick={() => removeFromFavorites(product.id)}>Delete</Badge>
		</div>
	</ListGroup.Item>
}

export default FavoritesItem;