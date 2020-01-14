<template>
  <div id="app">
    <div id="navbar navbar-expand-lg navbar-light shadow mb-4">
      <div class="container">
        <router-link to="/" class="navbar-brand">VueX</router-link>
        <ul class="navbar-nav ml-auto mt-2">
          <li class="nav-item">
            <router-link to="/create" class="nav-link">Create</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <router-view :todos="$store.state.todos" />
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
