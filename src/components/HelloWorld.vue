<template>
  <div>
    <div class="hello">
      <h1>{{ headerMsg }}</h1>

      <img :src="img">

    </div>
    <h2>
      <router-link to="users">users</router-link>
    </h2>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      img: 'https://picsum.photos/200/300',
      headerMsg: 'random imgs'
    }
  },
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
