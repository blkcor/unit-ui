import type { InjectionKey, Ref } from 'vue'

export type NameType = string | number

export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}

export interface CollapseProps {
  modelValue?: NameType[]
  // 是否支持手风琴效果（一个打开，另一个就会关闭）
  accordion?: boolean
}

export interface CollapseContext {
  activedNames: Ref<Array<NameType>>
  handleItemClick: (name: NameType) => void
}

export type CollapseEmits = {
  'update:modelValue': [value: NameType[]]
  change: [value: NameType[]]
}
export const collapeseContextKey: InjectionKey<CollapseContext> = Symbol('CollapeseContextKey')
