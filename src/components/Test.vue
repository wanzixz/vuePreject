<template>
  <div>
    <h1></h1>
    <ul>
      <li v-for="(item, key) of data" :key="key">
        <div>{{item.author}}</div>
        <div>{{item.comment}}</div>
        <div>{{item.data}}</div>
        <div>{{item.ready}}</div>
      </li>
    </ul>
    <input type="button" value="点击" @click="fetchData()">
    <button @click="goBack">后腿</button>
    <input type="button" value="点击" @click="goA()">
    <transition name="el-fade-in">
      <router-view ></router-view>
    </transition>
  </div>
</template>

<script>
import { fetchTest } from 'service/homePage'
// const userId = 123
export default {
  name: 'test',
  data () {
    return {
      data: []
    }
  },
  created () {
    this.fetchData()
    console.log(11, this.$route.query)
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
