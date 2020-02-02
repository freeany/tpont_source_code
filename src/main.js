import Vue from 'vue'
import App from './App.vue'

import './assets/fonts/font.scss'

// 组件
import TpButton from './components/tp-button/tp-button'
import TpDialog from './components/tp-dialog/tp-dialog'
import TpInput from './components/tp-input/tp-input'
import TpSwitch from './components/tp-switch/tp-switch'
import TpRadio from './components/tp-radio/tp-radio'
import TpRadioGroup from './components/tp-radio-group/tp-radio-group'
import TpCheckbox from './components/tp-checkbox/tp-checkbox'
import TpCheckboxGroup from './components/tp-checkbox-group/tp-checkbox-group'
import TpForm from './components/tp-form/tp-form'
import TpFormItem from './components/tp-form-item/tp-form-item'

Vue.config.productionTip = false
Vue.component(TpButton.name, TpButton)
Vue.component(TpDialog.name, TpDialog)
Vue.component(TpInput.name, TpInput)
Vue.component(TpSwitch.name, TpSwitch)
Vue.component(TpRadio.name, TpRadio)
Vue.component(TpRadioGroup.name, TpRadioGroup)
Vue.component(TpCheckbox.name, TpCheckbox)
Vue.component(TpCheckboxGroup.name, TpCheckboxGroup)
Vue.component(TpForm.name, TpForm)
Vue.component(TpFormItem.name, TpFormItem)

new Vue({
  render: h => h(App)
}).$mount('#app')
