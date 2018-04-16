<template>
  <div>
    <h1></h1>
    <ul>
      <li v-for="(item, key) of data" :key="key" v-if="key < 1">
        <div>{{item.author}}</div>
        <div>{{item.comment}}</div>
        <div>{{item.data}}</div>
        <div>{{item.ready}}</div>
      </li>
    </ul>
    <input type="button" value="点击" @click="fetchData()">
    <button @click="goBack">后腿</button>
    <input type="button" value="点击" @click="goA()">
    <input type="button" value="点击" @click="goB()">
    <transition name="el-fade-in">
      <router-view ></router-view>
      <router-view name="bname"></router-view>
    </transition>
  </div>
</template>

<script>
import { fetchTest } from 'service/homePage'
// const userId = 123
import Bus from '../store/bus.js'
export default {
  name: 'test',
  data () {
    return {
      data: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      fetchTest().then(res => {
        this.data = res.result
      })
    },
    goBack () {
      this.$router.push({name: 'HelloWorld'})
    },
    goA () {
      this.$router.push({name: 'a'})
      Bus.$emit('selected', '我要传给兄弟组件们，你收到没有')
      console.log(Bus)
    },
    goB () {
      this.$router.push({name: 'b'})
    }
  }

}
</script>

<style lang="less" scoped>
body{
  background: red;
}
ul li{
  border-bottom:2px solid #d9d9d9;
  padding:10px;
}
</style>
