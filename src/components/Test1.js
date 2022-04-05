import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import DataGrid, {Pager, Paging} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';

import service from '../services/data1.js';
import {Column, FilterRow} from "devextreme-react/gantt";

export default class Test1 extends React.Component {
	constructor(props) {
		super(props);
		this.requests = service.getEmployees1();
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
					dataSource={this.requests}
					showBorders={false}
					focusedRowEnabled={true}
					defaultFocusedRowIndex={0}
					columnAutoWidth={true}
					columnHidingEnabled={true}
				>
					<Paging defaultPageSize={10}/>
					<Pager showPageSizeSelector={true} showInfo={true}/>
					<FilterRow visible={true}/>

					<Column dataField={'request_id'} width={90} hidingPriority={2}/>
					<Column
						dataField={'request_reference'}
						width={150}
						caption={'Request Reference'}
					/>
					<Column
						dataField={'request_method'}
						width={140}
						caption={'Request Method'}
					/>
					
					<Column
						dataField={'request_headers'}
						width={140}
						allowSorting={false}
						caption={'Request Headers'}
					/>
					<Column
						dataField={'request_body'}
						width={190}
						allowSorting={false}
						caption={'Request Body'}
					/>
					<Column
						dataField={'response_headers'}
						width={190}
						allowSorting={false}
						caption={'Response Headers'}
					/>
					<Column
						dataField={'response_body'}
						width={190}
						allowSorting={false}
						caption={'Response Body'}
					/>
					<Column
						dataField={'error_code'}
						width={100}
						caption={'Error Code'}
					/>
					<Column
						dataField={'date_created'}
						width={190}
						caption={'Date Created'}
						dataType={'date'}

					/>
					<Column
						dataField={'date_modified'}
						width={190}
						caption={'Date Modified'}
						dataType={'date'}

					/>
				</DataGrid>

			</React.Fragment>
		);
	}
}

export class Test2 extends React.Component {
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

				</DataGrid>

			</React.Fragment>
		);
	}
}
