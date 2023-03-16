import { Col } from "react-bootstrap";
import ContentLoader from "react-content-loader"

function SkeletonProduct () {
	return <Col sm={6} md={4} lg={3} >
	<ContentLoader 
		speed={2}
    width={255}
    height={420}
    viewBox="0 0 255 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="20" rx="3" ry="3" width="221" height="120" /> 
    <rect x="62" y="114" rx="3" ry="3" width="52" height="6" /> 
    <rect x="0" y="153" rx="3" ry="3" width="221" height="16" /> 
    <rect x="0" y="186" rx="3" ry="3" width="221" height="16" /> 
    <rect x="3" y="251" rx="3" ry="3" width="155" height="16" /> 
    <rect x="2" y="289" rx="0" ry="0" width="120" height="16" /> 
    <rect x="2" y="332" rx="10" ry="10" width="114" height="36" /> 
    <rect x="0" y="217" rx="3" ry="3" width="221" height="16" />
  </ContentLoader>
</Col>
}

export default SkeletonProduct;