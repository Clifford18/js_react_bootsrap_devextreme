import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import DataGrid from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

import service from './data.js';

export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.employees = service.getEmployees();
	}

	getDisplayExpr(item) {
		return item && item.request_reference + ' ' + item.LastName;
	}

	render() {
		return (
			<React.Fragment>
				<DataGrid
					dataSource={this.employees}
					keyExpr="ID"
				/>
				<SelectBox
					dataSource={this.employees}
					valueExpr="ID"
					displayExpr={this.getDisplayExpr}
				/>
			</React.Fragment>
		);
	}
}
