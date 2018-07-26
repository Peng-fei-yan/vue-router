<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link to="/home" tag="li">home</router-link>
        
        <router-link to="/document" tag="li">document</router-link>

        <router-link to="/about" tag="li"
          v-on:mouseover.native="mouseOver()"
          v-on:mouseleave.native="mouseLeave()">about

        </router-link>
      </ul>
    </div>
    <div class="nav-list" v-show="bool" v-on:mouseover="mouseOver()"
          v-on:mouseleave="mouseLeave()">
      <router-link to="/study" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/work"  tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/hobby"  tag="li">
        <a>hobby</a>
      </router-link>
    </div>
    
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      bool:false
    }
  },
  methods:{
    mouseOver(){
      this.bool=true;
      console.log(111);
    },

    mouseLeave(){
      this.bool=false;
      console.log(222);
      
    }
  }
};
</script>

<style>
</style>
