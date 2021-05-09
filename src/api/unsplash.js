import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID E71Liuy0h59-u8YaP7bcPctxIhxGmI7PnHqfj7SvYyk'
	}
});
