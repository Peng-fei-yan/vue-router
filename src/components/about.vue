<template>
  <div>
    关于我
    <hr>
    <div class="nav-box">
      <ul class="nav">
      <!--<router-link to="/about" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hobby</a>
      </router-link>-->
      <router-link to="/study" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/work"  tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/hobby"  tag="li">
        <a>hobby</a>
      </router-link>
    </ul>
    </div>
    <hr>

    <router-view></router-view>

  </div>
</template>

<script>
export default {};
</script>
<style>
</style>
