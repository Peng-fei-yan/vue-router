<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link to="/home" tag="li">home</router-link>
        
        <router-link to="/document" tag="li">document</router-link>

        <router-link to="/about" tag="li">about</router-link>
      </ul>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
