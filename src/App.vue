<script setup lang="ts">
import Button from '@/components/button/Button.vue'
</script>

<template>
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="info">Info</Button>
    <hr />
    <Button plain>Default</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
    <Button type="info" plain>Info</Button>
    <hr />
    <Button disabled>Default</Button>
    <Button type="primary" disabled>Primary</Button>
    <Button type="success" disabled>Success</Button>
    <Button type="warning" disabled>Warning</Button>
    <Button type="danger" disabled>Danger</Button>
    <Button type="info" disabled>Info</Button>
    <hr />
    <Button type="primary" size="large">Large</Button>
    <Button type="primary" size="medium">Medium</Button>
    <Button type="primary" size="small">Small</Button>
  </div>
</template>
<style scoped></style>
