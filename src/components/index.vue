<template>
	<div class="index">

		<div id="" style="height: 300px;">
			<mt-swipe :auto="4000">
				<mt-swipe-item ><img src="../assets/logo1.png"/></mt-swipe-item>
				<mt-swipe-item ><img src="../assets/logo1.png"/></mt-swipe-item>
				<mt-swipe-item ><img src="../assets/logo1.png"/></mt-swipe-item>
			
			</mt-swipe>
		</div>
	

	</div>
</template>

<script>

	export default {
		name: 'index',
		data() {
			return {
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	.index {
		
	}
	image {
  width: 40px;
  height: 300px;
  margin: auto;
}
	
	a {
		color: #42b983;
	}
</style>