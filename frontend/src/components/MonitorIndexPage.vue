<template>
  <div>
    <b-container fluid="md">
      <h3>Monitor List</h3>
      <b-table striped hover :items="monitors" :fields="fields">
        <template v-slot:cell(title)="data">
          <!-- `data.value` is the value after formatted by the Formatter -->
          <router-link
            :to="{ name: 'show', params: { seq: data.item.seq }}"
            class="link"
          >{{ data.value }}</router-link>
        </template>
      </b-table>
      <router-link :to="{ name: 'create'}" class="link"><b-button variant="info">Create</b-button></router-link>
    </b-container>
  </div>
</template>

<script>
// 참조 URL : https://bootstrap-vue.js.org/docs/components/table
export default {
  created() {
    // 컴포넌트가 생성될 때, /api/monitors에 요청을 보냅니다.
    this.$http.get("/api/monitors").then(response => {
      this.monitors = response.data;
    });
  },
  data() {
    return {
      fields: [
        "seq",
        "period",
        {
          key: "title",
          label: "타이틀",
          aaa: "12"
        },
        "monitor_type",
        "use_flag",
        "sender",
        "receiver"
      ],
      monitors: []
    };
  }
};
</script>
