<template>
  <button class="tp-button"
          :class="[`tp-button--${type}`,
                  {'is-plain': plain},
                  {'is-round': round},
                  {'is-circle': circle},
                  {'is-disabled': disabled},
                  ]"
          @click="clickHandle"
          :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'tp-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  created () {
  },
  computed: {
  },
  methods: {
    clickHandle (e) {
      // 向外派发一个click事件。
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
// 按钮组件的主要样式
  .tp-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    // 禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
// 按钮组件的type样式
  .tp-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  .tp-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
  .tp-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
  }
  .tp-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
  }
  .tp-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }
  // 按钮的plain样式
  .tp-button.is-plain {
    &:hover,
    &:focus {
      background: #fff;
      border-color: #409eff;
      color: #409eff;
    }
  }
  .tp-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:hover,
    &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
  .tp-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:hover,
    &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }

  .tp-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:hover,
    &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
  .tp-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:hover,
    &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
  .tp-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:hover,
    &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }

  // 圆角按钮的样式
  .tp-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  // 圆形按钮
  .tp-button.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  // 找到.tp-button 后有一个类名包含 tp-icon-的 标签紧邻后有一个span标签
  .tp-button [class*=tp-icon-]+span {
      margin-left: 5px;
  }

  // 禁用按钮的样式
  .tp-button.is-disabled,
  .tp-button.is-disabled:focus,
  .tp-button.is-disabled:hover {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
  }
  .tp-button.is-disabled,
  .tp-button.is-disabled:focus,
  .tp-button.is-disabled:hover {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
  }
  .tp-button--primary.is-disabled,
  .tp-button--primary.is-disabled:active,
  .tp-button--primary.is-disabled:focus,
  .tp-button--primary.is-disabled:hover {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
  }
  .tp-button--success.is-disabled,
  .tp-button--success.is-disabled:active,
  .tp-button--success.is-disabled:focus,
  .tp-button--success.is-disabled:hover {
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
  }
  .tp-button--info.is-disabled,
  .tp-button--info.is-disabled:active,
  .tp-button--info.is-disabled:focus,
  .tp-button--info.is-disabled:hover {
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
  }
  .tp-button--warning.is-disabled,
  .tp-button--warning.is-disabled:active,
  .tp-button--warning.is-disabled:focus,
  .tp-button--warning.is-disabled:hover {
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
  }
  .tp-button--danger.is-disabled,
  .tp-button--danger.is-disabled:active,
  .tp-button--danger.is-disabled:focus,
  .tp-button--danger.is-disabled:hover {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
  }
</style>
