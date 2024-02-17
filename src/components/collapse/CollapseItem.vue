<script setup lang="ts">
import { inject, computed } from 'vue'
import type { CollapseItemProps } from './types'
import { collapeseContextKey } from './types'

defineOptions({
  name: 'UniCollapseItem'
})

const collapeseContext = inject(collapeseContextKey)

const props = defineProps<CollapseItemProps>()
//判断是否actived
const isActive = computed(() => collapeseContext?.activedNames.value.includes(props.name))
const handleClick = () => {
  if (props.disabled) return
  collapeseContext?.handleItemClick(props.name)
}
</script>

<template>
  <div
    class="uni-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div class="uni-collapse-item__header" :id="`item-header-${name}`" @click="handleClick">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="uni-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.uni-collapse-item__header {
  font-size: 30px;
}
</style>
