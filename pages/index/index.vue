<template>
	<view class="content">
		<zaudio theme="theme1"></zaudio>

		<view class="listbox">
			<view style="padding:10px">音频列表:</view>
			<view v-for="(i, k) in audiolist" :key="k" class="list">
				{{ i.title }}
				<button size="mini" @click="go(k)">查看详情</button>
				<button size="mini" @click="play(k)">{{ !paused && i.src === playinfo.src ? '暂停' : '播放' }}</button>
			</view>
		</view>

		<div class="demo">
			<button @click="reset" size="mini">覆盖音频</button>
			<button @click="add" size="mini">添加音频</button>
			<button @click="willStop" size="mini">注册5秒后暂停事件</button>
			<button @click="removeStop" size="mini">卸载5秒后暂停事件</button>
			<button @click="logPlaying('log')" size="mini">注册播放时打印事件</button>
			<button @click="offPlaying('log')" size="mini">卸载播放时打印事件</button>
			<button @click="stepPlay(20)" size="mini">快进20s</button>
			<button @click="stepPlay(-20)" size="mini">快退20s</button>
		</div>
	</view>
</template>

<script>
import zaudio from '@/components/z-audio/z-audio';
// import zaudio from 'uniapp-zaudio/components/z-audio/z-audio.vue'
export default {
	data() {
		return {
			audiolist: this.$zaudio.audiolist, //当前音频列表
			playIndex: this.$zaudio.playIndex, //当前播放的索引
			paused: this.$zaudio.paused, //当前是否暂停
			playinfo: this.$zaudio.playinfo //当前播放的信息
		};
	},
	components: { zaudio: zaudio },

	onLoad() {
		
		this.getListData()
	},
	onShow() {
		//进入其他页面, zaudio组件渲染了其他数据
		//每次页面onshow时同步zaudio组件当前的播放状态
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
			this.$zaudio.on('playing', 'recharge', info => {
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
			})

		},

		removeStop() {
			this.$zaudio.off('playing', 'recharge')
			this.$zaudio.operate();
		},

		logPlaying(action){
			// 一个回调事件可以注册多次业务, action用于区分相同回调事件的不同业务
			//例: playing回调时注册 打印事件
			this.$zaudio.on('playing', action, info => {
				console.log('播放中----' + action, info);
			});
		},
		offPlaying(action) {
			//注意解除事件action必须与注册事件的action相同
			this.$zaudio.off('playing', action);
		},
		stepPlay(val){
			this.$zaudio.stepPlay(val)
		},
		
		//--------------获取音频列表的播放状态和列表数据
		getListData(){
			let action = 'getAudioListState';
			
			//设置音频回调
			this.$zaudio.on('setAudio', action, list => {
				this.audiolist = [...list];
			});
			//更新音频回调
			this.$zaudio.on('updateAudio', action, list => {
				this.audiolist = [...list];
			});
			//开始播放回调
			this.$zaudio.on('canPlay', action, data => {
				this.playinfo = data;
				this.renderIsPlay = this.$zaudio.renderIsPlay;
				this.audio = this.$zaudio.renderinfo;
				this.paused = this.$zaudio.paused;
			});
			//播放中回调
			this.$zaudio.on('playing', action, data => {
				this.playinfo = data;
			});
			//播放暂停回调
			this.$zaudio.on('pause', action, () => {
				this.paused = this.$zaudio.paused;
			});
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
	margin-top: 20px;
	button {
		margin: 5px;
	}
}
</style>
