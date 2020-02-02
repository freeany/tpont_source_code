<template>
  <label class="tp-radio" :class="{'is-checked': model===label}" @click="handleClickRadio">
    <span class="tp-radio__input">
      <span class="tp-radio__inner"></span>
      <input
        class="tp-radio__original"
        type="radio"
        :value="label"
        v-model="model"
      >
    </span>
    <span class="tp-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'tp-radio',
  inject: {
    group: {
      default: ''
    }
  },
  data () {
    return {
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: ''
    }
  },
  methods: {
    handleClickRadio () {

    }
  },
  computed: {
    /*
      获取的话，获取的是父元素v-model的值。
          什么时候选中？ 当value(其实绑定的是label)值与v-mode绑定的值相同时 radio就被选中了。
          其实归根结底要改变还是父元素中 v-model的值。
          点击之后 该元素的v-model的值就变为value的值。
            v-model的值用了一个计算属性。改变的时候将value(其实绑定的是label)的值给
                                        父元素的 v-model的值。
            然后数据响应，子组件的value值随之变化。
    */
    model: {
      get () {
        return this.isGroup ? this.group.value : this.value
      },
      set (value) {
        // this.$emit('input', this.label)
        this.isGroup
          ? this.group.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.group
    }
  }
}
</script>
<style lang="scss" scoped>
  .tp-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .tp-radio__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .tp-radio__inner {
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after {
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .tp-radio__original {
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .tp-radio__label {
      font-size: 14px;
      padding-left: 10px;
    }
  }

  .tp-radio.is-checked {
    .tp-radio__input {
      .tp-radio__inner {
        border-color: #409eff;
        background: #409eff;
        &:after {
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .tp-radio__label {
      color: #409eff;
    }
  }
</style>
