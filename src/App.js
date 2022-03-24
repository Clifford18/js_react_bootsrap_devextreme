import './App.css';
import RequestLogsComponent from "./components/RequestLogsComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
	return (
		<div>
			<HeaderComponent/>
			<div className="container">
				<RequestLogsComponent/>
			</div>
			<FooterComponent/>

		</div>

	);
}

export default App;
