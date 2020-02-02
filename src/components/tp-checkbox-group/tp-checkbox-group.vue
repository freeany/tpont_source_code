<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tp-checkbox-group',
  provide () {
    return {
      'group': this
    }
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
/* @import ''; 引入css类 */

</style>
