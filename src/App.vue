<script setup lang="ts">
import Button from '@/components/button/Button.vue'
import CollapseItem from './components/collapse/CollapseItem.vue'
import Collapse from './components/collapse/Collapse.vue'
import { onMounted, ref } from 'vue'

const activedNames = ref<string[]>(['collapse'])
onMounted(() => {
  setTimeout(() => {
    activedNames.value = ['collapse', 'collapse1']
  }, 2000)
})
</script>

<template>
  <!-- <div class="btn-group">
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
  </div> -->

  <div class="collapse">
    <Collapse v-model="activedNames" accordion>
      <CollapseItem title="collapse" name="collapse">
        <template #title>
          <h1>hello title</h1>
        </template>
        <template #default>
          <div>hello content</div>
        </template>
      </CollapseItem>

      <CollapseItem title="collapse" name="collapse1">
        <div>collapse1</div>
      </CollapseItem>

      <CollapseItem title="collapse1" name="collapse2" disabled>
        <div>collapse2</div>
      </CollapseItem>
    </Collapse>
    {{ activedNames }}
  </div>
</template>
<style scoped></style>
