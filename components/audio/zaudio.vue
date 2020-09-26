<template>
	<view class="imt-audio" :class="[`${theme}`]">
		<template v-if="theme == 'theme3'">
			<slider class="audio-slider" :activeColor="themeColor" block-size="0" :value="current_value" :max="duration_value" @changing="changing" @change="change"></slider>

			<view class="top">
				<view class="audio-control-wrapper">
					<image :src="info.coverImgUrl" mode="aspectFit" class="cover" :class="{ on: !paused }"></image>

					<image src="/static/playbtn.png" alt="" @click="operation" class="play" v-if="paused"></image>
					<image src="/static/pausebtn.png" alt="" @click="operation" class="play" v-else></image>
				</view>
			</view>
			<view class="audio-wrapper">
				<view class="titlebox">
					<view class="title">{{ info.title }}</view>
					<view class="singer">{{ info.singer }}</view>
				</view>

				<view class="slidebox">
					<view>{{ current }}/ {{ duration }}</view>
					<view>
						<text @click="changeplay(-1)">上一首</text><text @click="changeplay(1)">下一首</text>
					</view>
				</view>
			
			</view>
		</template>

		<template v-if="theme == 'theme2'">
			<view class="top">
				<view class="audio-control-wrapper">
					<image :src="info.coverImgUrl" mode="aspectFit" class="cover" :class="{ on: !paused }"></image>
					<template>
						<image src="/static/playbtn.png" alt="" @click="operation" class="play" v-if="paused"></image>
						<image src="/static/pausebtn.png" alt="" @click="operation" class="play" v-else></image>
					</template>
				</view>

				<view>
					<view class="title">{{ info.title }}</view>
					<view class="singer">{{ info.singer }}</view>
				</view>
			</view>
			<view class="audio-wrapper">
				<view class="audio-number">{{ current }}</view>
				<slider class="audio-slider" :activeColor="themeColor" block-size="16" :value="current_value" :max="duration_value" @changing="changing" @change="change"></slider>
				<view class="audio-number">{{ duration }}</view>
			</view>
		</template>

		<template v-if="theme == 'theme1'">
			<view class="top">
				<view class="audio-control-wrapper"><image :src="info.coverImgUrl" mode="aspectFit" class="cover" :class="{ on: !paused }"></image></view>

				<view>
					<view class="title">{{ info.title }}</view>
					<view class="singer">{{ info.singer }}</view>
				</view>
			</view>
			<view class="audio-wrapper">
				<view class="audio-number">{{ current }}</view>
				<slider class="audio-slider" :activeColor="themeColor" block-size="16" :value="current_value" :max="duration_value" @changing="changing" @change="change"></slider>
				<view class="audio-number">{{ duration }}</view>
			</view>

			<view class="audio-button-box">
				<!-- 块退15s -->
				<image src="/static/prev.png" class="prevbtn" @click="step(0)" mode="widthFix" v-if="stepShow"></image>
				<!-- 上一首 -->
				<image src="/static/go.png" class="prevplay" @click="changeplay(-1)" mode="widthFix"></image>
				<!-- 播放 -->
				<image src="/static/playbtn2.png" alt="" @click="operation" class="play" v-if="paused"></image>
				<!-- 暂停 -->
				<image src="/static/pausebtn2.png" alt="" @click="operation" class="pause" v-else></image>
				<!-- 下一首 -->
				<image src="/static/go.png" class="nextplay" @click="changeplay(1)" mode="widthFix"></image>
				<!-- 快进15s -->
				<image src="/static/next.png" class="nextbtn" @click="step(1)" mode="widthFix" v-if="stepShow"></image>
			</view>
		</template>
	</view>
</template>

