import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect: '/readme'
  	},
    {
      path: '/readme',
      name: 'readme',
      component: () => import( '@/components/common/MainPage' ),
      children: [
      	{
      		path: '/',
      		component: () => import( '@/components/page/readme.vue' )
      	},
      	{
      		path: '/basetable',
      		component: () => import( '@/components/page/BaseTable.vue' )
      	},
      	{
      		path: '/baseform',
      		component: () => import( '@/components/page/BaseForm.vue' )
      	},
      	{
      		path: '/vueeditor',
      		component: () => import( '@/components/page/Editor.vue' )
      	},
      	{
      		path: '/upload',
      		component: () => import( '@/components/page/FileUpload.vue' )
      	},
      	{
      		path: '/markdown',
      		component: () => import( '@/components/page/MarkDown.vue' )
      	},
      	{
      		path: '/basecharts',
      		component: () => import( '@/components/page/VueChart.vue' )
      	},
      	{
      		path: '/drag',
      		component: () => import( '@/components/page/VueDraft.vue' )
      	}
      ]
    },
  ]
})
