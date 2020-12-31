<template>
	<view class="content">
		<zaudio :theme="themelist[key].val" :autoplay="true" :continue="true"></zaudio>
		<button @click="changeTheme(k)" class="bottom" type="primary" size="mini" v-for="(i, k) in themelist" :key="k">{{ i.name }}</button>
	</view>
</template>

<script>
import zaudio from '@/components/z-audio/z-audio';
// import zaudio from 'uniapp-zaudio/components/z-audio/z-audio.vue'
export default {
	data() {
		return {
			key: 2,
			themelist: [
				{
					name:'样式1',val:'theme1',
				},
				{
					name:'样式2',val:'theme2',
				},
				{
					name:'样式3',val:'theme3',
				}
			]
		};
	},
	components: { zaudio: zaudio },
	onLoad(query) {
		let { key } = query; 
		//通过索引去渲染需要播放的音频, 方法1:
		this.$zaudio.setRender(key);

		// 指定列表中具体信息,去渲染需要播放的音频, 方法2:
		// this.$zaudio.setRender(this.audiolist[key]);
		
	},
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
	margin: 20rpx;
}
</style>
