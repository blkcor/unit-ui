<script setup lang="ts">
import type { ButtonProps } from './types'
defineProps<ButtonProps>()
</script>
<template>
  <button
    class="blk-button"
    :class="{
      'is-plain': plain
    }"
  />
</template>

<style scoped></style>
