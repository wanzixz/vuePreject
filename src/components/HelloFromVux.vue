
<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1  @click="ok()">{{ msg }}</h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link ></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
// import model from './Test.vue'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      components: {
      //  model
      },
      methods: {
        ok: function () {
          console.log(1111)
          alert('改变一个div的样式')
        },
        cancel () {
          alert('取消了，干别的事情')
        }
      }
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
