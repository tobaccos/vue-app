<template>
	<div id="">
		<router-link v-for="data in datas" :to="data.route">
			
			<mt-cell  :title="data.title"  is-link >	</mt-cell>
		</router-link>
	
	</div>
</template>

<script>
	import datas from "../../static/json/data.json"
	export default {
		name: 'data',
		data() {
			return {
				datas:datas.datas
			}
		}
	}
</script>

<style scoped>


	

</style>