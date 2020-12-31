<template>
	<view class="imt-audio" :class="[`${theme}`]" v-if="audiolist.length > 0">
		<template v-if="theme == 'theme3'">
			<slider
				class="audio-slider"
				:activeColor="themeColor"
				block-size="0"
				:value="renderData('current_value')"
				:max="renderData('duration_value')"
				@change="change"
				:disabled="!renderIsPlay"
			></slider>

			<view class="top">
				<view class="audio-control-wrapper">
					<image :src="renderData('coverImgUrl')" mode="aspectFill" class="cover" :class="{ on: !renderData('paused') }"></image>

					<image :src="require('./static/playbtn.png')" alt="" @click="operate" class="play" v-if="renderData('paused')"></image>
					<image :src="require('./static/pausebtn.png')" alt="" @click="operate" class="play" v-else></image>
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
					<image :src="renderData('coverImgUrl')" mode="aspectFill" class="cover" :class="{ on: !renderData('paused') }"></image>
					<template>
						<image :src="require('./static/playbtn.png')" alt="" @click="operate" class="play" v-if="renderData('paused')"></image>
						<image :src="require('./static/pausebtn.png')" alt="" @click="operate" class="play" v-else></image>
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
					@change="change"
					:disabled="!renderIsPlay"
				></slider>
				<view class="audio-number">{{ renderData('duration') }}</view>
			</view>
		</template>

		<template v-if="theme == 'theme1'">
			<view class="top">
				<view class="audio-control-wrapper"><image :src="renderData('coverImgUrl')" mode="aspectFill" class="cover" :class="{ on: !renderData('paused') }"></image></view>

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
					@change="change"
					:disabled="!renderIsPlay"
				></slider>
				<view class="audio-number">{{ renderData('duration') }}</view>
			</view>

			<view class="audio-button-box">
				<!-- 块退15s -->
				<image :src="require('./static/prev.png')" class="prevbtn" @click="stepPlay(-15)" mode="widthFix"></image>
				<!-- 上一首 -->
				<image :src="require('./static/go.png')" class="prevplay" @click="changeplay(-1)" mode="widthFix"></image>
				<!-- 播放 -->
				<image :src="require('./static/playbtn2.png')" alt="" @click="operate" class="play" v-if="renderData('paused')"></image>
				<!-- 暂停 -->
				<image :src="require('./static/pausebtn2.png')" alt="" @click="operate" class="pause" v-else></image>
				<!-- 下一首 -->
				<image :src="require('./static/go.png')" class="nextplay" @click="changeplay(1)" mode="widthFix"></image>
				<!-- 快进15s -->
				<image :src="require('./static/next.png')" class="nextbtn" @click="stepPlay(15)" mode="widthFix"></image>
			</view>
		</template>
	</view>
</template>

<script>
import { formatSeconds } from './util.js';
let base = Symbol('base');
export default {
	props: {
		theme: {
			type: String, // 主题 'theme1' or 'theme2'
			default: 'theme1'
		},
		themeColor: {
			type: String,
			default: '#42b983'
		}
	},
	data() {
		return {
			playinfo: this.$zaudio.playinfo,
			audiolist: this.$zaudio.audiolist,
			paused: this.$zaudio.paused,
			renderIsPlay: this.$zaudio.renderIsPlay,
			audio: this.$zaudio.renderinfo
		};
	},
	computed: {
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
		}
	},

	mounted() {
		this.$nextTick(() => {
			//设置音频回调
			this.$zaudio.on('setAudio', base, list => {
				this.audiolist = [...list];
			});
			//更新音频回调
			this.$zaudio.on('updateAudio', base, list => {
				this.audiolist = [...list];
			});
			//开始播放回调
			this.$zaudio.on('canPlay', base, data => {
				this.playinfo = data;
				this.renderIsPlay = this.$zaudio.renderIsPlay;
				this.audio = this.$zaudio.renderinfo;
				this.paused = this.$zaudio.paused;
			});
			//播放中回调
			this.$zaudio.on('playing', base, data => {
				this.playinfo = data;
			});
			//播放暂停回调
			this.$zaudio.on('pause', base, () => {
				this.paused = this.$zaudio.paused;
			});
		});
	},
	methods: {
		//播放or暂停
		operate() {
			this.$zaudio.operate();
		},
		//进度拖到
		change(event) {
			if (this.renderIsPlay) {
				this.$zaudio.seek(event.detail.value);
				this.$zaudio.commit('setPlayinfo', {
					current: formatSeconds(event.detail.value),
					current_value: event.detail.value
				});
			}
		},
		//快进
		stepPlay(value) {
			this.$zaudio.stepPlay(value);
		},
		//切歌
		changeplay(count) {
			this.$zaudio.changeplay(count);
		}
	}
};
</script>

<style scoped lang="scss">
@import './index.scss';
//  #ifdef MP-WEIXIN
.theme3 .audio-slider {
	margin-top: -8px !important;
}
// #endif
</style>
