import './Contacts.scss';
import GridPoster from './GridPoster';

function Contacts () {
	return <>
	<GridPoster/>
	<section className="hello row py-5">
		<div className="hello__map col-md-6 col-12 bg-white">
			<iframe title='address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634.2161861249301!2d30.253358904960155!3d50.51808340723393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b33cc945ee627%3A0x9e0160e6456e68ba!2z0YPQuy4g0JLQtdGC0LXRgNCw0L3QvtCyINCQ0YTQs9Cw0L3QuNGB0YLQsNC90LAsIDE40JIsINCY0YDQv9C10L3RjCwg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMDgyMDA!5e0!3m2!1sru!2sua!4v1670917741962!5m2!1sru!2sua" width="565" height="410" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
		<div className="hello__message col-md-6 col-12 p-lg-4 p-2 text-md-left text-center">
			<form className="message" action="https://www.google.com/" method="get">
				<h3 className="text-uppercase mb-3 text-white">Say hello</h3>
				<input type="text" placeholder="Your name" name="user" readOnly value="" size="30" className="message__name bigborder p-2 mb-3" required/>
				<input type="email" placeholder="E-mail" name="email" readOnly value="" size="30" className="message__email bigborder p-2 mb-3" required/>
				<textarea placeholder="Your message" name="usermessage" readOnly id="message" cols="33" rows="5"  className="message__area bigborder p-2 mb-3" required></textarea>
				<div className="message__button"><button className="btn-light text-uppercase p-1"><span>Send message</span></button></div>
			</form>
		</div>
	</section>
	</>
}

export default Contacts;