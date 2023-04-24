<template>
  <div class="progress">
    <div class="progress-circle">
      <div class="progress-circle-bar"></div>
      <div class="progress-circle-score" @click="changeScore">{{ state.score }}分</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
const state = reactive({ score: 45 })
function changeScore() {
  state.score = 60
}
let transform = computed(() => {
  return `rotate(-${state.score}deg)`
})
</script>

<style lang="less" scoped>
@rotate: v-bind(transform);
.progress {
  width: 100%;
  height: 100%;

  &-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 200px;
    overflow: hidden;

    &-bar {
      width: 400px;
      height: 400px;
      border-top: 20px solid rgba(255, 165, 0, 1);
      border-bottom: 20px solid rgba(255, 165, 0, 0.4);
      border-left: 20px solid rgba(255, 165, 0, 0.4);
      border-right: 20px solid rgba(255, 165, 0, 1);
      border-radius: 50%;
      transform: @rotate;
      // animation: progress-rotate 2s forwards;

      // @keyframes progress-rotate {
      //   0% {
      //     transform: rotate(v-bind('state.score') deg);
      //   }

      //   100% {
      //     transform: rotate(-45deg);
      //   }
      // }
    }

    &-score {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      font-size: 55px;
      font-weight: 700;
      color: rgb(255, 165, 0);
    }
  }
}
</style>
