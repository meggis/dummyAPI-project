<template>
  <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/user">User list</router-link>
        <router-link to="/post">Posts list</router-link>
        <!-- <router-link to="/comment"></router-link> -->
        <router-link to="/tag">Post by tag</router-link>
        <router-link to="/profile"></router-link>
        <router-link to="/user-posts"></router-link>
        <router-link to="/posts-tag"></router-link>
      </div>
    <router-view />
  </div>
</template>

<style>
@import "./styles/styles.css";

html {
  height: 100%;
}

a:-webkit-any-link {
  text-decoration: none;
}

hr {
  color: white;
  height: 10px;
}

body {
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
  font-size: 10px;
}

#app {
  text-align: center;
}

#nav {
  padding: 30px;
  color: white;
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

#nav a:hover{
  border-bottom: solid white 1px;
}



</style>
