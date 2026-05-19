const { recipes, authors } = require('../../utils/data.js')
const { formatCount } = require('../../utils/util.js')

Page({
  data: {
    activeTab: 'recipe',
    recipes: [],
    sortedRecipes: [],
    authors: [],
    sortedAuthors: []
  },

  onLoad() {
    const sortedRecipes = [...recipes].sort((a, b) => b.likes - a.likes)
    const sortedAuthors = [...authors].sort((a, b) => b.followers - a.followers)
    this.setData({
      recipes,
      sortedRecipes,
      authors,
      sortedAuthors
    })
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab
    this.setData({ activeTab: tab })
  },

  formatCount(num) {
    return formatCount(num)
  },

  goToDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/recipe-detail/recipe-detail?id=${id}`
    })
  }
})
