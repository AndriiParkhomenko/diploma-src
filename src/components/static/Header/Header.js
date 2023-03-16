import './Header.scss';
import { Link } from "react-router-dom";
import Burger from './Burger';
import { useState } from 'react';

function Header () {
	const items = [{value:"Shop", href:'/diploma/shop'}, {value:"Friends", href:'/diploma/friends'},
	{value:"About us", href:'/diploma/about-us'}, {value:"Contacts", href:'/diploma/contacts'}];

	const [menuActive, setMenuActive] = useState(false);

	return<><header className="row justify-content-between align-items-center p-2" id="up">
	<div className="header-logo"><img src='images/logo/logo.png' alt="logo"/></div>
	<nav className="header-menu w-50">
		<ul className="header-menu__list row justify-content-md-between justify-content-around align-items-center my-0">
			{items.map(item => <li key={item.value} className="header-menu__item">
				<Link to={item.href} className="header-menu__link list-inline-item text-uppercase position-relative nav-link p-0">{item.value}</Link>
			</li>)}
		</ul>
	</nav>
	<div className='company text-center row justify-content-center align-items-center mr-sm-3 mr-0'>
		<Link to={'/diploma/'}>
			<span>Prime1</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shop d-inline-block" viewBox="0 0 16 16">
				<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
			</svg>
			<span>Shop</span>
		</Link>
	</div>
	<div className={menuActive ? 'burger active' : 'burger'} onClick={() => setMenuActive(!menuActive) }><span></span></div>
</header>
<Burger active={menuActive} items={items} />
	</>
}

export default Header;