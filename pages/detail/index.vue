<template>
	<view class="content">
		<zaudio :theme="themelist[key]" :autoplay="true" :continue="true"></zaudio>
		<button @click="changeTheme(k)" class="bottom" type="primary" size="mini" v-for="(i, k) in themelist" :key="k">{{ i }}</button>
	</view>
</template>

<script>
import zaudio from '@/zaudio/zaudio.vue';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			key: 0,
			themelist: ['theme1', 'theme2', 'theme3']
		};
	},
	components: { zaudio },

	methods: {
		changeTheme(k) {
			this.key = k;
		}
	}
};
</script>
<style scoped>
body {
	height: 100%;
}
.bottom {
	margin: 20rpx
}
</style>
