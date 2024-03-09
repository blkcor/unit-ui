import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import Item from './CollapseItem.vue'

describe('Collapse.vue', () => {
  test('basic Collapse', async () => {
    const onChange = vi.fn()
    const wrapper = mount(
      () => {
        return (
          <Collapse onChange={onChange} modelValue={['a']}>
            <Item name="a" title="title a">
              content a
            </Item>
            <Item name="b" title="title b">
              content b
            </Item>
            <Item name="c" title="title c" disabled>
              content c
            </Item>
          </Collapse>
        )
      },
      {
        global: {
          stubs: ['Icon']
        },
        //cancel the css cache
        attachTo: document.body
      }
    )
    const headers = wrapper.findAll('.uni-collapse-item__header')
    const contents = wrapper.findAll('.uni-collapse-item__content')
    //children length
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
    //text
    expect(headers[0].text()).toBe('title a')
    expect(contents[0].text()).toBe('content a')
    //content
    expect(contents[0].isVisible()).toBeTruthy()
    expect(contents[1].isVisible()).toBeFalsy()
    //behavior
    await headers[0].trigger('click')
    expect(onChange).toBeCalledWith([])
    expect(contents[0].isVisible()).toBeFalsy()

    await headers[1].trigger('click')
    expect(onChange).toBeCalledWith(['b'])
    expect(contents[1].isVisible()).toBeTruthy()
    //disabled
    await headers[2].trigger('click')
    expect(onChange).not.toHaveBeenLastCalledWith(['c'])
    expect(headers[2].classes()).toContain('is-disabled')
    expect(contents[2].isVisible()).toBeFalsy()
  })
})
