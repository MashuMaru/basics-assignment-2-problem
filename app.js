const app = Vue.createApp({
  data: function () {
      return {
          input: '',
          keyUpValue: ''

      }
  },
  methods: {
    showAlert() {
      alert("This button was clicked.");
    },
    monitorKey(event) {
        this.input = event.target.value;
    },
    enterToGet(event) {
        this.keyUpValue = event.target.value;
    }
  },
});
app.mount("#assignment");
