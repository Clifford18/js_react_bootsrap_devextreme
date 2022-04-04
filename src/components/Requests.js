import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
	Column,
	Pager,
	Paging,
	FilterRow,
	Lookup
} from 'devextreme-react/data-grid';



export default function Request() {
	return (
		<React.Fragment>
			<h2 className={'content-block'}>Requests</h2>

			<DataGrid
				className={'dx-card wide-card'}
				dataSource={dataSource}
				keyExpr="request_id"

				showBorders={false}
				focusedRowEnabled={true}
				defaultFocusedRowIndex={0}
				columnAutoWidth={true}
				columnHidingEnabled={true}
			>
				<Paging defaultPageSize={10}/>
				<Pager showPageSizeSelector={true} showInfo={true}/>
				<FilterRow visible={true}/>

				{/*<Column dataField={'request_id'} width={90} hidingPriority={2}/>*/}
				{/*<Column*/}
				{/*	dataField={'request_reference'}*/}
				{/*	width={190}*/}
				{/*	caption={'Request Reference'}*/}
				{/*	hidingPriority={8}*/}
				{/*/>*/}
				{/*<Column*/}
				{/*	dataField={'request_method'}*/}
				{/*	caption={'Request Method'}*/}
				{/*	hidingPriority={6}*/}
				{/*/>*/}
				{/*<Column*/}
				{/*	dataField={'request_parameters'}*/}
				{/*	caption={'Request Parameters'}*/}
				{/*	allowSorting={false}*/}
				{/*	hidingPriority={7}*/}
				{/*/>*/}
				{/*<Column*/}
				{/*	dataField={'date_created'}*/}
				{/*	caption={'Date Created'}*/}
				{/*	dataType={'date'}*/}
				{/*	hidingPriority={4}*/}
				{/*/>*/}
				{/*<Column*/}
				{/*	dataField={'date_modified'}*/}
				{/*	caption={'Date Modified'}*/}
				{/*	dataType={'date'}*/}
				{/*	hidingPriority={4}*/}
				{/*/>*/}
			</DataGrid>
		</React.Fragment>
	);
}

const dataSource = 'http://172.20.102.33:9081/api/rest/request-logs';

