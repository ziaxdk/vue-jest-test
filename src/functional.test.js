import done from 'flush-promises'
import { createRenderer } from 'vue-server-renderer'
import { mount, shallow } from '@vue/test-utils'

import Functional from './functional'

describe('Functional', () => {

  it('has text yo await', async () => {
    const wrapper = shallow(Functional, { propsData: { text: 'yo' } })
    expect(wrapper.html()).toContain('<div>yo</div>')
  })
})
