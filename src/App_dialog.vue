<template>
<div id="app">
  <tp-button type="primary" @click="openDialog">打开dialog</tp-button>
  <tp-dialog
            title="自定义标题"
            width="30%"
            top="15vh"
            :visible.sync="visible"
            @afterEnter="afterEnter"
            @afterLeave="afterLeave">
    <!-- <template v-slot:title> -->
      <!-- 此时的标题是一个具名插槽，可以自定义 -->
      <!-- <h3>自定义h3标题</h3> -->
    <!-- </template> -->
    123
    <template v-slot:footer>
      <tp-button>取消</tp-button>
      <tp-button type="primary">确定</tp-button>
    </template>
  </tp-dialog>
</div>
</template>

<script>
import tpDialog from './components/tp-dialog/tp-dialog'
export default {
  data () {
    return {
      visible: false
    }
  },
  mounted () {},
  components: {
    tpDialog
  },
  methods: {
    openDialog () {
      this.visible = true
    },
    afterEnter () {
      console.log('jinru')
    },
    afterLeave () {
      console.log('离开')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
