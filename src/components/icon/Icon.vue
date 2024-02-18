<template>
  <i
    class="uni-icon"
    :class="{ [`uni-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <FontAwesomeIcon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types'
import { omit } from 'lodash'
import { computed } from 'vue'
defineOptions({
  name: 'UniIcon',
  inheritAttrs: false
})

const props = defineProps<IconProps>()
//不包含在AwesomeIconProps中的自定义属性需要进行过滤
const filteredProps = computed(() => omit(props, ['type', 'color']))
//自定义颜色优先级最高
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<style scoped></style>
