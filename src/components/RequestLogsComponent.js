import React, {Component} from 'react';
import {Table} from "react-bootstrap";

export default class RequestLogsComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			requestlogs: []
		}
	}

	render() {
		return (
			<div>
				<h2 className="text-center ">Request Logs</h2>
				<div className="row">
					<Table striped bodered>

						<thead>
						<tr>
							<th>request_id</th>
							<th>request_reference</th>
							<th>request_method</th>
							<th>request_resource</th>
							<th>request_parameters</th>
							<th>request_headers</th>
							<th>request_body</th>
							<th>request_origin_ip</th>
							<th>response_headers</th>
							<th>response_body</th>
							<th>error_code</th>
							<th>error_message</th>
							<th>error_stacktrace</th>
							<th>date_created</th>
							<th>date_modified</th>
						</tr>
						</thead>

						<tbody>
						{
							this.state.requestlogs.map(
								requestlog =>
									<tr key = {requestlog.request_id}>
										<th>{requestlog.request_id}</th>
										<td>{requestlog.request_reference}</td>
										<td>{requestlog.request_method}</td>
										<td>{requestlog.request_resource}</td>
										<td>{requestlog.request_parameters}</td>
										<td>{requestlog.request_headers}</td>
										<td>{requestlog.request_body}</td>
										<td>{requestlog.request_origin_ip}</td>
										<td>{requestlog.response_headers}</td>
										<td>{requestlog.response_body}</td>
										<td>{requestlog.error_code}</td>
										<td>{requestlog.error_message}</td>
										<td>{requestlog.error_stacktrace}</td>
										<td>{requestlog.date_created}</td>
										<td>{requestlog.date_modified}</td>
									</tr>
							)
						}
						</tbody>
					</Table>

				</div>

			</div>
		);
	}
};