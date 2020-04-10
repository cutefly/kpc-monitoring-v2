<template>
  <div>
    <H1>KPC Monitoring v2</H1>
  <b-nav>
    <b-nav-item><router-link :to="{ name: 'index'}" class="link">Monitor</router-link></b-nav-item>
    <b-nav-item><router-link :to="{ name: 'index-monitor-group'}" class="link">Monitor Group</router-link></b-nav-item>
  </b-nav>
  </div>
</template>
 
<script>
export default {
  name: "main-header"
};
</script>
 
<style scoped>
</style>
