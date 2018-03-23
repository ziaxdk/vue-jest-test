<script>
export default {
  functional: true,
  render: (h, c) => {
    return h('div', c.props.text)
  },
  props: {
    text: {
      type: String,
      default: 'def'
    }
  }
}
</script>
