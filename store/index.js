import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function(){
      return {
        message: 'This is store message!',
        title: ''
      };
    },
    mutations: {
      title: function(state, title) {
        state.title = title;
      }
    },
  })
}

export default createStore