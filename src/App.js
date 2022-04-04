import './App.css';
import RequestLogsComponent from "./components/RequestLogsComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Task from "./components/tasks";
import Request from "./components/Requests";
import Test from "./components/Test";
import Test1, {Test2} from "./components/Test1";
import LoginForm from "./components/Login";
import Axios_test_w from "./components/axios_test_w";


function App() {
	return (
		<div>
			<HeaderComponent/>
			<div className="container">
				<LoginForm/>
				<RequestLogsComponent/>
				<Request/>
				{/*<Axios_test_w/>*/}

				<Test/>
				<Test1/>
				<Test2/>
				<Task/>

			</div>
			<FooterComponent/>


		</div>

	);
}

export default App;
