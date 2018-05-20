import * as types from '../types'

const state ={
  lefNavStatus:false,
  showToast:false,
  showSuccess:true,
  showFail:true,
  toastMsg:'操作成功',
  alertMsg:'退出登录',
  showAlert:false

}
const actions ={
  setNavState({commit},status) {
    commit(types.COM_NAV_STATUS,status)
  },
  showToast({commit},status){
    commit(types.COM_SHOW_TOAST,status)
  },
  showFail({commit},status){
    commit(types.COM_SHOW_FAIL,status)
  },
  toastMsg({commit},status){
    commit(types.COM_TOAST_MSG,status)
  },
  showAlert({commit},status){
    commit(types.COM_SHOW_ALERT,status)
  },
  alertMsg({commit},str){
    commit(types.COM_ALERT_MSG,str)
  }
}
const getters ={

}
const mutations ={
  [types.COM_NAV_STATUS](state,status){
    state.lefNavStatus = status
  },
  [types.COM_SHOW_TOAST](state,status){
    state.showToast=status
  },
  [types.COM_SHOW_FAIL](state,status){
    state.showFail=status
  },
  [types.COM_TOAST_MSG](state,str){
    state.toastMsg=str
  },
 [types.COM_SHOW_ALERT](state, status) {
        state.showAlert = status
    },
  [types.COM_ALERT_MSG](state, str) {
        state.alertMsg = str
    },

}

export  default {
  state,
  actions,
  getters,
  mutations
}
