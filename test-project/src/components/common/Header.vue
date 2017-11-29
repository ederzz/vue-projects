<template>
	<div class="header">
		<div class="icon-wrapper">
			<i :class="iconClassName"
				@click="changeMenuFold"></i>
		</div>
		<div class="right">
			<el-dropdown :hide-on-click="false">
			  <span class="el-dropdown-link">
			  	<i class="iconfont el-icon-vt-weibiaoti1"></i> shenyiling
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>退出</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	//通过mapMutations将store里的mutation映射为组件的方法
	
	export default {
		data() {
			return {
				ifFold: false
			}
		},
		computed: {
			iconClassName() {
				return {
					'iconfont': true,
					'el-icon-vt-menu-fold':!this.$store.state.menuFolded,
					'el-icon-vt-menuunfold':this.$store.state.menuFolded
				}
			} 
		},
		methods: {
			...mapMutations( [
				'changeMenuFold'
			] )
		}
	}
</script>

<style>
	@import '//at.alicdn.com/t/font_491263_zlded72atbg9zfr.css';
	.header {
		height:58px;
		background:#fff;
		padding:0 50px;
		position:relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.icon-wrapper {
		position:absolute;
		left:25px;	
	}
	.iconfont:hover {
		color:#409EFF;
	}
	.el-dropdown-link {
	    cursor: pointer;
		color: rgba(0,0,0,0.65);
	}
	.el-dropdown-link:hover {
		color: #409EFF;
	}
	.el-dropdown-menu {
		padding:0;
	}
	.el-dropdown-menu > .el-dropdown-menu__item:hover {
		background:#fff;
		color:#409EFF;
	}
</style>