<template>
  <div>
    <span class="count">{{ count }}</span>
    <button @click="increment">Increment</button>
    <h3>{{text}}</h3>
  </div>
</template>

<script>
import { load, ping } from './data-layer.js'

export default {
  data () {
    return {
      count: 0,
      text: 'null'
    }
  },

  methods: {
    increment () {
      this.count++
    }
  },
  // mounted () {
  //   console.log('mounted')
  //   let text = ping()
  //   this.text = text
  // }
  async mounted () {
    let text = await load()
    this.text = text
  }
}
</script>
