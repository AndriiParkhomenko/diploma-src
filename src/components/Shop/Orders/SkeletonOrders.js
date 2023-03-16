import ContentLoader from "react-content-loader"

function SkeletonOrders () {
	return (
		<ContentLoader
			speed={2}
			width={'100%'}
			height={'100%'}
			viewBox="0 0 1200 100"
			backgroundColor="#d9d9d9"
			foregroundColor="#ededed"
		>
			<rect x="50" y="5" rx="4" ry="4" width="95%" height="75%" />
			<rect x="8" y="5" rx="4" ry="4" width="35" height="75%" />
		</ContentLoader>
	)
}

export default SkeletonOrders;