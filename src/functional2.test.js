import done from 'flush-promises'
import { createRenderer } from 'vue-server-renderer'
import { mount, shallow } from '@vue/test-utils'

import Functional2 from './functional2'

describe('Functional2', () => {

  fit('has text yo await', async () => {
    const wrapper = shallow(Functional2, { context: { props: { text: 'yo' } } })
    expect(wrapper.html()).toContain('<div>yo</div>')
  })
})
