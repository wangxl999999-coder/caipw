const app = getApp()
const { showToast } = require('../../utils/util.js')

Page({
  data: {
    isLogin: false,
    userInfo: {},
    stats: {
      recipes: 0,
      favorites: 0,
      followers: 0,
      following: 0
    }
  },

  onShow() {
    this.loadUserInfo()
    this.loadStats()
  },

  loadUserInfo() {
    const isLogin = app.globalData.isLogin
    const userInfo = app.globalData.userInfo || {}
    this.setData({ isLogin, userInfo })
  },

  loadStats() {
    const favorites = app.globalData.favorites.length
    this.setData({
      'stats.favorites': favorites,
      'stats.recipes': Math.floor(Math.random() * 10),
      'stats.followers': Math.floor(Math.random() * 500),
      'stats.following': Math.floor(Math.random() * 50)
    })
  },

  goToLogin() {
    wx.showModal({
      title: '登录',
      content: '模拟登录功能',
      success: (res) => {
        if (res.confirm) {
          const userInfo = {
            id: 'U' + Date.now(),
            nickname: '美食达人',
            avatar: 'https://picsum.photos/200/200?random=' + Date.now()
          }
          app.saveUserInfo(userInfo)
          this.loadUserInfo()
          this.loadStats()
          showToast('登录成功')
        }
      }
    })
  },

  logout() {
    wx.showModal({
      title: '提示',
      content: '确定退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          app.globalData.isLogin = false
          app.globalData.userInfo = null
          wx.removeStorageSync('userInfo')
          this.loadUserInfo()
          showToast('已退出登录')
        }
      }
    })
  },

  goToMyRecipes() {
    this.checkLogin(() => {
      showToast('我的菜谱功能')
    })
  },

  goToFavorites() {
    wx.navigateTo({
      url: '/pages/favorites/favorites'
    })
  },

  goToHistory() {
    this.checkLogin(() => {
      showToast('浏览记录功能')
    })
  },

  goToCheckIn() {
    this.checkLogin(() => {
      showToast('我的打卡功能')
    })
  },

  goToMyPlan() {
    this.checkLogin(() => {
      showToast('我的食谱计划功能')
    })
  },

  goToPublish() {
    this.checkLogin(() => {
      wx.navigateTo({
        url: '/pages/publish/publish'
      })
    })
  },

  goToFeedback() {
    this.checkLogin(() => {
      showToast('意见反馈功能')
    })
  },

  goToSettings() {
    showToast('设置功能')
  },

  checkLogin(callback) {
    if (!this.data.isLogin) {
      this.goToLogin()
      return
    }
    callback()
  }
})
