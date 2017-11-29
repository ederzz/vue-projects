<template>
	<div class="main-page">
		<side-bar></side-bar>
		<div class="content">
			<u-header></u-header>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import SideBar from './SideBar.vue'
	import UHeader from './Header.vue'
	export default {
		components: {
			SideBar, UHeader
		}
	}
</script>

<style>
	html,body,#app,.main-page {
		height:100%;
	}
	.main-page {
		display: flex;
		flex-direction: row;
	}
	.content {
		flex:1;
		padding-left:20px;
		background:rgb( 236,236,236 );
	}
</style>