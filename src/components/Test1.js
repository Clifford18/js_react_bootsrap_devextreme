import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import DataGrid, {Pager, Paging} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

import service from './data1.js';
import {Column, FilterRow} from "devextreme-react/gantt";

export default class Test1 extends React.Component {
	constructor(props) {
		super(props);
		this.employees = service.getEmployees1();
	}

	getDisplayExpr(item) {
		return item && item.request_method + ' ' + item.request_method;
	}

	render() {
		return (
			<React.Fragment>
				<h1 className={'content-block'}>Request Logs</h1>
				<DataGrid
					className={'dx-card wide-card'}
					dataSource={this.employees}
					keyExpr="request_id"
					showBorders={false}
					focusedRowEnabled={true}
					defaultFocusedRowIndex={0}
					columnAutoWidth={true}
					columnHidingEnabled={true}
				>
				{/*<Paging defaultPageSize={10}/>*/}
				{/*<Pager showPageSizeSelector={true} showInfo={true}/>*/}
				{/*<FilterRow visible={true}/>*/}

				<Column dataField={'request_id'} width={90} hidingPriority={2} />
				<Column
					dataField={'request_method'}
					width={190}
					caption={'request_method'}

				/>
				</DataGrid>







			</React.Fragment>
		);
	}
}
