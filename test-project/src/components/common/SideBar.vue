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
	      <div class="taichi-box">
			<div class="tai-chi">
				<div class="taiChi-left"></div>
				<div class="taiChi-right"></div>
				<div class="b-circle">
					<div class="circle-b"></div>
				</div>
				<div class="w-circle">
					<div class="circle-w"></div>
				</div>
			</div>
			<span class="nick-name" v-show="!ifShow">神以灵</span>
		  </div>
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
	    	ifShow(){
	    		return this.$store.state.menuFolded
	    	},
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
	.taichi-box {
		background: transparent;
		margin:50px auto;
		display: flex;
		align-items: center;
		/*width:100px;*/
		justify-content:center;
		
	}
	.nick-name {
		color:#fff;
		font-size: 24px;
		font-family: "Microsoft YaHei", "SimHei";
		padding:0 20px;
	}
	.tai-chi {
		width:50px;
		height:50px;
		position:relative;
		border-radius:50%;
		animation: spin 6s linear infinite;
		box-shadow: 0px 0px 75px 15px #b6efe7b3;
		opacity: 0.7;
		font-weight: bolder;
	}
	.taiChi-left {
		width:50%;
		height: 100%;
		border-radius:100% 0 0 100% /50% 0 0 50%;
		background:#000;
		position: absolute;
		top:0;
		left:0;
	}
	
	.taiChi-right {
		width:50%;
		height: 100%;
		border-radius:0 100% 100% 0 /0 50% 50% 0;
		background:#fff;
		position: absolute;
		right:0;
		top:0;
	}
	.b-circle {
		width:50%;
		height:50%;
		border-radius: 50%;
		background:#000;
		position:absolute;
		top:0;
		right:25%;
	}
	.circle-b {
		width:25%;
		height:25%;
		background:#fff;
		border-radius: 50%;
		position:absolute;
		top:40%;
		left:40%;
	}
	.w-circle {
		width:50%;
		height:50%;
		border-radius: 50%;
		background:#fff;
		position:absolute;
		bottom:0;
		left:25%;
	}
	.circle-w {
		width:25%;
		height:25%;
		background:#000;
		border-radius: 50%;
		position:absolute;
		top:40%;
		left:40%;
	}
	
	@keyframes spin {
		0% {
			transform: rotate( 0deg );
		}
		100% {
			transform: rotate( 360deg );
		}
	}
</style>