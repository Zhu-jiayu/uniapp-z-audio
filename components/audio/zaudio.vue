<template>
	<view class="imt-audio" :class="[`${theme}`]">
		<view class="top"  >
			<view class="audio-control-wrapper">
				<image :src="info.coverImgUrl" mode="aspectFill" class="cover" :class="{ on: !paused }" ></image>
				<image src="./static/playbtn.png" alt="" @click="operation" class="play" v-if="paused" ></image>
				<image src="./static/pausebtn.png" alt="" @click="operation" class="play" v-else ></image>
			</view>

			<view>
				<view class="title">{{ info.title }}</view>
				<view class="singer">{{ info.singer }}</view>
			</view>
		</view>
		<view class="audio-wrapper">
			<image src="./static/prev.png" class="prevbtn" @click="step(0)" mode="widthFix" v-if="stepShow"></image>
			<slider class="audio-slider" :activeColor="themeColor" block-size="16" :value="current_value" :max="duration_value" @changing="changing" @change="change"></slider>
			<view class="audio-number">{{ current }}/{{ duration }}</view>
			<image src="./static/next.png" class="nextbtn" @click="step(1)" mode="widthFix" v-if="stepShow"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			current: '00:00', //当前播放时间
			duration: '00:00', //总时长
			current_value: 0, //slider当前进度
			duration_value: 100, //slider总长度
			paused: true, //是否处于暂停状态

			default_cover: 'https://zijing-sz.oss-cn-shenzhen.aliyuncs.com/api_upload/2019-11-06_15_26_32_735247.png', //默认海报
			hassrc: '' //////////////正在播放的音频
		};
	},

	props: {
		info: Object /*************
							info对象 {
								src, 音频地址
								title, 标题
								singer, 作者
								coverImgUrl  海报
							}
						*/,
		theme: {
			type: String, // 主题 'music' or 'fm'
			default: 'fm'
		},
		themeColor: {
			type: String, 
			default: '#42b983'
		},
		stepShow: {
			//是否显示快进后退按钮
			type: Boolean,
			default: true
		}
	},

	created() {
		const { duration, current, duration_value, current_value, src } = this.$store.state.playinfo;
		this.hassrc = src;
		console.log(this.info, 1, this.hassrc);

		//对比 新的音频与旧音频 地址  从而渲染 对应进度条

		if (this.info.src == this.hassrc) {
			this.current = current;
			this.duration_value = duration_value;
			this.duration = duration;

			this.current_value = current_value;
			this.paused = this.$store.state.paused;
		} else {
		}

		this.$audio.onCanplay(() => {});
		this.$audio.onPlay(() => {
			console.log('++++++++++++++++++', this.$audio.currentTime);
			this.paused = false;
			this.saveplay('src', this.info.src);
			this.$store.commit('setpause', false); //记录音频正常停止 false
			this.$store.commit('set_n_pause', false); //标记音频异常中断 为false 用于电话来电中断音频的判断

			console.log('onplay');
			this.duration = this.format(this.$audio.duration);
			this.duration_value = this.$audio.duration;
			this.saveplay('duration', this.duration);
			this.saveplay('duration_value', this.duration_value);
		});

		this.$audio.onPause(() => {
			this.paused = true;
			this.$store.commit('setpause', true); //记录音频正常停止 true
		});

		this.$audio.onStop(() => {
			this.paused = true;
			this.$store.commit('setpause', true); //记录音频正常停止 true
		});
		this.$audio.onEnded(() => {
			this.paused = true;
			this.$store.commit('setpause', true); //记录音频正常停止 true
			this.$audio.startTime = 0;
			this.current = this.format('0');
			this.current_value = '0';
			this.saveplay('current', this.current);
			this.saveplay('current_value', this.current_value);
		});
		this.$audio.onTimeUpdate(() => {
			console.log('-->', this.info.src == this.$store.state.playinfo.src);
			if (this.info.src == this.$store.state.playinfo.src) {
				this.current = this.format(this.$audio.currentTime);
				this.current_value = this.$audio.currentTime;
				this.saveplay('current', this.current);
				this.saveplay('current_value', this.$audio.currentTime);

				console.log(123123);
				this.duration = this.format(this.$audio.duration);
				this.duration_value = this.$audio.duration;

				this.saveplay('duration', this.duration);
				this.saveplay('duration_value', this.duration_value);
			}
		});
		this.$audio.onError(() => {
			this.paused = true;
			this.$store.commit('setpause', true);
			this.$api.msg('音频播放错误');

			this.$store.commit('setaudio', {
				src: '',
				title: '',
				singer: '',
				coverImgUrl: ''
			});
			this.$store.commit('setplay', {
				current: 0,
				current_value: 0,
				duration: 0,
				duration_value: 0
			});
		});
	},

	methods: {
		saveplay(type, e) {
			//记录播放信息
			this.$store.commit('setplay', { [type]: e });
		},
		timeupdate() {
			const { current, current_value } = this.$store.state.playinfo;
			this.current = current;
			this.current_value = current_value;
		},
		changing(event) {
			this.current_value = event.detail.value;
			this.current = this.format(event.detail.value);
		},

		format(num) {
			try {
				return (
					'0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)
				);
			} catch (e) {
				return (
					'0'.repeat(3 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)
				);
			}
		},

		operation() {
			if (this.hassrc != this.info.src) {
				if (this.paused) {
					const { src, title, singer, poster } = this.info;
					this.$store.commit('setaudio', {
						src: src,
						title: title,
						singer: singer,
						coverImgUrl: poster || this.default_cover
					});
					this.$audio.src = src;
					this.$audio.title = title;
					this.$audio.singer = singer;
					this.$audio.coverImgUrl = poster || this.default_cover;
					this.$audio.play();

					this.$audio.startTime = 0;
					this.$audio.seek(0);

					this.hassrc = src;
					this.paused = false;
				} else {
					this.$audio.pause();
					this.paused = true;
					this.$store.commit('set_n_pause', true); //标记音频异常中断
				}
			} else {
				if (this.paused) {
					const { src, title, singer, coverImgUrl } = this.$store.state.audio;
					this.$audio.src = src;
					this.$audio.title = title;
					this.$audio.singer = singer;
					this.$audio.coverImgUrl = coverImgUrl || this.default_cover;
					this.$audio.play();

					this.$audio.startTime = parseFloat(this.$store.state.playinfo.current_value);
					this.$audio.seek(parseFloat(this.$store.state.playinfo.current_value));
					this.$store.commit('setaudio', {
						src: src,
						title: title,
						singer: singer,
						coverImgUrl: coverImgUrl || this.default_cover
					});
					this.hassrc = src;
					this.paused = false;
				} else {
					this.$audio.pause();
					this.paused = true;
					this.$store.commit('set_n_pause', true);
				}
			}
		},
		//完成拖动事件
		change(e) {
			this.$audio.seek(e.detail.value);
		},
		step(type) {
			var pos = !type ? this.current_value - 15 : this.current_value + 15;
			this.$audio.seek(pos);
		}
	}
};
</script>

