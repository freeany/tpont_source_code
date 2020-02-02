<template>
<div>
  <tp-switch v-model="value" activeColor="#13ce66" inactiveColor="#ff4949" name="username"></tp-switch>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: false
    }
  }
}
</script>
<style scoped>

</style>
