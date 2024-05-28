import _ from 'lodash';

function createStore(Vue) {
  return new Vue({
    data() {
      return {
        state: {}
      }
    },
    methods: {
      set(key, value) {
        this.$set(this.state, key, value);
      },
      get(props) {
        return _.get(this.state, props);
      }
    }
  });
}

export default {
  install(Vue) {
    const store = createStore(Vue);
    window.vueStore = store;
    Vue.prototype.$store = store;
  }
};
