import React from 'react';

import Toolbar, { Item } from 'devextreme-react/toolbar';

import notify from 'devextreme/ui/notify';
import 'devextreme/ui/select_box';


function renderLabel() {
	return <div className="toolbar-label"><b>Request Logs</b></div>;
}

export default class ToolbarApp extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Toolbar>
					<Item location="center"
						  locateInMenu="never"
						  render={renderLabel} />

					<Item locateInMenu="always"
						  widget="dxButton"
						  options={saveButtonOptions} />

				</Toolbar>

			</React.Fragment>
		);
	}
}

const saveButtonOptions = {
	text: 'Logout',
	onClick: () => {
		notify('Succefully logged out!');
	},
};

