<template>
  <div>
    <b-container fluid="md">
      <h3>Monitor Grooup List</h3>
      <b-table striped hover :items="groups" :fields="fields">
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
    console.log('called monitor-group index')
    // 컴포넌트가 생성될 때, /api/monitor-group에 요청을 보냅니다.
    this.$http.get("/api/monitor-group").then(response => {
      this.groups = response.data;
    });
  },
  data() {
    return {
      fields: [
        "seq",
        "group_id",
        "group_name",
        "receiver",
        "memo"
      ],
      groups: []
    };
  }
};
</script>
