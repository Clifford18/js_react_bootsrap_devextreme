import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import DataGrid from 'devextreme-react/data-grid';

const jsonUrl = 'https://jsonplaceholder.typicode.com/posts';

class App extends React.Component {
	render() {
		return (
			<DataGrid
				dataSource={jsonUrl}
			/>
		);
	}
}
export default App;