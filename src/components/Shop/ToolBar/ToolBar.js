import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import './ToolBar.scss';

function ToolBar ({ onClickCartIcon, onClickClearIcon, onClickFavoritesIcon}) {
	const { categories, changeCategories, filterProducts, searchedValue} = useContext(AppContext);

	return<Col xs={12} className={'toolbar d-flex flex-sm-row flex-column align-items-center p-0'}>
		<div className="toolbar-left d-flex align-items-center justify-content-between">
			<Form.Select aria-label="Default select example" className={'form-control categories my-3 ml-md-3 ml-2'} onChange = {e => changeCategories(e.currentTarget.value)}>
				<option value=''>All categories</option>
				{categories.map(category => <option key={category}>{category}</option>)}
			</Form.Select>
			<div className="cart-icon px-2" role='button' onClick={onClickCartIcon}>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
				</svg>
			</div>
		</div>
		<div className="toolbar-right d-flex align-items-center justify-content-between">
			<div className="search d-flex align-items-center">
			<input className={'form-control search__input my-3 ml-sm-0 ml-2'} value={searchedValue}
			placeholder = {'Search'} onChange={e => filterProducts(e.currentTarget.value.trim().toLowerCase())}/>
			{searchedValue && <div className="clear__icon close" onClick={onClickClearIcon}>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
					<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
				</svg>
			</div>}
			<div className="search__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="gray" className="bi bi-search" viewBox="0 0 16 16">
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
				</svg>
			</div>
			</div>
			<div className="icons d-sm-flex justify-content-around px-2">
				<div className="icons__favorite" onClick={onClickFavoritesIcon}>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-valentine" viewBox="0 0 16 16">
						<path d="M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132ZM2.25 4a.25.25 0 0 0-.25.25v1.5a.25.25 0 0 0 .5 0V4.5h1.25a.25.25 0 0 0 0-.5h-1.5Zm10 0a.25.25 0 1 0 0 .5h1.25v1.25a.25.25 0 1 0 .5 0v-1.5a.25.25 0 0 0-.25-.25h-1.5ZM2.5 10.25a.25.25 0 1 0-.5 0v1.5c0 .138.112.25.25.25h1.5a.25.25 0 1 0 0-.5H2.5v-1.25Zm11.5 0a.25.25 0 1 0-.5 0v1.25h-1.25a.25.25 0 1 0 0 .5h1.5a.25.25 0 0 0 .25-.25v-1.5Z"/>
						<path fillRule="evenodd" d="M0 2.994v-.06a1 1 0 0 1 .859-.99l13-1.857a1 1 0 0 1 1.141.99V2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.994ZM1 3v10h14V3H1Z"/>
					</svg>
				</div>
				<div className="icons__user"><Link to={'/diploma/orders'}>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
					<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
					<path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
				</svg>
				</Link></div>
			</div>
		</div>
	</Col>
}

export default ToolBar;