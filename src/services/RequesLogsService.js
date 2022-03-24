import axios from 'axios';

const REQUEST_API_BASE_URL = 'https://http://localhost:9081/api/rest/request-logs';

class RequesLogsService{

	 getRequestLogs(){
return axios.get(REQUEST_API_BASE_URL);
	 }
}

export default new RequesLogsService()