<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  async created() {
    await this.getMessage()
  },
  methods: {
    async getMessage() {
      let res = await axios.get(process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000')
      this.msg = res.data
      console.log(res, 'aqui');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