<style scoped lang="scss">
.imt-audio.music {
	padding: 0 30upx 30upx;
	background: #fff;
	.top {
		& > view:nth-child(2) {
			.title {
				font-weight: bold;
				font-size: 34rpx;
				margin-top: 24rpx;
				text-align: center;
			}
			.singer {
				color: #999;
				font-size: 26rpx;
				margin-top: 10rpx;
				text-align: center;
				margin-bottom: 18rpx;
			}
		}
	}
	.audio-wrapper {
		display: flex;
		align-items: center;
	}

	.audio-number {
		font-size: 24upx;
		line-height: 1;
		color: #333;
	}

	.audio-slider {
		flex: 1;
		margin: 0 30rpx 0 10rpx;
	}

	.audio-control-wrapper {
		margin: 100rpx auto;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		
	}
	.cover {
		width: 280rpx;
		height: 280rpx;
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.13);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		border:2px solid #fff
	}
	.cover.on {
		-webkit-animation: 10s rowup linear infinite normal;
		animation: 10s rowup linear infinite normal;
	}

	.play {
		width: 130rpx;
		height: 130rpx;
		z-index: 99;
		background: rgba(0,0,0,.4);
		border-radius:50%
	}

	.prevbtn {
		width: 48rpx;
		height: 48rpx;
		margin-right: 40rpx;
	}
	.nextbtn {
		width: 48rpx;
		height: 48rpx;
		margin-left: 40rpx;
	}
}

.imt-audio.fm {
	background: #fff;
	border: 1px solid #cecece;
	width: 90%;
	margin: 0 auto;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	.top {
		background: #f5f5f5;
		display: flex;
		align-items: center;
		& > view:nth-child(2) {
			flex: 1;
			margin-left: 30rpx;
			.title {
				font-weight: bold;
				font-size: 34rpx;
				margin-top: 24rpx;
				text-align: left;
			}
			.singer {
				color: #999;
				font-size: 26rpx;
				margin-top: 10rpx;
				text-align: left;
				margin-bottom: 18rpx;
			}
		}
	}
	.audio-wrapper {
		display: flex;
		align-items: center;
		padding: 30rpx 20rpx;
	}

	.audio-number {
		font-size: 24upx;
		line-height: 1;
		color: #333;
	}

	.audio-slider {
		flex: 1;
		margin: 0 30rpx 0 10rpx;
	}

	.audio-control-wrapper {
		margin: 60rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: 30rpx 20rpx;
		
	}
	.cover {
		width: 180rpx;
		height: 180rpx;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		border:2px solid #fff
	}
	.cover.on {
		-webkit-animation: 10s rowup linear infinite normal;
		animation: 10s rowup linear infinite normal;
	}

	.play {
		width: 80rpx;
		height: 80rpx;
		z-index: 99;
		background: rgba(0,0,0,.4);
		border-radius:50%
	}

	.prevbtn {
		width: 48rpx;
		height: 48rpx;
		margin-right: 40rpx;
	}
	.nextbtn {
		width: 48rpx;
		height: 48rpx;
		margin-left: 40rpx;
	}
}

	@keyframes rowup {
		0% {
			-webkit-transform: translate(-50%, -50%) rotate(0deg);
			transform-origin: center center;
		}

		100% {
			-webkit-transform: translate(-50%, -50%) rotate(360deg);
			transform-origin: center center;
		}
	}
</style>
