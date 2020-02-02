<template>
<div>
  <tp-form :model="model" label-width="100px">
    <tp-form-item label="用户名">
      <tp-input placehodler="请输入用户名" v-model="model.username" ></tp-input>
    </tp-form-item>
    <tp-form-item label="开关">
      <tp-switch v-model="model.switchC"></tp-switch>
    </tp-form-item>
  </tp-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: '张三',
        switchC: true
      }
    }
  }
}
</script>
<style scoped>
  .tp-input {
    width: 180px;
  }
</style>
