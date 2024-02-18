<script setup lang="ts">
import { inject, computed } from 'vue'
import type { CollapseItemProps } from './types'
import { collapeseContextKey } from './types'
import Icon from '../icon/Icon.vue'

defineOptions({
  name: 'UniCollapseItem'
})

const collapeseContext = inject(collapeseContextKey)

const props = defineProps<CollapseItemProps>()
//判断是否actived
const isActived = computed(() => collapeseContext?.activedNames.value.includes(props.name))

const handleClick = () => {
  if (props.disabled) return
  collapeseContext?.handleItemClick(props.name)
}
//动画事件
const animationEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0'
  },
  enter(el) {
    el.style.height = el.scrollHeight + 'px'
  },
  afterEnter(el) {
    el.style.height = ''
  },
  beforeLeave(el) {
    el.style.height = el.scrollHeight + 'px'
  },
  leave(el) {
    el.style.height = '0'
  },
  afterLeave(el) {
    el.style.height = ''
  }
}
</script>

<template>
  <div
    class="uni-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div
      class="uni-collapse-item__header"
      :class="{
        'is-actived': isActived,
        'is-disabled': disabled
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <Icon class="header-icon" icon="angle-right" />
    </div>
    <Transition
      name="slide"
      @before-enter="animationEvents.beforeEnter"
      @enter="animationEvents.enter"
      @after-enter="animationEvents.afterEnter"
      @before-leave="animationEvents.beforeLeave"
      @leave="animationEvents.leave"
      @after-leave="animationEvents.afterLeave"
    >
      <div class="uni-collapse-item__wrapper" v-show="isActived">
        <div class="uni-collapse-item__content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
