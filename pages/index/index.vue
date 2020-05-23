<template>
	<view>
		<button @click="go(0)">第1首</button>
		<button @click="go(1)">第2首</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		methods: {
			go(id){
				uni.navigateTo({
					url: '/pages/detail/index?k='+id
				})
			}
		}
	}
</script>

<style>

</style>
