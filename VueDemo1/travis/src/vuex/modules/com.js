import * as types from '../types'

const state ={
  lefNavStatus:false
}
const action ={
  setNavState({commit},status) {
    commit(types.COM_NAV_STATUS,status)
  }
}
const getters ={

}
const mutations ={
  [types.COM_NAV_STATUS](state,status){
    state.lefNavStatus = status
  }
}

export  default {
  state,
  action,
  getters,
  mutations
}
