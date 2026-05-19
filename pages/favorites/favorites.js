const app = getApp()

Page({
  data: {
    favorites: [],
    filteredFavorites: [],
    activeCategory: 'all'
  },

  onShow() {
    this.loadFavorites()
  },

  loadFavorites() {
    const favorites = app.globalData.favorites
    this.setData({ favorites })
    this.filterFavorites()
  },

  switchCategory(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ activeCategory: category })
    this.filterFavorites()
  },

  filterFavorites() {
    const { favorites, activeCategory } = this.data
    if (activeCategory === 'all') {
      this.setData({ filteredFavorites: favorites })
    } else {
      this.setData({
        filteredFavorites: favorites.filter(f => f.category === activeCategory)
      })
    }
  },

  removeFavorite(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示',
      content: '确定取消收藏吗？',
      success: (res) => {
        if (res.confirm) {
          app.removeFavorite(id)
          this.loadFavorites()
        }
      }
    })
  },

  goToDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/recipe-detail/recipe-detail?id=${id}`
    })
  },

  goExplore() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})
