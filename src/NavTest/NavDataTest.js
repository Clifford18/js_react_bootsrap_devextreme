export const REQUESTLOGSTYPES = [{
	id: '1',
	text: 'REQUEST LOGS',
	expanded: true,
	items: [{
		id: '1_1',
		text: 'ALL LOGS',
		fullName: 'All Enterprise Service Bus Logs',
		description: 'This is a combination of request log made both to the ATM Bridge and Members portal and their corresponding response',
		area: '1,010,407.87',
		population: '94,798,827',
		gdp: '1,173',
		selected: true,
		flag: 'images/flags/Egypt.svg',
		cities: [{
			id: '1_1_1',
			text: 'Cairo',
			population: '9,500,000',
			area: '528',
			density: '19,376',
			description: "The city's metropolitan area is the largest in the Middle East and the Arab world, and the 15th-largest in the world, is associated with ancient Egypt.",
			capital: true,
			flag: 'images/flags/Cairo.svg'
		}, {
			id: '1_1_2',
			text: 'Alexandria',
			population: '4,984,387',
			area: '2,679',
			density: '1,900',
			description: 'Alexandria is the second largest city and a major economic center in Egypt, extending about 32 km (20 mi) along the coast of the Mediterranean Sea in the north central part of the country.',
			flag: 'images/flags/Alexandria.svg'
		}, {
			id: '1_1_3',
			text: 'Giza',
			population: '3,628,062',
			area: '1,579.75',
			density: '2,300',
			description: 'Giza is the third-largest city in Egypt. It is located on the west bank of the Nile, 5 km (3 mi) southwest of central Cairo.',
			flag: 'images/flags/Giza.svg'
		}]
	},
		{
			id: '1_2',
			text: 'ATM Bridge Logs',
			fullName: 'ATM Bridge Logs',
			description: 'These are request logs made only to the ATM Bridge and their corresponding response',
			area: '1,221,037',
			population: '54,956,900',
			gdp: '742.461',
			flag: 'images/flags/SouthAfrica.svg',
			cities: [{
				id: '1_2_2',
				text: 'Pretoria',
				population: '741,651',
				area: '687.54',
				density: '1,100',
				description: "Pretoria is a city in the northern part of Gauteng, South Africa. Being one of the country's three capital cities, it serves as the seat of the executive branch of government.",
				capital: true,
				flag: 'images/flags/Pretoria.svg'
			}, {
				id: '1_2_1',
				text: 'Johannesburg',
				population: '957,441',
				area: '334.81',
				density: '2,900',
				description: 'Johannesburg is the largest city in South Africa and is one of the 50 largest urban areas in the world.',
				flag: 'images/flags/Johannesburg.svg'
			}, {
				id: '1_2_3',
				text: 'Durban',
				population: '595,061',
				area: '225.91',
				density: '2,600',
				description: 'Durban is the largest city in the South African province of KwaZulu-Natal. It is Located on the Indian Ocean coast of the African continent.',
				flag: 'images/flags/Durban.svg'
			}]
		},
		{
			id: '1_3',
			text: 'Members Portal Logs',
			fullName: 'Members Portal Request Logs',
			description: 'These are request logs made only to the Members and their corresponding response',
			area: '330,803',
			population: '31,708,000',
			gdp: '913.593',
			flag: 'images/flags/Malaysia.svg',
			cities: [{
				id: '1_3_1',
				text: 'Kuala Lumpur',
				population: '1,768,000',
				area: '243',
				density: '6,891',
				description: 'Kuala Lumpur, officially the Federal Territory of Kuala Lumpur, or commonly KL, is the largest city of Malaysia. It is located in Klang Valley.',
				capital: true,
				flag: 'images/flags/KualaLumpur.svg'
			}, {
				id: '1_3_2',
				text: 'George Town',
				population: '708,127',
				area: '305.77',
				density: '2,372',
				description: 'George Town, the capital city of the Malaysian state of Penang, is located at the northeastern tip of Penang Island.',
				flag: 'images/flags/GeorgeTown.svg'
			}, {
				id: '1_3_3',
				text: 'Ipoh',
				population: '657,892',
				area: '643',
				density: '1,023',
				description: 'Ipoh is the capital of the Malaysian state of Perak. It stands on the banks of the Kinta River.',
				flag: 'images/flags/Ipoh.svg'
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
			fullName: 'Japan',
			description: 'Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest.',
			area: '377,972',
			population: '126,672,000',
			gdp: '5,420',
			flag: 'images/flags/Japan.svg',
			cities: [{
				id: '2_1_1',
				text: 'About Me ',
				population: '13,617,445',
				area: '2,187.66',
				density: '6,224.66',
				description: 'The Greater Tokyo Area is the most populous metropolitan area in the world. The city is located in the Kantō region on the southeastern side of the main island Honshu and includes the Izu Islands and Ogasawara Islands.',
				capital: true,
				flag: 'images/flags/Tokyo.svg'
			}, {
				id: '2_1_2',
				text: 'Reset Password',
				population: '3,732,616',
				area: '437.38',
				density: '8,534.03',
				description: 'Yokohama is the second largest city in Japan by population, after Tokyo, and the most populous municipality of Japan. It lies on Tokyo Bay, south of Tokyo, in the Kantō region of the main island of Honshu.',
				flag: 'images/flags/Yokohama.svg'
			}]
		}]
	}
];
