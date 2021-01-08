<template>
	<view class="content">
		<zaudio :theme="themelist[key].val" :autoplay="true" :continue="true"></zaudio>
		<button @click="changeTheme(k)" class="bottom" type="primary" size="mini" v-for="(i, k) in themelist" :key="k">{{ i.name }}</button>
	</view>
</template>

<script>
import zaudio from '@/components/uniapp-zaudio/zaudio';
// import zaudio from 'uniapp-zaudio/zaudio'
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
		
		//playing回调, 注册`event-a`和`event-b`两个打印事件
		this.$zaudio.on('playing', 'event-a', data => {
			console.log(data,'event-a')
		});
		this.$zaudio.on('playing', 'event-b', data => {
			console.log(data,'event-b')
		});
		

	},
	destroyed(){
		//页面卸载时卸载业务, 提高页面性能
		this.$zaudio.off('playing', 'event-a')
		this.$zaudio.off('playing', 'event-b')
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
