<template>
	<view class="content">
		<zaudio :list="audiolist"  :theme="theme" :autoplay='false'></zaudio>
		<button @click="changeTheme" class="bottom" type="primary">替换主题</button>
	</view>
</template>

<script>
import zaudio from '@/components/audio/zaudio.vue';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			theme: 'theme1', //主题
			
		};
	},
	components:{zaudio},
	computed: {
		...mapGetters(['audiolist'])  //音频列表
	},
	onLoad(o) {
		this.k = o.k;
	},
	methods: {
		changeTheme() {
			this.theme = this.theme == 'theme2' ? 'theme1' : 'theme2';
		}
	}
};
</script>
<style scoped>
	body{
		height:100%
	}
.bottom {
	margin-top: 40px;
}
</style>
