import done from 'flush-promises'
import { createRenderer } from 'vue-server-renderer'
import { mount, shallow } from '@vue/test-utils'

import Counter from './counter'
import { load } from './data-layer'

jest.mock('./data-layer', () => ({
  ping: () => 'ping-test',
  // load: () => Promise.resolve('yo-test')
  load: jest.fn()
}))

describe('Counter2', () => {
  beforeEach(() => {
    load.mockClear()
    load.mockReturnValue(Promise.resolve('yo-test'))
  })

  it('has text yo await', async () => {
    const wrapper = shallow(Counter)
    await done()
    expect(wrapper.vm.text).toEqual('yo-test')
    expect(wrapper.html()).toContain('<h3>yo-test</h3>')
    expect(load).toHaveBeenCalled()
  })
})
