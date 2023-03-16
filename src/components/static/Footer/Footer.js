import './Footer.scss';

function Footer () {
	return <footer className="footer row justify-content-between align-items-center py-2">
	<div className="footer__contact row align-items-center m-0">
		<div className="contact__left">
			<p className="contact__address d-lg-inline-block d-sm-block mr-lg-3 mb-md-0 mr-sm-2 mb-md-2">Second line 18B, Irpin town</p>
			<p className="contact__email d-lg-inline-block d-sm-block mr-lg-3 mb-md-0 mr-sm-2 mb-md-2">prime1shop@gmail.com</p>
			<p className="contact__phone d-lg-inline-block d-sm-block mr-lg-3 mb-md-0 mr-sm-2 mb-md-2">(066) 18 66 012</p>
		</div>
		<div className="contact__right ml-lg-0 ml-md-5 ml-0" >
			<a href="https://twitter.com" target="_blank" className="contact__twitter d-sm-inline-block mr-xl-3 mr-lg-2 mr-sm-2 mb-1 d-block rounded-circle"></a>
			<a href="https://www.facebook.com" target="_blank" className="contact__facebook d-sm-inline-block mr-xl-3 mr-lg-2 mr-sm-2 mb-1 d-block rounded-circle"></a>
			<a href="https://www.instagram.com" target="_blank" className="contact__insta d-sm-inline-block mr-xl-3 mr-lg-2 mr-sm-2 mb-1 d-block rounded-circle"></a>
		</div>
	</div>
	<div className="footer__logo">
		<img src="images/logo/logo.png" alt="logo"/>
	</div>
	<a className="footer__go-to-up d-block" href="#up">
		<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#c6c6c6" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
			<path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
		</svg>
	</a>
</footer>
}

export default Footer;