<template>
	<div class="sideBar"
		:style="sideBarStyle">
		<el-menu
	      :default-active="onRoutes"
	      class="el-menu-vertical-demo"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b"
	      @open="handleOpen" 
	      @close="handleClose" 
	      :collapse="isCollapse"
	      router>
	      <template  v-for="item in menuItems">
		      <template v-if="item.subs">
		      	<el-submenu :index="item.index">
			      	<template slot="title">
			      		<i :class="item.icon"></i>
			      		<span slot="title">{{ item.title }}</span>
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
	                index: 'mainpage',
	                title: '首页'
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
	        ],
	        
	      }
	    },
	    computed:{
	    	isCollapse() {
	    		return this.$store.state.menuFolded
	    	}, 
		    onRoutes() {
		        return this.$route.path.replace('/','');
		    },
		    sideBarStyle() {
		    	//通过this.$store.state访问store里面的状态
		    	
		    	if( this.$store.state.menuFolded ) {
		    		return {
		    			flexGrow:'0',
		    			flexShrink:'0',
		    			flexBasis:'64px'
		    		}
		    	}else {
		    		return {
		    			flexGrow:'0',
		    			flexShrink:'0',
		    			flexBasis:'200px'
		    		}
		    	}
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
		display: block;
		
	}
	.sideBar > ul {
		height:100%;
	}
	.el-menu {
		border:none;
	}
	.el-menu li.is-active {
		color:#76b6e4 !important;
	}
</style>