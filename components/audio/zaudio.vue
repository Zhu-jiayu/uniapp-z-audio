<template>
	<view class="imt-audio" :class="[`${theme}`]" v-if="audiolist.length > 0">
		<template v-if="theme == 'theme3'">
			<slider
				class="audio-slider"
				:activeColor="themeColor"
				block-size="0"
				:value="renderData('current_value')"
				:max="renderData('duration_value')"
				@changing="changing"
				@change="change"
				:disabled="!renderIsPlay"
			></slider>

			<view class="top">
				<view class="audio-control-wrapper">
					<image :src="renderData('coverImgUrl')" mode="aspectFit" class="cover" :class="{ on: !renderData('paused') }"></image>

					<image src="/static/playbtn.png" alt="" @click="operation" class="play" v-if="renderData('paused')"></image>
					<image src="/static/pausebtn.png" alt="" @click="operation" class="play" v-else></image>
				</view>
			</view>
			<view class="audio-wrapper">
				<view class="titlebox">
					<view class="title">{{ renderData('title') }}</view>
					<view class="singer">{{ renderData('singer') }}</view>
				</view>

				<view class="slidebox">
					<view>{{ renderData('current') }}/ {{ renderData('duration') }}</view>
					<view>
						<text @click="changeplay(-1)">上一首</text>
						<text @click="changeplay(1)">下一首</text>
					</view>
				</view>
			</view>
		</template>

		<template v-if="theme == 'theme2'">
			<view class="top">
				<view class="audio-control-wrapper">
					<image :src="renderData('coverImgUrl')" mode="aspectFit" class="cover" :class="{ on: !renderData('paused') }"></image>
					<template>
						<image src="/static/playbtn.png" alt="" @click="operation" class="play" v-if="renderData('paused')"></image>
						<image src="/static/pausebtn.png" alt="" @click="operation" class="play" v-else></image>
					</template>
				</view>

				<view>
					<view class="title">{{ renderData('title') }}</view>
					<view class="singer">{{ renderData('singer') }}</view>
				</view>
			</view>
			<view class="audio-wrapper">
				<view class="audio-number">{{ renderData('current') }}</view>
				<slider
					class="audio-slider"
					:activeColor="themeColor"
					block-size="16"
					:value="renderData('current_value')"
					:max="renderData('duration_value')"
					@changing="changing"
					@change="change"
					:disabled="!renderIsPlay"
				></slider>
				<view class="audio-number">{{ renderData('duration') }}</view>
			</view>
		</template>

		<template v-if="theme == 'theme1'">
			<view class="top">
				<view class="audio-control-wrapper"><image :src="renderData('coverImgUrl')" mode="aspectFit" class="cover" :class="{ on: !renderData('paused') }"></image></view>

				<view>
					<view class="title">{{ renderData('title') }}</view>
					<view class="singer">{{ renderData('singer') }}</view>
				</view>
			</view>
			<view class="audio-wrapper">
				<view class="audio-number">{{ renderData('current') }}</view>
				<slider
					class="audio-slider"
					:activeColor="themeColor"
					block-size="16"
					:value="renderData('current_value')"
					:max="renderData('duration_value')"
					@changing="changing"
					@change="change"
					:disabled="!renderIsPlay"
				></slider>
				<view class="audio-number">{{ renderData('duration') }}</view>
			</view>

			<view class="audio-button-box">
				<!-- 块退15s -->
				<image src="/static/prev.png" class="prevbtn" @click="step(0)" mode="widthFix" v-if="stepShow"></image>
				<!-- 上一首 -->
				<image src="/static/go.png" class="prevplay" @click="changeplay(-1)" mode="widthFix"></image>
				<!-- 播放 -->
				<image src="/static/playbtn2.png" alt="" @click="operation" class="play" v-if="renderData('paused')"></image>
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
import { mapGetters, mapMutations } from 'vuex';
export default {
	props: {
		default_cover: {
			type: String,
			default: '/static/logo.png' //默认海报
		},
		//自动续播下一首
		continue: {
			type: Boolean,
			default: false
		},
		//自动播放
		autoplay: {
			type: Boolean,
			default: false
		},

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
		},
		...mapGetters(['audiolist', 'playinfo', 'n_pause', 'paused', 'renderIndex', 'audio', 'playIndex', 'renderIsPlay']),
		renderData() {
			return name => {

				if (!this.renderIsPlay) {
					if (name == 'paused') {
						return true;
					}
					return this.audio[name];
				} else {
					if (name == 'paused') {
						return this.paused;
					}
					return this.playinfo[name];
				}
			};
		},
	
	},

	created() {
		this.audioInit();
	},
	methods: {
		audioInit() {
			if (this.$audio.started) return;
			this.$audio.started = true;
			console.log('$audio开始监听事件');

			this.$audio.onCanplay(() => {});
			if (this.autoplay) {
				this.operation();
			}
			this.$audio.onPlay(() => {
				const { src: renderSrc, title: renderTitle, singer: renderSinger, coverImgUrl: renderCoverImgUrl } = this.audio;
				this.$store.commit('set_playinfo', {
					// src: renderSrc,
					// title: renderTitle,
					// singer: renderSinger,
					// coverImgUrl: renderCoverImgUrl,
					duration: this.format(this.$audio.duration),
					duration_value: this.$audio.duration
				});

				this.$store.commit('set_pause', false);
				this.$store.commit('set_n_pause', false);
			});

			this.$audio.onPause(() => {
				this.$store.commit('set_pause', true);
			});

			this.$audio.onStop(() => {
				this.$store.commit('set_pause', true);
			});
			this.$audio.onEnded(() => {
				this.$store.commit('set_pause', true);
				this.$audio.startTime = 0;

				this.$store.commit('set_playinfo', {
					current: this.format('0'),
					current_value: '0'
				});

				//续播
				if (this.continue) {
					this.changeplay(1);
				}
			});
			this.$audio.onTimeUpdate(() => {
				if (this.renderIsPlay) {
					this.$store.commit('set_playinfo', {
						current: this.format(this.$audio.currentTime),
						current_value: this.$audio.currentTime,
						
					});
				}
			});
			this.$audio.onError(() => {
				this.$store.commit('set_pause', true);

				uni.showToast({
					title: '音频播放错误',
					duration: 1500,
					mask: false,
					icon: 'none',
					position: 'center'
				});

				this.$store.commit('set_audio', {
					src: '',
					title: '',
					singer: '',
					coverImgUrl: ''
				});
				this.$store.commit('set_playinfo', {
					current: 0,
					current_value: 0,
					duration: 0,
					duration_value: 0,
					title: '',
					src: ''
				});
			});
		},

		changing(event) {
			this.$store.commit('set_playinfo', {
				current: this.format(event.detail.value),
				current_value: event.detail.value
			});
		},
		//播放or暂停
		operation(status) {
			const { duration, current, duration_value, current_value, src } = this.playinfo;
			const { src: renderSrc, title: renderTitle, singer: renderSinger, coverImgUrl: renderCoverImgUrl } = this.audio;

			//渲染与播放地址 不同
			if (!this.renderIsPlay) {
				if (this.paused || status) {
					// 播放 渲染的数据

					this.$audio.src = renderSrc;
					this.$audio.title = renderTitle;
					this.$audio.singer = renderSinger;
					this.$audio.coverImgUrl = renderCoverImgUrl || this.default_cover;

					this.$audio.startTime = 0;
					this.$audio.seek(0);

					this.$audio.play();

					this.$store.commit('set_pause', false);

					this.$store.commit('set_playinfo', {
						src: renderSrc,
						title: renderTitle,
						singer: renderSinger,
						coverImgUrl: renderCoverImgUrl
					});
				} else {
					//暂停
					this.$audio.pause();
					this.$store.commit('set_pause', true);
					this.$store.commit('set_n_pause', true);
				}
			} else {
				//渲染与播放地址相同
				if (this.paused) {
					this.$audio.play();

					this.$audio.startTime = parseFloat(current_value);
					this.$audio.seek(parseFloat(current_value));

					this.$store.commit('set_pause', false);

					this.$store.commit('set_playinfo', {
						src: renderSrc,
						title: renderTitle,
						singer: renderSinger,
						coverImgUrl: renderCoverImgUrl
					});
				} else {
					this.$audio.pause();
					this.$store.commit('set_pause', true);
					this.$store.commit('set_n_pause', true);
				}
			}
		},
		//拖动
		change(e) {

			if(this.renderIsPlay){
				this.$audio.seek(e.detail.value);
			}
		},
		//快进
		step(type) {
			if(this.renderIsPlay){
				var pos = !type ? this.playinfo.current_value - 15 : this.playinfo.current_value + 15;
				this.$audio.seek(pos);
			}
		},
		//切歌
		changeplay(count) {
			var nowindex = this.renderIndex;
			nowindex += count;
			nowindex = nowindex < 0 ? this.audiolist.length - 1 : nowindex > this.audiolist.length - 1 ? 0 : nowindex;
			this.$store.commit('set_pause', true);
			//更新渲染数据的索引值
			this.$store.commit('set_renderIndex', nowindex);
			this.operation();
		}
	}
};
</script>

<style scoped lang="scss">
@import './index.scss';
//  #ifdef MP-WEIXIN
.theme3 .audio-slider {
	margin-top: -8px!important;
}
// #endif
</style>