<script>
import { format } from './play.js';
export default {
	data() {
		return {
			current: '00:00', //当前播放时间
			duration: '00:00', //总时长
			current_value: 0, //slider当前进度
			duration_value: 100, //slider总长度
			paused: true, //是否处于暂停状态

			default_cover: '/static/logo.png', //默认海报
			hassrc: '', //--------------------当前组件正在播放的音频

			info: {
				src: '',
				title: '',
				singer: '',
				coverImgUrl: ''
			}
		};
	},

	props: {
		//自动续播下一首
		continue: {
			type: Boolean,
			default: true
		},
		//自动播放
		autoplay: {
			type: Boolean,
			default: false
		},
		list: Array, //音频列表
		theme: {
			type: String, // 主题 'theme1' or 'theme2'
			default: 'theme1'
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
	computed: {
		format() {
			return num => format(num);
		}
	},
	watch: {
		'$store.state.playinfo.src':{
			deep: true,
			immediate: true,
			handler(nvalue){
				//音频变更时,更新渲染数据
				this.hassrc = nvalue; 
				
				this.info = this.list[this.$store.state.playIndex];
				
			}
		}
	},
	created() {
		const { duration, current, duration_value, current_value, src } = this.$store.state.playinfo;


		//对比 新的音频与旧音频 地址  从而渲染 对应进度条

		if (this.info.src == this.hassrc) {
			this.current = current;
			this.duration_value = duration_value;
			this.duration = duration;

			this.current_value = current_value;
			this.paused = this.$store.state.paused;
		} else {
			//自动播放
			if (this.autoplay) {
				this.operation();
			}
		}

		this.$audio.onCanplay(() => {});
		this.$audio.onPlay(() => {
			// console.log('+++++++onplay+++++++++++', this.$audio.currentTime);
			this.paused = false;
			this.saveplay('src', this.info.src);
			this.saveplay('title', this.info.title);
			this.saveplay('singer', this.info.singer);
			this.saveplay('coverImgUrl', this.info.coverImgUrl);
			this.$store.commit('setpause', false); //记录音频正常停止 false
			this.$store.commit('set_n_pause', false); //标记音频异常中断 为false 用于电话来电中断音频的判断

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

			//续播
			if (this.continue) {
				this.changeplay(1);
			}
		});
		this.$audio.onTimeUpdate(() => {
			if (this.info.src == this.$store.state.playinfo.src) {
				// console.log('onTimeUpdate-->', this.info.src == this.$store.state.playinfo.src);
				this.current = this.format(this.$audio.currentTime);
				this.current_value = this.$audio.currentTime;
				this.saveplay('current', this.current);
				this.saveplay('current_value', this.$audio.currentTime);

				this.duration = this.format(this.$audio.duration);
				this.duration_value = this.$audio.duration;

				this.saveplay('duration', this.duration);
				this.saveplay('duration_value', this.duration_value);
			}
		});
		this.$audio.onError(() => {
			this.paused = true;
			this.$store.commit('setpause', true);

			uni.showToast({
				title: '音频播放错误',
				duration: 1500,
				mask: false,
				icon: 'none',
				position: 'center'
			});

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
				duration_value: 0,
				title: '',
				src: ''
			});
		});
	},

	methods: {
		//记录播放信息
		saveplay(type, e) {
			this.$store.commit('setplay', { [type]: e });
		},
		//记录播放组件的渲染数据
		saveaudio(data) {
			this.$store.commit('setaudio', data);
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
		//播放暂停
		operation() {
			if (this.hassrc != this.info.src) {
				if (this.paused) {
					const { src, title, singer, coverImgUrl } = this.info;
					this.saveaudio({
						src: src,
						title: title,
						singer: singer,
						coverImgUrl: coverImgUrl || this.default_cover
					});
					this.$audio.src = src;
					this.$audio.title = title;
					this.$audio.singer = singer;
					this.$audio.coverImgUrl = coverImgUrl || this.default_cover;
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

					this.saveaudio({
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
		//拖动
		change(e) {
			this.$audio.seek(e.detail.value);
		},
		//快进
		step(type) {
			var pos = !type ? this.current_value - 15 : this.current_value + 15;
			this.$audio.seek(pos);
		},
		//切歌
		changeplay(count) {
			var nowindex = this.$store.state.playIndex;
			nowindex += count;
			nowindex = nowindex < 0 ? this.$store.state.audiolist.length - 1 : nowindex > this.$store.state.audiolist.length - 1 ? 0 : nowindex;
			this.$store.commit('set_playIndex', nowindex);
			const { src: nsrc, title, singer, coverImgUrl } = this.$store.state.audiolist[nowindex];

			this.saveaudio({
				src: nsrc,
				title,
				singer,
				coverImgUrl
			});
			this.reset({ src: nsrc, title, singer, coverImgUrl });

			this.operation();
		},
		//重置组件的渲染
		reset(audioInfo) {
			this.info = audioInfo;
			this.current = '00:00';
			this.duration = '00:00';
			this.current_value = 0;
			this.duration_value = 100;
			this.paused = true;
		}
	}
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
