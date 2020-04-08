<template>
  <div class="detail">
    <h1>{{monitor.title}}</h1>
    <section>
      <h2>모니터정보</h2>
      <dl class="info">
        <dt>타입</dt>
        <dd>{{monitor.monitor_type}}</dd>
        <dt>query</dt>
        <dd>{{monitor.query}}</dd>
        <dt>receiver</dt>
        <dd>{{monitor.receiver}}</dd>
      </dl>
    </section>
    <section>
      <h2>줄거리</h2>
      <p v-html="monitor.message_format" class="synopsis"></p>
    </section>
    <router-link :to="{ name: 'edit', params: { seq: monitor.seq }}" class="link">수정</router-link>
    <router-link :to="{ name: 'index'}" class="link">돌아가기</router-link>
  </div>
</template>
<script>
export default {
  created: function () {
    var seq = this.$route.params.seq;
    this.$http.get(`/api/monitors/${seq}`)
        .then((response) => {
          this.monitor = response.data[0]
        })
  },
  data: function () {
    return {
      monitor: {}
    }
  }
}
</script>