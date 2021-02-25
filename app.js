const app = Vue.createApp({
  data: function () {
    return {
      inputOne: "",
      inputTwo: "",
    };
  },
  methods: {
    showAlert() {
      alert("This button was clicked.");
    },
    monitorKey(event) {  
      this.inputOne = event.target.value;
    },
    enterToGet(event) { 
      this.inputTwo = event.target.value;
    },
  },
});
app.mount("#assignment");
