<template>
	<div class="me">

		<div id="" style="height: 100px;background: yellow;">
			<mt-swipe :auto="4000">
				<mt-swipe-item><img src="../assets/2code.png"/></mt-swipe-item>
				<mt-swipe-item>2</mt-swipe-item>
				<mt-swipe-item>3</mt-swipe-item>
			</mt-swipe>
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
	height: 100%;
	margin: 0 auto;
}
</style>