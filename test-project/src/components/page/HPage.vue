<template>
	<el-carousel :interval="4000" type="card" height="200px">
	    <el-carousel-item v-for="item in picSrc" :key="item">
            <img class="pic" :src="item"/>
	    </el-carousel-item>
	</el-carousel>
</template>

<script>
	export default {
		data() {
			return {
				picSrc:[
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512790868&di=c40419b68ab5423e3d253a1b686fd608&imgtype=jpg&er=1&src=http%3A%2F%2F2t.5068.com%2Fuploads%2Fallimg%2F160406%2F65-1604061H010.jpg',
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3633259666,3420635525&fm=27&gp=0.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512196219871&di=aebbcda02f0331cb69b196e9b0f14ffb&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Ff7a94773edd364cffc10838a39dd928918ab97df.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512196237332&di=442b70e4e1d19b96a33fb526c7cf281a&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170630%2F106fc4e0edf64a50b35fe4803a21ce8a_th.png',
					'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1256289049,2264574919&fm=27&gp=0.jpg'
				]
			}
		}
	}
</script>

<style>
	  .el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
	  .pic {
	  	width:510px;
	  	height:200px;
	  }
</style>