<template>
	<view class="content">
		<zaudio :theme="themelist[key]" :autoplay="true" :continue="true"></zaudio>
		<button @click="changeTheme(k)" class="bottom" type="primary" size="mini" v-for="(i, k) in themelist" :key="k">{{ i }}</button>
	</view>
</template>

<script>
import zaudio from '@/zaudio/zaudio.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
	data() {
		return {
			key: 0,
			themelist: ['theme1', 'theme2', 'theme3']
		};
	},
	components: { zaudio },
	onLoad(query) {
		
		//渲染指定的音频, 自动判断是否是当前播放的音频,并同步状态
		
		let { key } = query;
		//通过索引去渲染需要播放的音频, 方法1:
		this.set_renderIndex(key);

		// 指定列表中具体信息,去渲染需要播放的音频, 方法2:
		// this.set_audio(this.audiolist[key]);
	},
	methods: {
		...mapMutations(['set_renderIndex', 'set_audiolist', 'set_audio']),
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
	margin: 20rpx;
}
</style>
