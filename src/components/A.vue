<template>
  <div>{{busVal}}</div>
</template>

<script>
import Bus from '../store/bus'
export default {
  data () {
    return {
      busVal: ''
    }
  },
  mounted() {
    Bus.$on('selected', (msg) => {
      this.busVal = msg
    })
  }
}
</script>

