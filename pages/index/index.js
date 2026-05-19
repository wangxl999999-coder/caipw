const { categories, banners, recipes } = require('../../utils/data.js')
const { formatCount } = require('../../utils/util.js')

Page({
  data: {
    categories: [],
    banners: [],
    hotRecipes: [],
    todayRecommend: [],
    seasonRecipes: [],
    guessRecipes: [],
    beginnerRecipes: []
  },

  onLoad() {
    this.initData()
  },

  onShow() {
    
  },

  initData() {
    this.setData({
      categories,
      banners,
      hotRecipes: recipes.slice(0, 4),
      todayRecommend: recipes.slice(0, 4),
      seasonRecipes: recipes.slice(2, 5),
      guessRecipes: recipes.slice(0, 6),
      beginnerRecipes: recipes.filter(r => r.difficulty === '简单').slice(0, 5)
    })
  },

  formatCount(num) {
    return formatCount(num)
  },

  goToSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  goToCategory(e) {
    const { id, name } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/category/category?id=${id}&name=${name}`
    })
  },

  goToRanking() {
    wx.navigateTo({
      url: '/pages/ranking/ranking'
    })
  },

  goToDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/recipe-detail/recipe-detail?id=${id}`
    })
  },

  onPullDownRefresh() {
    this.initData()
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 1000)
  },

  onShareAppMessage() {
    return {
      title: '美食菜谱 - 发现更多美味',
      path: '/pages/index/index'
    }
  }
})
