<template>
  <div>
    <b-container fluid="md">
      <h3>Monitor List</h3>
      <b-table
        striped
        hover
        :items="monitors"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template v-slot:cell(title)="data">
          <!-- `data.value` is the value after formatted by the Formatter -->
          <router-link
            :to="{ name: 'view', params: { seq: data.item.seq }}"
            class="link"
          >{{ data.value }}</router-link>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <!--
      <p class="mt-3">Current Page: {{ currentPage }}</p>
      -->
      <router-link :to="{ name: 'create'}" class="link">
        <b-button variant="info">Create</b-button>
      </router-link>
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
      perPage: 5,
      currentPage: 1,
      fields: [
        "seq",
        {
          key: "period",
          label: "Period",
          formatter: value => {
            var picked = this.periods.filter(function(o) {
              return o.value == value;
            });
            return picked[0].text;
          }
        },
        "title",
        "monitor_type",
        "use_flag",
        "sender",
        "receiver"
      ],
      monitors: [],
      periods: [
        { text: "Select One", value: null },
        { text: "1 Minute", value: 1 },
        { text: "5 Minutes", value: 2 },
        { text: "10 Minutes", value: 3 },
        { text: "30 Minutes", value: 4 },
        { text: "1 Hour", value: 5 },
        { text: "1 Day", value: 6 }
      ]
    };
  },
  computed: {
    rows() {
      return this.monitors.length;
    }
  }
};
</script>
