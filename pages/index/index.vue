<template>
	<view>
		<button @click="go(k)" v-for="(i, k) in audiolist" :key="k">{{ i.title }}</button>
		<button @click="updateAudioList" class="bottom" type="primary">更新音频列表</button>
	</view>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	data() {
		return {
		
		};
	},
	computed: {
		...mapGetters(['audiolist', 'audiolist2'])
	},
	methods: {
		go(id) {
			uni.navigateTo({
				url: '/pages/detail/index?k=' + id
			});
		},
		update() {
			this.audiolist = this.audiolist2;
		},
		...mapMutations(['updateAudioList'])
	}
};
</script>

<style scoped>
.bottom {
	position: absolute;
	width: 100%;
	bottom: 0;
}
</style>
