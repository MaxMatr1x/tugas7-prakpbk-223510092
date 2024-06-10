<template>
  <div id="app">
    <div class="container">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f958;
  color: #333;
  background-image: url('/src/assets/wall.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-attachment: fixed;
}

#app {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

/* Container styles */
.container {
  background-color: #ffffff5b;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Navbar styles */
nav {
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  background-color: #102e42;
  border-radius: 4px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #ecf0f1;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: #2980b9;
}

nav a.router-link-active {
  font-weight: bold;
  color: #2980b9;
}

/* Content styles */
router-view {
  padding: 20px;
}
</style>
