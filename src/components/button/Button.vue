<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
defineOptions({
  name: 'UniButton'
})
withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'normal',
  plain: false,
  rounded: false,
  circle: false,
  disabled: false,
  autofocus: false,
  nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()
defineExpose({ ref: _ref })
</script>

<template>
  <button
    ref="_ref"
    class="uni-button"
    :class="{
      [`uni-button--${type}`]: type,
      [`uni-button--${size}`]: size,
      'is-plain': plain,
      'is-rounded': rounded,
      'is-circle': circle,
      'is-disabled': disabled
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot />
  </button>
</template>

<style scoped></style>
