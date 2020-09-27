<template>
	<view>
		<button @click="go(k)" v-for="(i, k) in audiolist" :key="k">{{ i.title }}</button>

		<view class="bottom"><zaudio theme="theme3" :autoplay="false" :continue="false"></zaudio></view>
	</view>
</template>

<script>
import zaudio from '@/components/audio/zaudio.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
	data() {
		return {};
	},
	components: { zaudio },
	computed: {
		...mapGetters(['audiolist', 'renderIndex'])
	},

	mounted() {
		//设置音频列表
		this.set_audiolist([
			{
				src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',
				title: '好运来',
				singer: '作者1111',
				coverImgUrl: '/static/logo.png'
			},
			{
				src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2014eMay/29L/29dance/31.mp3',
				title: 'remix版好运来',
				singer: '作者22222',
				coverImgUrl: '/static/logo.png'
			}
		]);

		
	},
	onShow(){
		//更新 当前的渲染的信息
		this.set_renderIndex(this.renderIndex);
	},
	methods: {
		...mapMutations(['set_renderIndex', 'set_audiolist']),
		go(key) {
			// 更新 渲染的音频信息
			this.set_renderIndex(key);
			
			uni.navigateTo({
				url: '/pages/detail/index'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.bottom {
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
}
</style>
