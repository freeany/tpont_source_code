<template>
  <div class="tp-switch" :class="{'is-checked': value}" @click="changeSwitch">
    <span class="tp-switch__core" ref="core" >
      <span class="tp-switch__button"></span>
    </span>

    <input
      class="tp-switch__input"
      type="checkbox"
      ref="checkbox"
      :name="name"
    >
  </div>
</template>

<script>
export default {
  name: 'tp-switch',
  data () {
    return {
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#dcdfe6'
    },
    inactiveColor: {
      type: String,
      default: '#409eff'
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async changeSwitch () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      this.$refs.checkbox.checked = this.value
    },
    setColor () {
      // 这样的方式可以， 但是 会经常对浏览器进行重绘。所以换一种方式实现
      // if (this.value) {
      //   this.$refs.core.style.borderColor = this.activeColor
      //   this.$refs.core.style.backgroundColor = this.activeColor
      // } else {
      //   this.$refs.core.style.borderColor = this.inactiveColor
      //   this.$refs.core.style.backgroundColor = this.inactiveColor
      // }
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.checkbox.checked = this.value
  }
}
</script>
<style lang="scss" scoped>
  .tp-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .tp-switch__core {
      margin: 0;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color .3s,background-color .3s;
      vertical-align: middle;
      .tp-switch__button {
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
      }
    }

    .tp-switch__input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0;
    }
  }

  .tp-switch.is-checked {
    .tp-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .tp-switch__button {
        transform: translateX(20px);
      }
    }
  }
</style>
