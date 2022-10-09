import "./App.css";
import Card from "./components/card/Card.jsx";

import RightSidebar from "./components/rightsidebar/RightSidebar";

import Sidebar from "./components/sidebar/Sidebar";

function App() {
	return (
		<>
			<div className="App">
				<Sidebar />

				<Card />
				<RightSidebar />
			</div>
		</>
	);
}

export default App;
