import React from 'react';

import TreeView from 'devextreme-react/tree-view';
import TabPanel from 'devextreme-react/tab-panel';
import { REQUESTLOGSTYPES } from './NavDataTest.js';

export default class NavAppTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tabPanelIndex: 0,
			requestData: REQUESTLOGSTYPES[0].items[0],
			optionsData: REQUESTLOGSTYPES[0].items[0].options,
		};

		this.handleTreeViewSelectionChange = this.handleTreeViewSelectionChange.bind(this);
		this.handleTabPanelSelectionChange = this.handleTabPanelSelectionChange.bind(this);
	}

	render() {
		const { requestData } = this.state;
		return (
			<div className="container">
				<div className="left-content">
					<TreeView
						dataSource={REQUESTLOGSTYPES}
						selectionMode="single"
						selectByClick={true}
						onItemSelectionChanged={this.handleTreeViewSelectionChange}
					/>
				</div>
				<div className="right-content">
					<div className="title-container">
						<div>
							<div className="country-name">{requestData.fullName}</div>
							<div>{requestData.description}</div>
						</div>
					</div>

					<TabPanel
						itemTitleRender={renderPanelItemTitle}
						itemRender={renderPanelItem}
						selectedIndex={this.state.tabPanelIndex}
						onSelectionChanged={this.handleTabPanelSelectionChange}
						dataSource={this.state.optionsData}
						animationEnabled={true}
						id="tabpanel"
					/>
				</div>
			</div>
		);
	}

	handleTreeViewSelectionChange(e) {
		const requestData = e.itemData;
		if (requestData.options) {
			this.setState({
				tabPanelIndex: 0,
				requestData: e.itemData,
				optionsData: requestData.options,
			});
		}
	}

	handleTabPanelSelectionChange(e) {
		this.setState({
			tabPanelIndex: e.value,
		});
	}
}

function renderPanelItemTitle(item) {
	return <span className="tab-panel-title">{item.text}</span>;
}

function renderPanelItem(city) {
	return (
		<React.Fragment>
			<div className="right-content">
				<div>
					<b>{(city.capital) ? 'Capital. ' : ''}</b>{city.description}
				</div>
				<div className="stats">
					<div>
						<div>Population</div>
						<div><b>{city.population} people</b></div>
					</div>
					<div>
						<div>Area</div>
						<div><b>{city.area} km<sup>2</sup></b></div>
					</div>
					<div>
						<div>Density</div>
						<div><b>{city.density}/km<sup>2</sup></b></div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}


