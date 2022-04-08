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
			<ToolbarApp/>
			<HeaderComponent/>
			<div className="container">

				<ScrollViewApp/>

				<RequestsDataComponent/>
				<RequestsDataTest/>
				<Task/>
				<NavApp/>
				<AxiosTest/>
				<NavAppTest/>
				<ToolbarApp/>


			</div>
			<FooterComponent/>


		</div>

	);
}

export default App;
