import { ListGroup } from "react-bootstrap";
import FavoritesItem from "./FavoritesItem";
import './Favorites.scss';
import Info from "../Info";

function Favorites ({products, onClickCloseIcon}) {
	return <div className='favorires'>
	<div className='favorires-block p-3'>
		<div className="favorires-top d-flex align-items-center justify-content-between">
			<h2>Favorires</h2>
			<img className="mb-2 close" role='button' onClick={onClickCloseIcon} src="images/icons/x-square.svg" alt="close" />
		</div>
		{products.length ? <ListGroup className={'my-1'}>{products.map(product => <FavoritesItem key={product.id} product={product}/>)}</ListGroup> : 
		<Info image='images/info/empty-favorites.jpg' title='You have no any favorites items.' description='Add some products here.'returnBtn={onClickCloseIcon}/>}
	</div>
</div>
}

export default Favorites;