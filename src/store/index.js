import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },

  getters: {
    POSTS: state => {
      return state.posts
    }
  },

  mutations: {
    SET_CONTENT: (state, payload) => {
      state.posts = payload
    },
    ADD_CONTENT: (state, payload) => {
      state.posts.push(payload)
    },

    TOGGLE_POST_LIKE: (state, payload) => {
      const item = state.posts.find(element => element.id === payload)
      item.liked = !item.liked
      item.liked ? ++item.like : --item.like 
    }
  },

  actions: {
    GET_CONTENT: async (context, payload) => {
      const { data } = await Axios.get('http://localhost:3000/posts')
      context.commit('SET_CONTENT', data)
    },

    SAVE_CONTENT: async (context, payload) => {
      const { data } = await Axios.post('http://localhost:3000/posts')
      context.commit('ADD_CONTENT', payload)
    },



  },
  modules: {
  }
})
