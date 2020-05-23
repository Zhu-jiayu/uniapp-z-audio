<template>
	<view class="content"><zaudio :info="audiolist[k]" v-if="k"></zaudio></view>
</template>

<script>
import zaudio from '@/components/audio/zaudio';
export default {
	data() {
		return {
			audiolist: [
				{
					src: 'http://mouyizhan.com/2.mp3',
					title: '第一首',
					singer: '作者2222',
					coverImgUrl: "/static/logo.png"
				},
				{
					src: 'http://mouyizhan.com/1.mp3',
					title: '第2首',
					singer: '作者作者作者作者',
					coverImgUrl: "/static/logo.png"
				}
			],
			k: ''
		};
	},
	components: {
		zaudio
	},
	onLoad(o) {
		console.log(o)
		this.k = o.k;
	}
};
</script>
