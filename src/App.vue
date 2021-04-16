<template>
  <div id="app">
      <div id="nav">
        <router-link to="/"></router-link>
        <router-link to="/user">USER ENDPOINTS</router-link>
        <router-link to="/post">Users posts</router-link>
        <router-link to="/comment">User comment</router-link>
        <router-link to="/tag">User tag list</router-link>
      </div>
    <router-view />
  </div>
</template>
<style>
#app {
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
  border-bottom: solid white 1px;
}

#nav a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

#nav a.router-link-exact-active {
  border-bottom: solid white 1px;
}

</style>
