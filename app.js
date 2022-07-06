const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      range: 1,
      name: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },

    add() {
      this.counter += +this.range;
    },

    reduce() {
      this.counter -= +this.range;
    },

    changeRange(event) {
      this.range = event.target.value;
    }
  }
});

app.mount('#events');
