<template>
  <div>
    <b-container fluid="md">
      <h3>View Monitor</h3>
      <b-form v-if="show">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Period:"
          label-for="period"
        ><b-form-input
            v-model="periodText"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Title:"
          label-for="title"
        ><b-form-input
            v-model="monitor.title"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Monitor Type:"
          label-for="monitor_type"
        ><b-form-input
            v-model="monitorTypeText"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Query:"
          label-for="query"
        ><b-form-textarea
            v-model="monitor.query"
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
          label="Check Type:"
          label-for="check_type"
        ><b-form-input
            v-model="checkTypeText"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Check Value:"
          label-for="check_value"
        >
          <b-form-input
            v-model="monitor.check_value"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Wait time:"
          label-for="wait_time"
        >
          <b-form-input
            v-model="monitor.wait_time"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Warn time:"
          label-for="warn_time"
        >
          <b-form-input
            v-model="monitor.warn_time"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="4" label-cols-lg="2" label-align-sm="right" label="Use Flag:">
          <b-form-radio-group id="use_flag" v-model="monitor.use_flag" name="radio-use-flag" >
            <b-form-radio value="Y" disabled >Enable</b-form-radio>
            <b-form-radio value="N" disabled >Disable</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Sender:"
          label-for="sender"
        >
          <b-form-input
            v-model="monitor.sender"
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
        >
          <b-form-input
            v-model="monitor.receiver"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Message Format:"
          label-for="message_format"
          description="Query Response : {CNT: 8, TOTAL: 100} => Message Format : 'Count : {}, Total : {}' ( or 'Count : {CNT}, Total : {TOTAL}')"
        >
          <b-form-input
            v-model="monitor.message_format"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Interval:"
          label-for="interval"
        >
          <b-form-input
            v-model="monitor.interval"
            type="text"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-button variant="primary" v-on:click="editMonitor">Edit</b-button>&nbsp;
        <b-button variant="danger" v-on:click="deleteMonitor">Delete</b-button>&nbsp;
        <router-link :to="{ name: 'index'}" class="link"><b-button variant="info">List</b-button></router-link>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ monitor }}</pre>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  created: function() {
    var seq = this.$route.params.seq;
    this.$http.get(`/api/monitors/${seq}`).then(response => {
      this.monitor = response.data;
    });
  },
  data: function() {
    return {
      monitor: {},
      periods: [
        { text: "Select One", value: null },
        { text: "1 Minute", value: 1 },
        { text: "5 Minutes", value: 2 },
        { text: "10 Minutes", value: 3 },
        { text: "30 Minutes", value: 4 },
        { text: "1 Hour", value: 5 },
        { text: "1 Day", value: 6 }
      ],
      types: [
        { text: "Select One", value: null },
        { text: "ORACLE", value: "ORACLE" },
        { text: "MSSQL", value: "MSSQL" },
        { text: "API", value: "API" },
        { text: "SERVER", value: "SERVER" }
      ],
      checks: [
        { text: "Select One", value: null },
        { text: "Exist", value: "exist" },
        { text: "Equal", value: "eq" },
        { text: "Not Equal", value: "ne" },
        { text: "Greater Than", value: "gt" },
        { text: "Great or Equal", value: "ge" },
        { text: "Less Than", value: "lt" },
        { text: "Less or Equal", value: "le" },
        { text: "Like", value: "like" },
        { text: "Contain", value: "in" },
        { text: "Ignore", value: "ignore" }
      ],
      show: true
    };
  },
  computed: {
    periodText: function () {
      if ( !this.monitor.period ) return '';
      var value = this.monitor.period;
      var picked = this.periods.filter(function(o) {
        return o.value == value
      });
      console.log(JSON.stringify(picked));
      return picked[0].text;      
    },
    monitorTypeText: function () {
      if ( !this.monitor.monitor_type ) return '';
      var value = this.monitor.monitor_type;
      var picked = this.types.filter(function(o) {
        return o.value === value
      });
      console.log(JSON.stringify(picked));
      return picked[0].text;      
    },
    checkTypeText: function () {
      if ( !this.monitor.check_type ) return '';
      var value = this.monitor.check_type;
      var picked = this.checks.filter(function(o) {
        return o.value === value
      });
      console.log(JSON.stringify(picked));
      return picked[0].text;      
    }
  },
  methods: {
    editMonitor: function() {
      this.$router.push({ name: 'edit', params: {seq: this.monitor.seq} })
    },
    deleteMonitor: function() {
      this.$http.delete(`/api/monitors/${this.monitor.seq}`)
        .then((response) => {
          console.log(`response: ${JSON.stringify(response)}`)
          this.$router.push({ name: 'index' })
        })
        .catch((error) => {
          console.log(error)
        })

    }
  }
};
</script>