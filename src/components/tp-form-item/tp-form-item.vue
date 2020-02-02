<template>
  <div class="tp-form-item">
    <label class="tp-form-item__label" :style="formItemStyle">{{label}}</label>
    <div class="tp-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tp-form-item',
  inject: {
    Form: {
      default () {
        return {}
      }
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  created () {
    console.log(this.label)
  },
  data () {
    return {
      formItemStyle: {
        width: (this.Form && this.Form.labelWidth) || '80px'
      }
    }
  }
}
</script>
<style lang="scss">
.tp-form-item {
  margin-bottom: 25px;
  .tp-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .tp-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
