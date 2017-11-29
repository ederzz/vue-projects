import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'

//在一个模块化的打包系统中必须使用Vue.use()来显式的安装Vuex
Vue.use( Vuex )

export default new Vuex.Store( {
	state: {
		menuFolded: false
	},
	mutations
} )
