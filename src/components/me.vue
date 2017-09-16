<template>
	<div class="me">

		<div id="" style="height: 150px; text-align: center;">
			<mt-swipe :auto="4000">
				<mt-swipe-item >
					<p>我的微信</p>
					<img src="../assets/2code.png"/>
				</mt-swipe-item>
				<mt-swipe-item>
					<p>我的手机号</p>
					18633225185
				</mt-swipe-item>
				<mt-swipe-item>
					<p>我的github</p>
					<a href="https://github.com/tobaccos/">https://github.com/tobaccos/</a>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div style=" margin-top: 10px;">
			<h3>what I can do</h3>
			<ol>
				<li class="animated slideInLeft">
					<p>语言类</p>
					<p>HTML ，CSS ，JavaScript ，Less/Sass</p>
				</li>
				<li class="animated slideInRight">
					<p>类库插件</p>
					<p>jQuery ，Zepto， Layer.js， Echarts.js，mintUI， iview</p>
				</li>
				<li class="animated rollin">
					<p>框架</p>
					<p>Bootstrap ， iScroll+Swiper+Animation.css  ，Vue.js ，angular.js </p>
				</li>
				<li class="animated flip">
					<p>工具类</p>
					<p>gulp ， webpack， git ，svn</p>
				</li>
			</ol>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.me img{
	display: block;
	height: 100px;
	margin: 0 auto;
}
h3{
	text-align: center;
	
}
</style>