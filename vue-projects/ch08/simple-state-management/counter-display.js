const CounterDisplay = {
  setup() {
    const store = Vue.inject("store");
    const count = Vue.computed(() => store.getCount());
    return { count };
  },
  template: `
    <div>{{ count }}</div>
  `
};

export default CounterDisplay;
