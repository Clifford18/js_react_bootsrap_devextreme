import './App.css';
import RequestLogsComponent from "./components/RequestLogsComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Task from "./components/tasks";
import Request from "./components/Requests";
import Test from "./components/Test";
import Test1 from "./components/Test1";


function App() {
	return (
		<div>
			<HeaderComponent/>
			<div className="container">
				<RequestLogsComponent/>
				<Request/>
				<Test/>
				<Test1/>
				<Task/>
			</div>
			<FooterComponent/>


		</div>

	);
}

export default App;
