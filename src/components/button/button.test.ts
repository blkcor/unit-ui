import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from '../icon/Icon.vue'

describe('Button.vue', () => {
  test('basic button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })
    //class
    expect(wrapper.classes()).toContain('uni-button--primary')
    //text
    expect(wrapper.text()).toBe('button')
    //event
    wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  test('disabled button', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: 'disabled-button'
      }
    })
    //class
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('is-disabled')
    //text
    expect(wrapper.text()).toBe('disabled-button')
    //event
    wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  test('button with icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up'
      },
      slots: {
        default: 'button with icon'
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })
    const icon = wrapper.findComponent(FontAwesomeIcon)
    expect(icon.exists()).toBeTruthy()
    expect(icon.attributes('icon')).toBe('arrow-up')
  })

  test('loading button', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading button'
      },
      global: {
        stubs: ['Icon']
      }
    })
    expect(wrapper.classes()).toContain('is-loading')
    const icon = wrapper.findComponent(Icon)
    expect(icon.exists()).toBeTruthy()
    expect(icon.attributes('icon')).toBe('spinner')

    //there is some problems with the click event => click event is emited when click the icon of the button
    icon.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
