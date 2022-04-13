export const REQUESTLOGSTYPES = [{
	id: '1',
	text: 'REQUEST LOGS',
	expanded: true,
	items: [{
		id: '1_1',
		text: 'ALL LOGS',
		title: 'All Enterprise Service Bus Logs',
		description: 'This is a combination of request log made both to the ATM Bridge and Members portal and their corresponding response',
		selected: true,
		options: [{
			id: '1_1_1',
			text: 'All Enterprise Service Bus Logs'
		}]
	},
		{
			id: '1_2',
			text: 'ATM Bridge Logs',
			title: 'ATM Bridge Logs',
			description: 'These are request logs made only to the ATM Bridge and their corresponding response',
			options: [{
				id: '1_2_2',
				text: 'ATM Bridge Log'
			}]
		},
		{
			id: '1_3',
			text: 'Members Portal Logs',
			title: 'Members Portal Request Logs',
			description: 'These are request logs made only to the Members and their corresponding response',
			options: [{
				id: '1_3_1',
				text: 'Members Portal Request Logs',
				description: 'Kuala Lumpur, officially the Federal Territory of Kuala Lumpur, or commonly KL, is the largest city of Malaysia. It is located in Klang Valley.'
			}]
		}
	]
},
	{
		id: '2',
		text: 'Profile',
		items: [{
			id: '2_1',
			text: 'My Profile',
			title: 'Profile',
			description: 'My Profile',
			options: [{
				id: '2_1_1',
				text: 'About Me '
			}, {
				id: '2_1_2',
				text: 'Reset Password'
			}]
		}]
	}
];
