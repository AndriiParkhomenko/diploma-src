import { Button } from "react-bootstrap";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

function Confirmation () {
	const {user, onClickOrder, isOrderLoading} = useContext(AppContext);

	return <div className="confirmation text-center">
		<Button variant={'success'} disabled={isOrderLoading} onClick={onClickOrder}>Send confirmation to {user.email} </Button>
	</div>
}

export default Confirmation;