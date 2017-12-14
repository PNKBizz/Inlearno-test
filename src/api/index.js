import Vue from 'vue'
import axios from 'axios'

let cashedItems = [];

export default {
	async getData() {
		const response = await axios.get('/api/data')
		return response.data
	},
	async getDetails(id) {
		console.log(cashedItems);
		const detailsFromCashe = cashedItems.filter(item => +item.id === +id)[0]
		if (detailsFromCashe) {
			return detailsFromCashe
		} else {
			const response = await axios.get(`/api/details/${id}`)
			cashedItems.push(response.data)
			return response.data
		}
	}
}