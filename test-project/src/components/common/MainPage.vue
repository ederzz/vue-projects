<template>
	<div class="main-page">
		<m-header></m-header>
		<side-bar></side-bar>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import SideBar from './SideBar.vue'
	import MHeader from './Header.vue'
	export default {
		components: {
			SideBar, MHeader
		}
	}
</script>

<style>
	html,
	body,
	#app,
	.main-page {
		width:100%;
		height:100%;
		overflow: hidden;
	}
	
	.content {
		position:absolute;
		left:250px;
		top:70px;
		right:0;
		bottom:0;
		overflow-y: scroll;
	}
</style>