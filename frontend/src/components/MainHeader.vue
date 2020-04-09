<template>
  <div>
    <H1>KPC Monitoring v2</H1>
    <b-nav tabs>
      <b-nav-item active><router-link :to="{ name: 'index'}" class="link">Monitor</router-link></b-nav-item>
      <b-nav-item><router-link :to="{ name: 'indexMonitorGroup'}" class="link">Monitor group</router-link></b-nav-item>
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
