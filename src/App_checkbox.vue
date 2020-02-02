<template>
<div>
  <tp-checkbox label="复选框1号" v-model="checked">复选框一号</tp-checkbox>
  <tp-checkbox label="复选框2号" v-model="checked1"></tp-checkbox>
  <tp-checkbox-group  v-model="checkedList">
    <tp-checkbox label="a" >复选框一号</tp-checkbox>
    <tp-checkbox label="复选框2号"></tp-checkbox>
  </tp-checkbox-group>
</div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      checked1: false,
      checkedList: ['a']
    }
  }
}
</script>
<style scoped>

</style>
