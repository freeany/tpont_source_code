<template>
 <transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
  <div class="tp-dialog__wrapper" v-show="visible" @click.self="close">
    <div class="tp-dialog" :style="style">
      <div class="tp-dialog__header">
        <slot name="title">
          <span class="tp-dialog__title">{{ title }}</span>
        </slot>
        <button class="tp-dialog__headerbtn">
          <i class="tp-icon-close" @click.self="close"></i>
        </button>
      </div>
      <div class="tp-dialog__body">
        <!-- <span>这是一段信息</span> -->
        <slot></slot>
      </div>
      <div class="tp-dialog__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
 </transition>
</template>

<script>
export default {
  name: 'tp-dialog',
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    afterEnter () {
      this.$emit('afterEnter')
    },
    afterLeave () {
      this.$emit('afterLeave')
    }
  },
  computed: {
    style () {
      return {
        width: this.width,
        top: this.top
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .tp-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    .tp-dialog {
      position: relative;
      margin: 15vh auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      width: 30%;

      &__header {
        padding: 20px 20px 10px;
        .tp-dialog__title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .tp-dialog__headerbtn {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
          .el-icon-close {
            color: #909399;
          }
        }
      }

      &__body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      &__footer {
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        ::v-deep .tp-button:first-child {
          margin-right: 20px;
        }
      }
    }
  }

  .dialog-fade-enter-active {
    animation: dialog-run .3s;
  }

  .dialog-fade-leave-active {
    animation: dialog-run .3s reverse;
  }

  @keyframes dialog-run {
    0% {
      opacity: 0;
      transform: translateY(-20px)
    }

    100% {
      opacity: 1;
      transform: translateY(0)
    }
  }
</style>
