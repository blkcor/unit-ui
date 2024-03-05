<script setup lang="ts">
import type { ButtonProps } from './types'
import Icon from '../icon/Icon.vue'

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
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped></style>
