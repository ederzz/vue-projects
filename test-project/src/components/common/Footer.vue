<template>
	<div class="footer">
			<div class="author">© 2017 神以灵</div>
			<div class="time">你已在test-projects停留<span class="time-num">{{ mTime }}</span>秒</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mTime: 0,
			}
		},
		mounted() {
			let that = this;
			let timerOne =  setInterval( function(){
				that.mTime = that.mTime + 1;
			}, 1000 );
		}
	}
</script>

<style>
	.footer {
		background:#fff;
		display: flex;
		margin-top:30px;
		justify-content: center;
		color:#aaa;
		font-weight: bold;
		font-family: 'sans-serif';
		padding: 7px 0;
		vertical-align: middle;
	}
	.time {
		margin-left: 30px;
	}
	.time-num {
		padding:0 10px;
		font-size:22px;
		color:#f14e6a;
	}
	.author,
	.time {
		line-height: 30px;
	}
</style>