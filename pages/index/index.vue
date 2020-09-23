<template>
	<view>
		<button @click="go(k)" v-for="(i, k) in audiolist" :key="k">{{ i.title }}</button>
		
		<view class='bottom'>
			<zaudio :list="audiolist" theme="theme3" :autoplay="false" :continue="true"></zaudio>
		</view>
		
	</view>
</template>

<script>
import zaudio from '@/components/audio/zaudio.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
	data() {
		return {};
	},
	components:{zaudio},
	computed: {
		...mapGetters(['audiolist', 'playinfo', 'paused'])
	},
	methods: {
		...mapMutations(['set_playIndex']),
		go(key) {
			// 切换歌曲播放索引
			this.set_playIndex(key);
			uni.navigateTo({
				url: '/pages/detail/index'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.bottom{
	position: fixed;
	width: 100%;
	bottom:0;
	left:0
}
</style>
