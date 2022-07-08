const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      range: 1,
      fullName: '',
      firstName: '',
      lastName: ''
    };
  },
  // computed: {
  //   getFullName() {
  //     if (this.firstName == '' || this.lastName == '') {
  //       return;
  //     } 
  //     return this.firstName + " " + this.lastName;
  //   }
  // },
  watch: {
    firstName() {
      this.getName();
    },
    lastName() {
      this.getName();
    }
  },
  methods: {
    getName() {
      if (this.firstName == '' || this.lastName == '') {
        return;
      }
      this.fullName = this.firstName + " " + this.lastName;
    }
  }
});

app.mount('#events');
