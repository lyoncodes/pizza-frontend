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

a, #nav a.router-link-exact-active {
  color: #42b983;
}

.col-lg{
  width: 100%;
}
.col-md{
  width: 45%;
}
.col-sm{
  width: 25%;
}
.col-xs{
  width: 15%;
}

.menu{
  display: flex;
  flex-wrap: wrap;
}

.card-item{
  /* border: 1px solid #a32b2b; */
  border-radius: 1rem;
  box-shadow: 10px 10px 10px -5px rgba(143,142,142,0.43);
  justify-content: space-around;
  margin: 10px;
  /* width: 28%; */
  transition: all .5s ease;
}

.card-item:hover{
  /* border: 1px solid #b9424c; */
  box-shadow: 7px 7px 7px -5px rgba(143,142,142,0.43);
  cursor: pointer;
}

.card-item > * {
  text-align: left;
}

.card-item-header{
  display: flex;
  justify-content: flex-end;
}

.card-item-content{
  padding: 10px 10px 10px 10px;
}

.status-bar::after {
  background-color: #a32f39;
  border-radius: 1rem;
  content: "";
  display: block;
  height: 5px;
  width: 90%;
}

.card-tag {
  background-color: #42b983;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  position: relative;
  float: right;
  font-size: 1rem;
}

.card-btn{
  float: right;
  margin: 5px;
}

.caption {
  font-size: .75em;
}

.cta, .cx-cta, .cx-cta-green {
  border: none;
  transition: all .5s ease;
}

.cta, .cx-cta {
  background: #b9424c;
}

.cx-cta-green {
  color: #fff;
  background-color: #42b983
}

.cx-cta, .cx-cta-green {
  height: 50px;
  width: 50px;
  border-radius: 100px;
}

.cta > a, .cx-cta, .cx-cta-green {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}

.cx-cta:hover, .cta:hover, .cx-cta-green:hover {
  cursor: pointer;
}

.cx-cta:hover, .cta:hover {
  background: #a32f39;
  border: none;
}

.cx-cta-green:hover{
  background: #2c8e62;
}

.cta {
  border-radius: 5px;
  padding: .75em;
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
  .card-item{
    width: 90%;
  }
}

</style>
