import './Burger.scss';
import { Link } from "react-router-dom";

function Burger ({items, active,}) {
	return <div className='side'>
		<div className={active ? 'side-content active' : 'side-content'}>
			<nav>
				<ul className="side-content__list">
					{items.map(item =>
						<li key={item.value} className="side-content__item">
							<Link to={item.href} className="side-content__link list-inline-item text-uppercase nav-link p-0">{item.value}</Link>
						</li>
						)}
				</ul>
			</nav>
		</div>
	</div>
}

export default Burger; 