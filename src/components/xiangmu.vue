<template>
	<div id="sample">

		<ul>
			<li class="clear" v-for="(sample,index) in samples">

				<em class="left">{{sample.title}}</em>
				<em class="right">
						<span><a :href="sample.yuanma">源码</a></span>
						<span><a :href="sample.yanshi">演示</a></span>
					</em>
			</li>
		</ul>
	</div>
</template>

<script>
	import data from "../../static/json/sample.json";

	export default {
		name: 'xiangmu',
		data() {
			return {
				samples: data.samples
			}
		}
	}
</script>

<style scoped>
	em {
		font-style: normal;
	}
	
	ul {
		width: 100%;
		padding: 0;
		margin: 0;
	}
	
	#sample li {
		/*width: 100%;*/
		font-size: 14px;
		height: 50px;
		margin: 2px 0;
		padding: 0 5px;
		line-height: 50px;
		border-bottom: 1px solid #CCCCCC;
		/*background: #CCCCCC;*/
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear {
		clear: both;
	}
	
	a {
		color: #42b983;
	}
</style>