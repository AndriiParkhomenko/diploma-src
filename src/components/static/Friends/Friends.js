import './Friends.scss'

function Friends () {
	return <>
<section className="friends row position-relative flex-column">
	<div className="friends__text text-white">We grow with our friends</div>
	<div className="friends__animation row justify-content-center">
		<div className="animation__image-1"></div>
		<div className="animation__image-2"></div>
		<div className="animation__image-3"></div>
		<div className="animation__image-4"></div>
		<div className="animation__image-5"></div>
		<div className="animation__image-6"></div>
	</div>
	<div className="friends__logo row justify-content-between align-items-center">
		<div className="logo__item"><img src="images/friends/Kyrie-Irving.jpg" alt="Irving"/></div>
		<div className="logo__item"><img src="images/friends/reebok.jpg" alt="reebok"/></div>
		<div className="logo__item"><img src="images/friends/Spalding-logo.png" alt="Spalding"/></div>
		<div className="logo__item"><img src="images/friends/nike.webp" alt="nike"/></div>
		<div className="logo__item"><img src="images/friends/jordan.png" alt="jordan"/></div>
	</div>
</section>
<section className="partner my-5">
	<div className="partner__content d-flex flex-wrap">
		<div className="content__container d-flex justify-content-between align-items-center my-sm-5 mt-sm-0 mt-3">
			<div className="content__image d-flex justify-content-around align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" className="bi bi-star" viewBox="0 0 16 16">
					<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
				</svg>
			</div>
			<div className="content__description mx-3">
				<div className="content__title text-uppercase pb-sm-3 pb-1">Popularity</div>
				<div className="content__text">The products of our partners are widely popular among professional athletes.</div>
			</div>
		</div>
		<div className="content__container d-flex justify-content-between align-items-center my-sm-5 mt-sm-0 mt-3">
			<div className="content__image d-flex justify-content-around align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" className="bi bi-globe-americas" viewBox="0 0 16 16">
					<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
				</svg>
			</div>
			<div className="content__description mx-3">
				<div className="content__title text-uppercase pb-sm-3 pb-1">World fame</div>
				<div className="content__text">We cooperate with global companies whose products are used all over the world.</div>
			</div>
		</div>
		<div className="content__container d-flex justify-content-between align-items-center mb-md-5 my-md-5 mb-sm-0 my-sm-5 mt-sm-0 mt-3">
			<div className="content__image d-flex justify-content-around align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" className="bi bi-clock-history" viewBox="0 0 16 16">
					<path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
					<path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
					<path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
				</svg>
			</div>
			<div className="content__description mx-3">
				<div className="content__title text-uppercase pb-sm-3 pb-1">Tested by time</div>
				<div className="content__text">Our cooperation is calculated in years. We are proud of our shared experience.</div>
			</div>
		</div>
		<div className="content__container d-flex justify-content-between align-items-center mb-md-5 my-md-5 mb-sm-0 my-sm-5 mt-sm-0 mt-3">
			<div className="content__image d-flex justify-content-around align-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" className="bi bi-buildings-fill" viewBox="0 0 16 16">
					<path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z"/>
				</svg>
			</div>
			<div className="content__description mx-3">
				<div className="content__title text-uppercase pb-sm-3 pb-1">Organization</div>
				<div className="content__text">Our partners have a developed infrastructure and advanced logistics.</div>
			</div>
		</div>
	</div>
</section>
<section className="partnership d-flex align-items-center">
	<div className="partnership__left">
		<div className="partnership__text text-center text-uppercase text-white"><p className='m-0'>Together to victory</p></div>
	</div>
	<div className="partnership__right">
		<img src="images/friends/partnership.jpg" alt="partnership"/>
	</div>
</section>
</>

}

export default Friends;