<template>
<div>
  <tp-input placehodler="请输入用户名" name="username" disabled clearable></tp-input>
  <tp-input placehodler="请输入用户名" name="username" v-model="username" clearable></tp-input>
  <tp-input placehodler="请输入密码" type="text" @focus="handleFocus" v-model="password" name="usermima" showPassword></tp-input>
</div>
</template>

<script>
export default {
  data () {
    return {
      username: 'zhangsan',
      password: ''
    }
  },
  methods: {
    handleFocus () {
      console.log('聚焦了')
    }
  }
}
</script>
<style lang="scss" scoped>
  .tp-input {
    width: 180px !important;
    margin-right: 20px;
  }
</style>
