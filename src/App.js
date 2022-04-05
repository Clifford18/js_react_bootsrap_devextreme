import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Task from "./components/tasks";
import RequestsDataComponent, {RequestsDataTest} from "./components/RequestsDataComponent";
import Axios_test_w from "./components/axios_test_w";
import NavApp from "./nav/NavApp";
import ScrollViewApp from "./scrollview/ScrollApp";


function App() {
	return (
		<div>
			<HeaderComponent/>
			<div className="container">

				{/*<ScrollViewApp/>*/}

				{/*<Axios_test_w/>*/}
				<RequestsDataComponent/>
				<RequestsDataTest/>
				<Task/>
				<NavApp/>


			</div>
			<FooterComponent/>


		</div>

	);
}

export default App;
