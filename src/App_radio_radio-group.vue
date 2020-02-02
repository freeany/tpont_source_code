<template>
<div>
  <tp-radio v-model="radio" label="1">男</tp-radio>
  <tp-radio v-model="radio" label="2">女</tp-radio>
  <tp-radio-group v-model="radio">
    <tp-radio label="1">男</tp-radio>
    <tp-radio label="2">女</tp-radio>
  </tp-radio-group>
</div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
<style scoped>
/* @import ''; 引入css类 */
  .radio-group {
    margin-top: 20px;
  }
</style>
