<template>
	<div class="sideBar">
		<el-menu
	      :default-active="onRoutes"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b"
	      router>
	      <template  v-for="item in menuItems">
		      <template v-if="item.subs">
		      	<el-submenu :index="item.index">
			      	<template slot="title"><i :class="item.icon"></i>{{ item.title }}
			      	</template>
				    <el-menu-item v-for="subItem in item.subs"
				    	:index="subItem.index">{{ subItem.title }}
				    </el-menu-item>
			    </el-submenu>
		      </template>
		      
		      <template v-else>
		      	<el-menu-item :index="item.index">
		      		<i :class="item.icon"></i>
		      		<span slot="title">{{ item.title }}</span>
		      	</el-menu-item>
		      </template>
	      </template>
	  	</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
	      return {
	        menuItems: [
	        	{
	                icon: 'el-icon-setting',
	                index: 'readme',
	                title: '自述'
	            },
	            {
	                icon: 'el-icon-menu',
	                index: '2',
	                title: '表格',
	                subs: [
	                    {
	                        index: 'basetable',
	                        title: '基础表格'
	                    }
	                ]
	            },
	            {
	                icon: 'el-icon-date',
	                index: '3',
	                title: '表单',
	                 subs: [
	                        {
	                            index: 'baseform',
	                            title: '基本表单'
	                        },
	                        {
	                            index: 'vueeditor',
	                            title: '编辑器'
	                        },
	                        {
	                            index: 'markdown',
	                            title: 'markdown'
	                        },
	                        {
	                            index: 'upload',
	                            title: '文件上传'
	                        }
	                    ]
	            },
	            {
	                icon: 'el-icon-star-on',
	                index: 'basecharts',
	                title: '图表'
	            },
	            {
	                icon: 'el-icon-upload2',
	                index: 'drag',
	                title: '拖拽'
	            }
	        ]
	      }
	    },
	    computed:{
		    onRoutes() {
		        return this.$route.path.replace('/','');
		    }
	   	},
	   	methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>

<style>
	.sideBar {
		width:250px;
		display: block;
		position:absolute;
		left:0;
		top:70px;
		display: block;
		bottom:0;
	}
	.sideBar > ul {
		height:100%;
	}
</style>