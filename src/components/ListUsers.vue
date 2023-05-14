<template>
  <div class="tes">
    <h1>Add User</h1>
    <form>
      <input v-model="user.name" placeholder="name">
      <input v-model="user.email" placeholder="email">
      <input type="button" @click="save" value="Submit">
    </form>
    <br>

    <h1>List Users</h1>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'usersList',
  data () {
    return {
      msg: '',
      headerMsg: 'static header msg',
      user: {
        user: null,
        email: null
      },
      users: []
    }
  },
  async created () {
    await this.getMessage()
  },
  methods: {
    async save () {
      let res = await axios.post(process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000', this.user)
      this.users.push(res.data)
    },
    async getMessage () {
      let res = await axios.get(process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000')
      this.users = res.data
      console.log(res, 'aqui');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

