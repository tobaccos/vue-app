<template>
	<div id="app">
		<div class="header">
			<em style="float: left;width: 40px;height: 40px;"><img src="./assets/555.png" /></em> {{title}}
			<em @click="openMusic" v-if="music" style="float: right;width: 40px;height: 40px;" class="iconfont icon-yinle">
				

			</em>
			<em @click="openMusic" v-else style="float: right;width: 40px;height: 40px;" class="iconfont icon-yinleguanbi">
				
			</em>
				<audio autoplay="autoplay" loop="loop" src="../static/林俊杰 - 一眼万年.mp3"></audio>
			
		</div>
		<div class="content">
			<transition name="custom-classes-transition" enter-active-class="animated slideInLeft">
				<router-view></router-view>

			</transition>
		</div>

		<div class="footer">

			<router-link :to="nav.path" v-for="nav in navs">
				<em @click="change(nav.value)" :class="[iconfont,nav.class]" style="font-size: 30px;">
				</em>
			</router-link>

		</div>
	</div>
</template>

<script>
	import "../static/iconfont.css"
	import "../static/mui.min.js"
	export default {
		components: {},
		data() {
			return {
				iconfont: "iconfont",
				navs: [{
					path: "/",
					class: 'icon-zhuye',
					value: "主页"
				}, {
					path: "/xiangmu",
					class: 'icon-xiangmu',
					value: 'demo源码'
				}, {
					path: '/data',
					class: 'icon-ziliao',
					value: '学习资料'
				}, {
					path: '/me',
					class: 'icon-lianxiwo',
					value: "联系我"
				}],
				navss: ['icon-zhuye-copy', 'icon-xiangmu-copy', 'icon-ziliao-copy', 'icon-lianxiwo-copy'],
				title: "首页",
				music:true
			}
		},
		mounted() {
			mui.init({
				keyEventBind: {
					backbutton: true //打开back按键监听
				}
			});
			mui.back = function() {
				var btn = ["确定", "取消"];
				mui.confirm('确认关闭当前窗口？', '提示', btn, function(e) {
					if(e.index == 0) {
						plus.runtime.quit(); //退出APP
					}
				});
			}
		},
		methods: {
			//导航切换
			change(x) {
				return this.title = x
			},
			//音乐开启关闭
			openMusic(){
				this.music=!this.music;
				var audios=document.querySelector("audio");
				this.music==false?audios.pause():audios.play()
			
			}
		}
	}
</script>

<style>
	html,
	body {
		/*position: relative;*/
		height: 100%;
		/*background:#FFFDEF;*/
	}
	
	ul {
		list-style: none;
	}
	
	.header {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #f4f4f4;
		color: #7bcca8;
		font-size: 16px;
		position: fixed;
		top: 0;
		left: 0;
		text-align: center;
		margin-bottom: 40px;
		z-index: 2;
	}
	
	.header img {
		height: 100%;
	}
	
	.content {
		width: 100%;
		height: 100%;
		margin-bottom: 50px;
		margin-top: 40px;
		/*position: fixed;
		left: 0;
		top: 40px;*/
	}
	.iconfont{
		font-size: 25px;
	}
	.footer {
		width: 100%;
		height: 50px;
		margin-top: 30px;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #f4f4f4;
		display: flex;
		justify-content: space-around;
		z-index: 2;
	}
	
	.footer .iconfont {
		line-height: 50px;
	}
	
	#app {
		color: #2c3e50;
		/*margin-top: -100px;*/
		/*max-width: 600px;*/
		font-family: Source Sans Pro, Helvetica, sans-serif;
		height: 100%;
		position: relative;
	}
	
	#app a {
		color: #42b983;
		text-decoration: none;
	}
</style>