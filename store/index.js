import axios from 'axios'

export const state = () => {
  return {
    isAdmin: false,
    user: null
  }
}

export const actions = {
  SET_IS_ADMIN ({ commit }, payload) {
    commit('SET_IS_ADMIN', payload)
  },
  SET_USER ({ commit }, payload) {
    commit('SET_USER', payload)
  },
}

export const mutations = {
  SET_IS_ADMIN (state, payload) {
    state.isAdmin = payload
  },
  SET_USER (state, payload) {
    state.user = payload
  },
}

export const getters = {
  getIsAdmin (state) {
    return state.isAdmin
  },
  getUser: state => {
    return state.user
  },

}
