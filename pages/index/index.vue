<template>
	<view class="content">
		<zaudio theme="theme3" :autoplay="false" :continue="true" ref="zaudio"></zaudio>

		<view class="listbox">
			音频:
			<view v-for="(i, k) in audiolist" :key="k" class="list">
				{{ i.title }}
				<button size="mini" @click="go(k)">查看详情</button>
				<button size="mini" @click="play(k)">{{ i.src === playinfo.src && !paused ? '暂停' : '播放' }}</button>
			</view>
		</view>

		<div>
			<button @click="reset" size="mini">覆盖音频</button>
			<button @click="update" size="mini">添加音频</button>
		</div>
	</view>
</template>

<script>
import zaudio from '@/zaudio/zaudio.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
	data() {
		return {
			songlist: [
				{
					src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2016aJan/18X/18d_DeH/01.mp3',
					title: '恭喜发财',
					singer: '刘德华',
					coverImgUrl: 'https://gitee.com/jingangtui/static/raw/master/src/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
				},
				{
					src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',
					title: '好运来',
					singer: '作者1111',
					coverImgUrl: 'https://gitee.com/jingangtui/static/raw/master/src/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
				}
			],

			songlist2: [
				{
					src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2015kNov/25X/25m_XiaoQ/03.mp3',
					title: '好运来',
					singer: '作者1111',
					coverImgUrl: 'https://gitee.com/jingangtui/static/raw/master/src/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
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
		this.reset();
	},
	onShow() {
		//渲染当前列表中歌曲的播放的进度
		//必须放在onShow中
		this.set_renderIndex(this.playIndex);
	},
	methods: {
		...mapMutations(['set_renderIndex', 'set_audiolist', 'set_audio']),
 
		play(key) {
			//通过索引去渲染需要播放的音频, 方法1:
			this.set_renderIndex(key);

			// 指定列表中具体信息,去渲染需要播放的音频 方法2:
			// this.set_audio(this.audiolist[key]);

			//播放或暂停, 会自动取反判断
			this.$refs.zaudio.operate();
		},
	
		go(key) {
			uni.navigateTo({
				url: '/pages/detail/index?key='+key,
			});
		},

		//覆盖音频
		reset() {
			this.set_audiolist({
				data: this.songlist,
				status: false
			});
		},

		//添加音频
		update() {
			this.set_audiolist({
				data: this.songlist2,
				status: true
			});
		}
	}
};
</script>

<style scoped lang="scss">
.listbox {
	margin: 20px 10px 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	.list {
		line-height: 40px;
		border-top: 1px solid #ccc;
		padding: 0 10px;
		&:last-child {
			border-bottom: 1px solid #ccc;
		}
		button {
			float: right;
			margin-top: 5px;
			margin-left: 5px;
		}
	}
}
</style>
