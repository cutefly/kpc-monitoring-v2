<template>
  <div>
    <b-container fluid="md">
      <h3>View Monitor Group</h3>
      <b-form v-if="show">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Group ID:"
          label-for="group_id"
        ><b-form-input
            v-model="group.group_id"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Group Name:"
          label-for="group_name"
        ><b-form-input
            v-model="group.group_name"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Receiver:"
          label-for="receiver"
        ><b-form-textarea
            v-model="group.receiver"
            rows="3"
            max-rows="10"
            readonly
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Memo:"
          label-for="memo"
        ><b-form-textarea
            v-model="group.memo"
            rows="3"
            max-rows="10"
            readonly
          ></b-form-textarea>
        </b-form-group>
        <b-button variant="primary" v-on:click="editGroup">Edit</b-button>&nbsp;
        <b-button variant="danger" v-on:click="deleteGroup">Delete</b-button>&nbsp;
        <router-link :to="{ name: 'index-monitor-group'}" class="link"><b-button variant="info">List</b-button></router-link>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ group }}</pre>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  created: function() {
    var seq = this.$route.params.seq;
    this.$http.get(`/api/monitor-group/${seq}`).then(response => {
      this.group = response.data;
    });
  },
  data: function() {
    return {
      group: {},
      show: true
    };
  },
  methods: {
    editGroup: function() {
      this.$router.push({ name: 'edit-monitor-group', params: {seq: this.group.seq} })
    },
    deleteGroup: function() {
      this.$http.delete(`/api/monitor-group/${this.group.seq}`)
        .then((response) => {
          console.log(`response: ${JSON.stringify(response)}`)
          this.$router.push({ name: 'index-monitor-group' })
        })
        .catch((error) => {
          console.log(error)
        })

    }
  }
};
</script>