<template>
  <div>
    <b-container fluid="md">
      <h3>Edit Monitor Group</h3>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Group ID:"
          label-for="group_id"
        >
          <b-form-input
            id="group_id"
            v-model="group.group_id"
            type="text"
            required
            placeholder="Enter group id(G1, G2, ...)"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Group Name:"
          label-for="group_name"
        >
          <b-form-input
            id="group_name"
            v-model="group.group_name"
            type="text"
            required
            placeholder="Enter group name"
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
            id="receiver"
            v-model="group.receiver"
            placeholder="Enter receiver(phone#telegram, ...)"
            rows="3"
            max-rows="10"
            required
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
            id="memo"
            v-model="group.memo"
            placeholder="Enter memo"
            rows="3"
            max-rows="10"
            required
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>&nbsp;
        <b-button type="reset" variant="danger">Reset</b-button>&nbsp;
        <router-link :to="{ name: 'index-monitor-group'}" class="link"><b-button variant="info">List</b-button></router-link>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ group }}</pre>
        <pre class="m-0">{{ keep_group }}</pre>
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
      this.keep_group = JSON.parse(JSON.stringify(this.group));
    });
  },
  data: function() {
    return {
      group: {},
      keep_group: {},
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(`request: ${JSON.stringify(this.group)}`);

      var newGroup;
      this.$http.put(`/api/monitor-group/${this.group.seq}`, this.group)
        .then((response) => {
          newGroup = response.data
          newGroup.seq
          console.log(`response: ${JSON.stringify(response)}`)
          this.$router.push({ name: 'index-monitor-group' })

        })
        .catch((error) => {
          console.log(error)
        })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.group = JSON.parse(JSON.stringify(this.keep_group));
      // this.form.email = ''
      // this.form.name = ''
      // this.form.food = null
      // this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>