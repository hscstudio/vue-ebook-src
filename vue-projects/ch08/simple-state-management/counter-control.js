const CounterControl = {
  setup() {
    const store = Vue.inject("store");
    const increment = () => {
      // increment = last count + 1
      store.setCount(store.getCount() + 1);
    };
    return { increment };
  },
  template: `
    <div>
      <button @click="increment()">+</button>
    </div>
  `
};

export default CounterControl;
