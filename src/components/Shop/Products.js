import './Products.scss';
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import Product from './Product';
import Cart from './Cart/Cart';
import ToolBar from './ToolBar/ToolBar';
import SkeletonProduct from './SkeletonProduct';
import Favorites from './Favorites/Favorites';
import AppContext from '../../context/AppContext';
import axios from 'axios';

function Products() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [cartOpened, setCartOpened] = useState(false);
	const [favoritesOpened, setFavoritesOpened] = useState(false);
	const [searchedValue, setSearchedValue] = useState('');
	const [showSpinner, setShowSpinner] = useState(true);
	const [user, setUser] = useState({ email: '' });
	const [isOrderComplete, setIsOrderComplete] = useState(false);
	const [orderId, setOrderId] = useState(null);
	const [isOrderLoading, setIsOrderLoading] = useState(false);


	useEffect(() => {
		const savedCart = localStorage.getItem('cartItems');
		const savedFavorite = localStorage.getItem('savedFavs');
		Promise.all([
			new Promise(resolve => {
				fetch(`https://63fca7ba8ef914c5559c584f.mockapi.io/products`).then(data => data.json()).then(data => {
					resolve(data);
				})
			}),
			new Promise(resolve => {
				fetch(`https://63fca7ba8ef914c5559c584f.mockapi.io/categories`).then(data => data.json()).then(data => {
					resolve(data);
				})
			}),
			new Promise(resolve => {
				fetch(`https://fakestoreapi.com/users/1`).then(data => data.json()).then(data => {
					resolve(data);
				})
			})
		]).then(data => {
			if (savedCart) {
				let savedItems = JSON.parse(savedCart);
				for (let product of data[0]) {
					const savedProduct = savedItems.filter(savedItem => product.id === savedItem.id);
					product.addedToCart = savedProduct.length;
					product.count = savedProduct.length ? savedProduct[0].count : 1;
				}
				setProducts(data[0])
			} else {
				setProducts(data[0].map(product => ({ ...product, addedToCart: false, count: 1, addedToFavorites: false })));
			}
			if (savedFavorite) {
				let savedFavs = JSON.parse(savedFavorite);
				for (let product of data[0]) {
					const savedFavProduct = savedFavs.filter(savedFav => product.id === savedFav.id);
					product.addedToFavorites = savedFavProduct.length;
				}
				setProducts(data[0])
			} else {
				setProducts(data[0].map(product => ({ ...product, addedToCart: false, count: 1, addedToFavorites: false })));
			}
			setCategories(data[1]);
			setUser(data[2]);
			setShowSpinner(false);
		});
	}, [])

	function saveProducts(updatedProducts) {
		const productsToSave = updatedProducts.filter(product => product.addedToCart).map(product => ({ id: product.id, count: product.count }));
		localStorage.setItem('cartItems', JSON.stringify(productsToSave));
	}
	function saveFavorites(updatedProducts) {
		const productsToSave = updatedProducts.filter(product => product.addedToFavorites).map(product => ({ id: product.id }));
		localStorage.setItem('savedFavs', JSON.stringify(productsToSave));
	}

	function changeCount(id, newCount) {
		const newProducts = products.map(product => ({ ...product, count: id === product.id ? newCount : product.count }))
		setProducts(newProducts);
		saveProducts(newProducts);
	}

	function addToCart(id) {
		const newProducts = products.map(product => ({ ...product, addedToCart: id === product.id ? true : product.addedToCart }))
		setProducts(newProducts);
		saveProducts(newProducts);
	}

	function removeFromCart(id) {
		const newProducts = products.map(product => ({ ...product, count: id === product.id ? 1 : product.count, addedToCart: id === product.id ? false : product.addedToCart }))
		setProducts(newProducts);
		saveProducts(newProducts);
	}

	function changeCategories(categoryName) {
		setSelectedCategory(categoryName);
	}

	function filterProducts(searchValue) {
		setSearchedValue(searchValue);
	}

	function addToFavorites(id) {
		const newProducts = products.map(product => ({ ...product, addedToFavorites: id === product.id ? true : product.addedToFavorites }))
		setProducts(newProducts);
		saveFavorites(newProducts);
	}

	function removeFromFavorites(id) {
		const newProducts = products.map(product => ({ ...product, addedToFavorites: id === product.id ? false : product.addedToFavorites }))
		setProducts(newProducts);
		saveFavorites(newProducts);
	}

	const onClickOrder = async () => {
		try {
			setIsOrderLoading(true);
			const good = products.filter(product => product.addedToCart);
			const {data} = await axios.post('https://6405d857eed195a99f8e5f3a.mockapi.io/orders', {goods : good});
			setOrderId(data.id);
			setIsOrderComplete(true);
			const newProducts = products.map(product => ({ ...product, addedToCart: false }));
			setProducts(newProducts);
			saveProducts(newProducts);
		} catch (error) {
			alert('Error');
		}
		setIsOrderLoading(false);
	}

	return <AppContext.Provider value={{addToCart, removeFromCart, addToFavorites, removeFromFavorites, changeCount, user, categories, 
	changeCategories, filterProducts, searchedValue, setCartOpened ,setFavoritesOpened, onClickOrder, isOrderComplete, orderId, isOrderLoading}}>
		<Row>
			{cartOpened && <Col xs={12}><Cart products={products.filter(product => product.addedToCart)} onClickCloseIcon={() => setCartOpened(false)} /></Col>}
			{favoritesOpened && <Col xs={12}><Favorites products={products.filter(product => product.addedToFavorites)} 
			onClickCloseIcon={() => setFavoritesOpened(false)}/></Col>}
			<ToolBar onClickFavoritesIcon={() => setFavoritesOpened(true)} onClickCartIcon={() => setCartOpened(true)} 
			onClickClearIcon={() => setSearchedValue('')}/>
			{products.filter(product => product.title.toLowerCase().includes(searchedValue))
			.filter(product => product.category === selectedCategory || !selectedCategory).map(product => <Product key={product.id} product={product}/>)}
			{showSpinner && <>
				{[...Array(20)].map((item, index) => <SkeletonProduct key={index} />)}
				<div className={"shadow text-center"}>
					<div className={"spinner-block w-100"}>
						<Spinner className='spinner' animation="border" variant="info" />
					</div>
				</div>
			</>}
		</Row>
	</AppContext.Provider>
}

export default Products;