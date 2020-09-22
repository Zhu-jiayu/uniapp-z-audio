<template>
	<view class="content">
		<zaudio :info="audiolist[k]" v-if="k" :theme="theme"></zaudio>
		<button @click="changeTheme" class="bottom" type="primary">替换主题</button>
	</view>
</template>

<script>
import zaudio from '@/components/audio/zaudio';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			theme: 'theme1',
			k: ''
		};
	},
	components: {
		zaudio
	},
	computed: {
		...mapGetters(['audiolist'])
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
