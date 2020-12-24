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
					<image :src="renderData('coverImgUrl')" mode="aspectFill" class="cover" :class="{ on: !renderData('paused') }"></image>

					<image :src="require('./static/playbtn.png')" alt="" @click="operation" class="play" v-if="renderData('paused')"></image>
					<image :src="require('./static/pausebtn.png')" alt="" @click="operation" class="play" v-else></image>
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
						<image :src="require('./static/playbtn.png')" alt="" @click="operation" class="play" v-if="renderData('paused')"></image>
						<image :src="require('./static/pausebtn.png')" alt="" @click="operation" class="play" v-else></image>
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
					@changing="changing"
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
				<image :src="require('./static/playbtn2.png')" alt="" @click="operation" class="play" v-if="renderData('paused')"></image>
				<!-- 暂停 -->
				<image :src="require('./static/pausebtn2.png')" alt="" @click="operation" class="pause" v-else></image>
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
import { mapGetters } from 'vuex';
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

	computed: {
		...mapGetters(['audiolist', 'playinfo', 'paused', 'audio', 'renderIsPlay']),
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

	created() {},
	methods: {
		changing(event) {
			this.$audio.set_playinfo({
				current: formatSeconds(event.detail.value),
				current_value: event.detail.value
			});
		},

		//播放or暂停
		operation() {
			this.$audio.operation();
		},
		//拖动
		change(e) {
			if (this.renderIsPlay) {
				this.$audio.seek(e.detail.value);
			}
		},
		//快进
		stepPlay(value) {
			this.$audio.stepPlay(value);
		},
		//切歌
		changeplay(count) {
			this.$audio.changeplay(count);
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
