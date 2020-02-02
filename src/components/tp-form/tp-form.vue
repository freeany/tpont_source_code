<template>
  <div class="tp-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tp-form',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>

</style>
