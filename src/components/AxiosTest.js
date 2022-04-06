import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import DataGrid, {Pager, Paging} from 'devextreme-react/data-grid';
import {Column} from "devextreme-react/gantt";

const jsonUrl = 'https://jsonplaceholder.typicode.com/posts';

export class AxiosTest extends React.Component {
	render() {
		return (
			<DataGrid
				dataSource={jsonUrl}
			>
				<Column dataField={'userId'} width={90} hidingPriority={2}/>
				<Column
					dataField={'id'}
					width={150}
					caption={'ID'}
				/>
				<Column
					dataField={'title'}
					width={200}
					caption={'Title'}
				/>
				<Column
					dataField={'body'}
					width={600}
					caption={'body'}
				/>

			</DataGrid>
		);
	}
}
