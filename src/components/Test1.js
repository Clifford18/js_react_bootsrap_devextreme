import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import DataGrid from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

import service from './data1.js';

export default class Test1 extends React.Component {
	constructor(props) {
		super(props);
		this.employees = service.getEmployees1();
	}

	getDisplayExpr(item) {
		return item && item.FirstName + ' ' + item.request_method;
	}

	render() {
		return (
			<React.Fragment>
				<h1 className={'content-block'}>Request Logs</h1>
				<DataGrid
					className={'dx-card wide-card'}
					dataSource={this.employees}
					focusedRowEnabled={true}
					defaultFocusedRowIndex={0}
					keyExpr="request_id"
				/>
			</React.Fragment>
		);
	}
}
