<template>
  <div class="tp-input" :class="{'tp-input--suffix': showIcon}">
    <input
          :placeholder="placehodler"
          :type="isPassword"
          :name="name"
          :disabled="disabled"
           class="tp-input__inner"
          :class="{'is-disabled': disabled}"
          :value="value"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          >

    <span class="tp-input__suffix" v-if="showIcon">
      <i class="tp-input__icon tp-icon-circle-close" @click="clearableInput" v-if="clearable && value"></i>
      <i class="tp-input__icon tp-icon-view "
         :class="{'tp-icon-view-active': value}"
         @click="changePassword" v-if="showPassword"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'tp-input',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placehodler: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clearableInput () {
      this.$emit('input', '')
    },
    changePassword () {
      this.passwordVisible = !this.passwordVisible
    },
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    handleChange (e) {
      this.$emit('change', e)
    }
  },
  computed: {
    showIcon () {
      return this.clearable || this.showPassword
    },
    isPassword () {
      //  如果该组件传进来了showPassword 并且 点击了此图标
      //  type就显示为(如果是text就显示password，如果是password就显示text)
      //  其他的所有情况 就显示原来的。
      return this.showPassword
        ? (this.passwordVisible
          ? (this.type === 'password' ? 'text' : 'password')
          : this.type)
        : this.type
    }
  }
}
</script>
<style lang="scss" scoped>
  .tp-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .tp-input__inner {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;

      &:focus {
        outline: none;
        border-color: #409eff;
      }
      &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  }

  .tp-input--suffix {
    .tp-input__inner {
      padding-right: 30px;
    }
    .tp-input__suffix {
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i {
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .tp-icon-view-active {
        color: blue;
      }
    }
}
</style>
