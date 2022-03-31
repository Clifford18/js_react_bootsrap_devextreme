import axios from 'axios';

const REQUEST_API_BASE_URL = 'http://localhost:9081/api/rest/request-logs';

class RequestLogsService{

	 getRequestLogs(){
return axios.get(REQUEST_API_BASE_URL);
	 }

	//console.log(getRequestLogs);

}
export default new RequestLogsService()

