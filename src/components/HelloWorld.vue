<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input type="text" v-model="user" />
    <p>{{$store.state.user}}</p>
    <router-link :to="{name: 'Test', params: {id: 123}}">go to test</router-link>
    <button @click="goTest">点击跳转</button>
    <button @click="goOut">点击退出</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isGo: false,
      user: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    goTest () {
      // 字符串，这里的字符串是路径path匹配

      if (this.user === 'login') {
        window.localStorage.setItem('user', this.user)
      }
      if (localStorage.getItem('user')) {
        this.isGo = true
      } else {
        this.isGo = false
      }
      this.$store.commit('login', this.isGo)
      if (this.$store.state.user) {
        this.$router.push({name: 'Test', params: {id: 123}})
      }
      // this.$router.push('test')
      // 带查询参数，变成 /test?age=123
      // this.$router.push({path: 'test', query: {age: '123'}})
    },
    goOut () {
      window.localStorage.clear()
      this.isGo = false
    }
  }
}
</script>
<style>

</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
