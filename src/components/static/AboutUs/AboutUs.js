import './AboutUs.scss';

function AboutUs () {
	return <section className="about row position-relative flex-column">
	<div className="about__title pt-lg-3 pt-md-2 text-center text-uppercase">About us</div>
	<div className="about__animation d-sm-block d-none">
		<div className="animation__score-tile row justify-content-lg-around justify-content-md-between justify-content-sm-around align-items-center">
			<div className="animation__score">
				<div className="animation__score-left-slider">
					<div className="animation__score-item-hundreds score-item text-center">0</div>
					<div className="animation__score-item-dozens score-item text-center">9</div>
					<div className="animation__score-item-figures score-item text-center">9</div>
				</div>
			</div>
			<div className="animation__score-center">
				<div className="animation__timer rounded-circle mt-xl-1 mt-lg-3 mt-md-2">
					<div className="timer__label">
						<div className="label__item d-inline-block label__minutes"></div>
						<div className="label__item d-inline-block label__seconds"></div>
					</div>
				</div>
			</div>
			<div className="animation__score">
				<div className="animation__score-right-slider">
					<div className="animation__score-item-hundreds score-item text-center">0</div>
					<div className="animation__score-item-dozens score-item text-center">9</div>
					<div className="animation__score-item-figures score-item text-center">7</div>
				</div>
			</div>
		</div>
	</div>
	<div className="about__video text-center d-sm-block d-none">
		<video className="video__item" muted autoPlay loop preload="metadata">
			<source src="Videos/three-point.mp4" type="video/mp4"/>
		</video>
	</div>
	<div className="about__black-block"></div>
	<div className="about__info row justify-content-center text-justify text-white m-0">
		<div className="about__text pb-4 col-lg-6 col-md-8 col-sm-10">
			<h3 className="text-center">Who we are</h3>
			<p className='mt-sm-0 mt-sm-3'>Prime1 is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We strives to be Ukraine’s most customer-centric company, Ukraine’s best employer, and Ukraine’s safest place to work.</p>
			<h3 className="text-center">Leadership Principles</h3>
			<p>Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day. We do not lower our hands in trying to improve our service even in difficult times.</p>
			<h3 className="text-center">Our Positions</h3>
			<p>While our positions are carefully considered and deeply held, there is much room for healthy debate and differing opinions. We support the Organisation for Economic Co-operation and Development and its work with global governments to review the international tax system and secure consensus on these points.</p>
			<h3 className="text-center">Awards and Recognition</h3>
			<p>We are honored to be recognized for the work we do on behalf of our customers, employees, and communities every day.</p>
		</div>
	</div>
</section>
}

export default AboutUs;