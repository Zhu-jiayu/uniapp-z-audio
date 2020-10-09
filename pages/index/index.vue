<template>
	<view>
		<zaudio theme="theme3" :autoplay="false" :continue="true" ref="zaudio"></zaudio>

		<view v-for="(i, k) in audiolist" :key="k" class="list">
			{{ i.title }}
			<button size="mini" @click="go(k)">查看详情</button>
			<button size="mini" @click="play(k)">{{ i.src === playinfo.src && !paused ? '暂停' : '播放' }}</button>
		</view>
	</view>
</template>

<script>
import zaudio from '@/components/audio/zaudio.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
	data() {
		return {
			songlist: [
				{
					src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',
					title: '好运来',
					singer: '作者1111',
					coverImgUrl: '/static/logo.png'
				},
				{
					src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3',
					title: '恭喜发财',
					singer: '刘德华',
					coverImgUrl: '/static/logo.png'
				}
			]
		};
	},
	components: { zaudio },
	computed: {
		...mapGetters(['audiolist', 'playIndex', 'playinfo', 'paused'])
	},

	onLoad() {
		//设置音频列表
		this.set_audiolist({
			data: this.songlist,
			status: false
		});
	},
	onShow() {
		//渲染当前列表中歌曲的播放的进度
		//必须放在onShow中
		this.set_renderIndex(this.playIndex);
	},
	methods: {
		...mapMutations(['set_renderIndex', 'set_audiolist', 'set_audio']),
		// 指定播放
		play(key) {
			//渲染指定的列表索引, 方法1: 
			// this.set_renderIndex(key);
			
			// 指定列表中具体信息, 方法2:
			this.set_audio(this.audiolist[key]);
			
			// 播放音频
			this.$refs.zaudio.operation(true);
		},
		// 查看全局播放信息
		go(key) {
			//渲染指定的列表索引, 方法1:
			// this.set_renderIndex(key);
			// 指定列表中具体信息, 方法2:
			this.set_audio(this.audiolist[key]);
			
			uni.navigateTo({
				url: '/pages/detail/index'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.list {
	line-height: 40px;
	border: 1px solid #999;

	&:nth-child(2) {
		margin-top: 40px;
	}
	button {
		float: right;
	}
}
</style>
