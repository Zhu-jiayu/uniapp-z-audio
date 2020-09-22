<template>
	<view>
		<button @click="go(k)" v-for="(i, k) in audiolist" :key="k">{{ i.title }}</button>

		<view class="onplaybox">
			<image :src="playinfo.coverImgUrl" alt="" v-if="playinfo.coverImgUrl" :class="{ on: !paused }"></image>
			{{!paused?'正在播放':'暂停'}}

			{{ playinfo.title }} {{ playinfo.current ? playinfo.current : '' }}
		</view>
	</view>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	data() {
		return {};
	},
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
.bottom {
	position: absolute;
	width: 100%;
	bottom: 0;
}
.onplaybox {
	display: flex;
	align-items: center;
	position: fixed;
	top: 180px;
	right: 0;
	background: rgba(0, 0, 0, 0.5);
	color: #fff;
	font-size: 14px;
	border-radius: 20px 0 0 20px;
	padding: 0 10px;
	height: 40px;
	line-height: 40px;
	image {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-right: 10px;
		&.on {
			-webkit-animation: 10s rowup linear infinite normal;
			animation: 10s rowup linear infinite normal;
			animation-fill-mode: forwards;
			-webkit-animation-fill-mode: forwards;
		}
	}
	@keyframes rowup {
		0% {
			-webkit-transform: rotate(0deg);
			transform-origin: center center;
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform-origin: center center;
		}
	}
}
</style>
