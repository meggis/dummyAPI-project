<template>
  <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/user">User list</router-link>
        <router-link to="/post">Posts list</router-link>
        <router-link to="/tag">Post by tag</router-link>
      </div>
    <router-view class="page-container"/>
    <Footer />
  </div>
</template>

<script>
import Footer from './views/Footer'
export default {
  name: "Home",
  components: {
    Footer
  }
}
</script>

<style>
hr {
  color: white;
  height: 10px;
}

#nav {
  padding: 30px;
  color: white;
  border-bottom: solid white 1px;
  text-align: center
}

#nav a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

#nav a.router-link-exact-active {
  border-bottom: solid white 1px;
}

#nav a:hover{
  border-bottom: solid white 1px;
}

p.p-class.text-left {
  margin-bottom: 0px;
}

.page-container {
  padding-bottom: 60px;
}
</style>
