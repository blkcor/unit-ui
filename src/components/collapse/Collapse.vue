<script setup lang="ts">
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapeseContextKey } from './types'

defineOptions({
  name: 'UniCollapse'
})
const props = defineProps<CollapseProps>()
const emit = defineEmits<CollapseEmits>()

const activedNames = ref<NameType[]>(props.modelValue || [])

watch(
  () => props.modelValue,
  () => {
    activedNames.value = props.modelValue!
  }
)
if (props.accordion && activedNames.value.length > 1) {
  throw new Error('accordion模式下，只能同时展开一个面板')
}
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    activedNames.value = activedNames.value[0] === item ? [] : [item]
    console.log(activedNames.value)
  } else {
    const index = activedNames.value.indexOf(item)
    if (index > -1) {
      activedNames.value.splice(index, 1)
    } else {
      activedNames.value.push(item)
    }
  }

  emit('update:modelValue', activedNames.value)
  emit('change', activedNames.value)
}

provide(collapeseContextKey, {
  activedNames,
  handleItemClick
})
</script>

<template>
  <div class="uni-collapse">
    <slot />
  </div>
</template>

<style scoped></style>
