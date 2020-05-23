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
					coverImgUrl: "http://dev.shequtaoapp.com/uploads/4ae4fafc-a84b-4c27-a55e-30aa363a83be_1589449130932.jpg"
				},
				{
					src: 'http://mouyizhan.com/1.mp3',
					title: '第2首',
					singer: '作者作者作者作者',
					coverImgUrl: "http://dev.shequtaoapp.com/uploads/bad58785-edb2-4fec-9265-a01c9d2c56cb_1588561556140.jpg"
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
