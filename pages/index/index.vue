<template>
	<view class="content">
		<zaudio theme="theme3"></zaudio>

		<view class="listbox">
			<view style="padding:10px">音频列表:</view>
			<view v-for="(i, k) in audiolist" :key="k" class="list">
				{{ i.title }}
				<button size="mini" @click="go(k)">查看详情</button>
				<button size="mini" @click="play(k)">{{ i.src === playinfo.src && !paused ? '暂停' : '播放' }}</button>
			</view>
		</view>

		<div class="demo">
			<button @click="reset" size="mini" type="primary">音频-覆盖</button>
			<button @click="add" size="mini" type="primary">音频-添加</button>
			<button @click="willStop" size="mini" type="primary">限制播放5s后暂停</button>
			<button @click="removeStop" size="mini" type="primary">去除播放限制,并继续播放</button>
		</div>
	</view>
</template>

<script>
import zaudio from '@/components/z-audio/z-audio';
// import {zaudio} from 'uniapp-zaudio'
export default {
	data() {
		return {};
	},
	components: { zaudio: zaudio },
	computed: {
		paused() {
			return this.$zaudio.paused; //当前是否暂停
		},
		playIndex() {
			return this.$zaudio.playIndex; //当前播放的索引
		},
		audiolist() {
			return this.$zaudio.audiolist; //当前音频列表
		},
		playinfo() {
			return this.$zaudio.playinfo; //当前播放的信息
		}
	},
	onLoad() {},
	onShow() {
		//进入其他页面, zaudio渲染了其他数据
		//每次页面onshow时同步当前的播放状态
		this.$zaudio.syncRender();
	},
	methods: {
		play(key) {
			//播放或暂停
			this.$zaudio.operate(key);
		},

		go(key) {
			uni.navigateTo({
				url: '/pages/detail/index?key=' + key
			});
		},
		reset() {
			let data = [
				{
					src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2020/08/21/21a_zj/01.mp3',
					title: '二人转',
					singer: '作者333',
					coverImgUrl: 'https://img.1ting.com/images/special/374/s300_2f06b17427718e01e54be1cfe462f3e0.jpg'
				}
			];
			this.$zaudio.setAudio(data);
		},
		add() {
			let data = [
				{
					src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/jn/12.jlhg/8.zhg/2.mp3',
					title: '天边',
					singer: '作者222',
					coverImgUrl: 'https://img.1ting.com/images/special/377/s300_4631dc844ab6429b6bc6fe4ccdc6ed6f.jpg'
				}
			];
			this.$zaudio.updateAudio(data);
		},

		willStop() {
			this.$zaudio.onPlaying = info => {
				if (info.current_value > 5) {
					this.$zaudio.stop();

					uni.showModal({
						title: '打钱后才可以听',
						content: '打钱后才可以听',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			};
		},

		removeStop() {
			this.$zaudio.onPlaying = null;
			this.$zaudio.operate();
		}
	}
};
</script>

<style scoped lang="scss">
.listbox {
	margin: 20px 10px 10px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	.list {
		line-height: 40px;
		border-top: 1px solid #ccc;
		padding: 0 10px;

		button {
			float: right;
			margin-top: 5px;
			margin-left: 5px;
		}
	}
}

.demo {
	margin-top: 30px;
	button {
		margin: 5px;
	}
}
</style>
