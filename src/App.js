import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Task from "./components/Tasks";
import RequestsDataComponent, {RequestsDataTest} from "./components/RequestsDataComponent";
import NavApp from "./nav/NavApp";
import ScrollViewApp from "./scrollview/ScrollApp";
import {AxiosTest} from "./components/AxiosTest";
import NavAppTest from "./NavTest/NavAppTest";
import ToolbarApp from "./toolbar/Toolbar";


function App() {
	return (
		<div>
			<HeaderComponent/>
			<div className="container">
				<ScrollViewApp/>
			</div>
			<div className="container">
				<NavAppTest/>


			</div>
			<div>
				<RequestsDataComponent/>
				<RequestsDataTest/>
				<Task/>
				<NavApp/>
				<AxiosTest/>
				<NavAppTest/>
			</div>
			<FooterComponent/>


		</div>

	);
}

export default App;
