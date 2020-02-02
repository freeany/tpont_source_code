<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tp-radio-group',
  provide () {
    return {
      'group': this
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>

</style>
