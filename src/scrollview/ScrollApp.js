import React from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import service from './scrolldata';
import {AxiosTest} from "../components/AxiosTest";

export default class ScrollViewApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showScrollBarMode: 'always',
			pullDown: true,
			scrollByContent: true,
			scrollByThumb: true,
			content: service.getContent(),
		};
		this.getInstance = this.getInstance.bind(this);
		this.pullDownValueChanged = this.pullDownValueChanged.bind(this);
		this.reachBottomValueChanged = this.reachBottomValueChanged.bind(this);
		this.scrollbarModelValueChanged = this.scrollbarModelValueChanged.bind(this);
		this.scrollByContentValueChanged = this.scrollByContentValueChanged.bind(this);
		this.scrollByThumbValueChanged = this.scrollByThumbValueChanged.bind(this);
		this.updateTopContent = this.updateTopContent.bind(this);
		this.updateBottomContent = this.updateBottomContent.bind(this);
		this.updateContent = this.updateContent.bind(this);
	}

	render() {
		const {
			showScrollBarMode, content, scrollByThumb, scrollByContent, pullDown,
		} = this.state;
		return (
			<div id="scrollview-demo">
				<ScrollView id="scrollview" ref={this.getInstance}
							reachBottomText="Updating..."
							scrollByContent={scrollByContent}
							bounceEnabled={pullDown}
							onReachBottom={this.updateBottomContent}
							onPullDown={this.updateTopContent}
							showScrollbar={showScrollBarMode}
							scrollByThumb={scrollByThumb}>
					<div className="text-content">
						<AxiosTest/>
					</div>
				</ScrollView>

			</div>
		);
	}

	getInstance(ref) {
		this.scrollView = ref.instance;
	}

	pullDownValueChanged(args) {
		this.setState({
			pullDown: args.value,
		});
	}

	reachBottomValueChanged(args) {
		this.scrollView.option('onReachBottom', args.value ? this.updateBottomContent : null);
	}

	scrollbarModelValueChanged(args) {
		this.setState({
			showScrollBarMode: args.value,
		});
	}

	scrollByContentValueChanged(args) {
		this.setState({
			scrollByContent: args.value,
		});
	}

	scrollByThumbValueChanged(args) {
		this.setState({
			scrollByThumb: args.value,
		});
	}

	updateTopContent(args) {
		this.updateContent(args, 'PullDown');
	}

	updateBottomContent(args) {
		this.updateContent(args, 'ReachBottom');
	}

	updateContent(args, eventName) {
		const updateContentText = `\n Content has been updated on the ${eventName} event.\n\n`;
		if (this.updateContentTimer) { clearTimeout(this.updateContentTimer); }
		this.updateContentTimer = setTimeout(() => {
			this.setState({
				content: eventName === 'PullDown' ? updateContentText + this.state.content : this.state.content + updateContentText,
			});
			args.component.release();
		}, 500);
	}
}
