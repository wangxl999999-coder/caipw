const { dailyPlan, recipes } = require('../../utils/data.js')
const { showToast } = require('../../utils/util.js')

Page({
  data: {
    todayDate: '',
    dailyPlan: {}
  },

  onLoad() {
    this.setTodayDate()
    this.loadDailyPlan()
  },

  setTodayDate() {
    const now = new Date()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    const weekDay = weekDays[now.getDay()]
    this.setData({
      todayDate: `${month}月${day}日 ${weekDay}`
    })
  },

  loadDailyPlan() {
    this.setData({ dailyPlan })
  },

  goToDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/recipe-detail/recipe-detail?id=${id}`
    })
  },

  savePlan() {
    showToast('食谱已保存')
  }
})
