import Footer from "./components/static/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/static/Header/Header";

function App() {
  return (<>
		<Header/>
		<Outlet/>
		<Footer/>
	</>
  );
}

export default App;
