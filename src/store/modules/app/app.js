export default {
  namespaced: true,
  state: {
    loading: false,
    showHeader: true,
    showDialog: false
  },
  getters: {
    showDialog: state => state.showDialog
  },
  mutations: {
    setShowHeader (state, payload) {
      state.showAppHeader = payload
    },
    setShowDialog (state, payload) {
      state.showDialog = payload
    },
    startLoading (state) {
      state.loading = true
    },
    stopLoading (state) {
      state.loading = false
    }
  },
  actions: {}
}
