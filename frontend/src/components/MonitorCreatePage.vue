<template>
  <div>
    <b-container fluid="md">
      <h3>Create Monitor</h3>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Period:"
          label-for="period"
        >
          <b-form-select id="period" v-model="monitor.period" :options="periods" required></b-form-select>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Title:"
          label-for="title"
        >
          <b-form-input
            id="title"
            v-model="monitor.title"
            type="text"
            required
            placeholder="Enter title"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Monitor Type:"
          label-for="monitor_type"
        >
          <b-form-select id="monitor_type" v-model="monitor.monitor_type" :options="types" required></b-form-select>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="2"
          label-align-sm="right"
          label="Query:"
          label-for="query"
        >
          <b-form-textarea
            id="query"
            v-model="monitor.query"
            placeholder="Enter query..."
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
          label="Check Type:"
          label-for="check_type"
        >
          <b-form-select id="check_type" v-model="monitor.check_type" :options="checks" required></b-form-select>
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
            id="check_value"
            v-model="monitor.check_value"
            type="text"
            required
            placeholder="Enter check value"
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
            id="wait_time"
            v-model="monitor.wait_time"
            type="text"
            required
            placeholder="Enter wait time(seconds)"
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
            id="warn_time"
            v-model="monitor.warn_time"
            type="text"
            required
            placeholder="Enter warn time(seconds)"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="4" label-cols-lg="2" label-align-sm="right" label="Use Flag:">
          <b-form-radio-group id="use_flag" v-model="monitor.use_flag" name="radio-use-flag">
            <b-form-radio value="Y">Enable</b-form-radio>
            <b-form-radio value="N">Disable</b-form-radio>
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
            id="sender"
            v-model="monitor.sender"
            type="text"
            required
            placeholder="Enter sender"
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
            id="receiver"
            v-model="monitor.receiver"
            type="text"
            required
            placeholder="Enter receiver"
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
            id="message_format"
            v-model="monitor.message_format"
            type="text"
            required
            placeholder="Enter message format"
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
            id="interval"
            v-model="monitor.interval"
            type="text"
            required
            placeholder="Enter interval"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>&nbsp;
        <b-button type="reset" variant="danger">Reset</b-button>&nbsp;
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
    this.monitor.period = null;
    this.monitor.monitor_type = null;
    this.monitor.check_type = null;
    this.monitor.wait_time = 0;
    this.monitor.warn_time = 0;
    this.monitor.use_flag = 'Y';
    this.monitor.interval = 0;
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
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(`request: ${JSON.stringify(this.monitor)}`);

      var newMonitor;
      this.$http.post(`/api/monitors`, this.monitor)
        .then((response) => {
          newMonitor = response.data
          newMonitor.seq
          console.log(`response: ${JSON.stringify(response)}`)
          this.$router.push({ name: 'index' })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.monitor.period = null;
      this.monitor.title = null;
      this.monitor.monitor_type = null;
      this.monitor.query = null;
      this.monitor.check_type = null;
      this.monitor.check_value = null;
      this.monitor.wait_time = 0;
      this.monitor.warn_time = 0;
      this.monitor.use_flag = 'Y';
      this.monitor.sender = null;
      this.monitor.receiver = null;
      this.monitor.message_format = null;
      this.monitor.interval = 0;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
   }
  }
};
</script>