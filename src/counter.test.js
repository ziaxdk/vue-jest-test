import done from 'flush-promises'
import { createRenderer } from 'vue-server-renderer'
import { mount, shallow } from '@vue/test-utils'

import Counter from './counter'
jest.mock('./data-layer')
// jest.mock('./data-layer', () => {
//   return {
//     ping: () => 'ping-test',
//     load: () => new Promise((resolve, reject) => resolve('yo-test'))
//   }
// })

describe('Counter', () => {
  it('renders the correct markup', () => {
    const wrapper = shallow(Counter)
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    const wrapper = shallow(Counter)
    expect(wrapper.contains('button')).toBe(true)
  })

  it('has text yo', (done) => {
    const wrapper = shallow(Counter)
    wrapper.vm.$nextTick(() => {
      // expect(wrapper.html()).toContain('<h3>ping-test</h3>')
      expect(wrapper.vm.text).toEqual('yo-test')
      wrapper.vm.$nextTick(() => {
        expect(wrapper.html()).toContain('<h3>yo-test</h3>')
        done()
      })
    })
  })

  it('has text yo await', async() => {
    const wrapper = shallow(Counter)
    await wrapper.vm.$nextTick()
      // expect(wrapper.html()).toContain('<h3>ping-test</h3>')
    expect(wrapper.vm.text).toEqual('yo-test')
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('<h3>yo-test</h3>')
  })


  it('has text yo', async () => {
    const wrapper = shallow(Counter)
    // expect(wrapper.html()).toContain('<h3>ping-test</h3>')
    await done()
    expect(wrapper.vm.text).toEqual('yo-test')
    expect(wrapper.html()).toContain('<h3>yo-test</h3>')
  })

  it('must snapshot', () => {
    const renderer = createRenderer()
    const wrapper = shallow(Counter)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

})
