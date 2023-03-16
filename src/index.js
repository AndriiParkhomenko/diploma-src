import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import NotFound from './components/static/NotFound/NotFound';
import Shop from './components/Shop/Products';
import Friends from './components/static/Friends/Friends';
import Greeting from './components/static/Greeting/Greeting';
import AboutUs from './components/static/AboutUs/AboutUs';
import Contacts from './components/static/Contacts/Contacts';
import Orders from './components/Shop/Orders/Orders';

const router = createBrowserRouter([
  {
    path: "/diploma/",
    element: <App/>,
		errorElement: <NotFound/>,
		children:[{
			path: "/diploma/",
			element: <Greeting/>
		}, {
			path:"/diploma/shop",
			element: <Shop/>
		}, {
			path: "/diploma/orders",
			element: <Orders/>,
		}, {
			path:"/diploma/friends",
			element: <Friends/>
		}, {
			path:"/diploma/about-us",
			element: <AboutUs/>
		}, {
			path:"/diploma/contacts",
			element: <Contacts/>
		}]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Container className='bg-white'>
			<RouterProvider router={router} />
		</Container>
  </React.StrictMode>
);

reportWebVitals();
