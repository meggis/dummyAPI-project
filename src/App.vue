<template>
  <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/user">User list</router-link>
        <router-link to="/profile"></router-link>
        <router-link to="/post">Posts list</router-link>
        <!-- <router-link to="/comment">User comment</router-link> -->
        <router-link to="/tag">Post by tag</router-link>
      </div>
    <router-view />
  </div>
</template>
<style scoped>
#app {
  text-align: center;
}

#nav {
  padding: 30px;
  border-bottom: solid white 1px;
  color: white;
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
