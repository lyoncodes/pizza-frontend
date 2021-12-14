<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/orders">Orders</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.menu{
  display: flex;
  flex-wrap: wrap;
}

.menu-item{
  border: 1px solid pink;
  margin: 10px;
  padding: 10px;
  width: 30%;
}

.menu-item:hover{
  background-color: rgba(253, 246, 236, 0.795);
  cursor: pointer;
}

@media (max-width: 1300px){
  .menu{
    justify-content: center;
  }
}
@media (max-width: 1000px){
  .menu{
    flex-direction: column;
  }
  .menu-item{
    width: 90%;
  }
}

</style>
