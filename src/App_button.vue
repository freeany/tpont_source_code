<template>
  <div id="app">
    <tp-button>默认按钮</tp-button>
    <tp-button type="primary" plain @click="fn">主要按钮</tp-button>
    <tp-button type="success" plain>成功按钮</tp-button>
    <tp-button type="info" plain>信息按钮</tp-button>
    <tp-button type="warning" round>警告按钮</tp-button>
    <tp-button type="danger" round disabled>危险按钮</tp-button>
    <tp-button type="danger" circle>拆</tp-button>
    <tp-button type="danger" icon="tp-icon-check">哈哈哈</tp-button>
    <tp-button type="danger" icon="tp-icon-check"></tp-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    fn (e) {
      console.log('fn执行了。。。', e)
    }
  }
}
</script>

<style lang="scss">
  .tp-button {
    margin-right: 20px !important;
    margin-top: 20px !important;
  }
</style>
