import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	strict: debug,
	state: {
		data: [],
		detailedItem: {}
	},
	getters: {

	},
	mutations: {
		setField(state, { field, value }) {
			state[field] = value
		}
	},
	actions: {
		async getData(store) {
			const data = await api.getData()
			store.commit('setField', { field: 'data', value: data })
		},
		async getDetails(store, id) {
			const details = await api.getDetails(id)
			store.commit('setField', { field: 'detailedItem', value: details })
		},
		clearDetails(store) {
			store.commit('setField', { field: 'detailedItem', value: {} })
		}
	}
})